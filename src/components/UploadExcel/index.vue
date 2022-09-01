<!--
 * @description: description
 * @fileName: index.vue
 * @author: pierce
 * @lastDate: 2022-09-01 16:24:09
!-->

<template>
  <div>
    <input
      ref="excelUploadInput"
      type="file"
      class="excel-upload-input"
      accept=".xlsx, xls"
      @change="handleClick"
    >
    <div
      class="drop"
      @drop="handleDrop"
      @dragover="handleDragover"
      @dragenter="handleDragover"
    >
      可拖拽文件
      <el-button
        type="primary"
        size="mini"
        v-loading="loading"
        @click="handleUpload"
      >选择文件</el-button>
      <span class="spanFilename" v-if="currentFilename">当前文件：{{ currentFilename }}</span>
    </div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  data () {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null
      },
      currentFilename: ''
    }
  },
  props: {
    beforeUpload: Function,
    onSuccess: Function
  },
  methods: {
    generateData({ header, results }) {
      this.excelData.header = header
      this.excelData.results = results
      this.onSuccess && this.onSuccess(this.excelData)
    },
    handleClick(e) {
      const files = e.target.files
      const rawFile = files[0]
      console.log(rawFile.name)
      this.currentFilename = rawFile.name

      if (!rawFile) return
      this.upload(rawFile)
    },
    upload(rawFile) {
      this.$refs.excelUploadInput.value = null

      if (!this.beforeUpload) {
        this.readerData(rawFile)
        return
      }
      const before = this.beforeUpload(rawFile)
      if (before) {
        this.readerData(rawFile)
      }
    },
    readerData(rawFile) {
      this.loading = true
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = e => {
          const data = e.target.result
          const workbook = XLSX.read(data, { type: 'array' })
          const firstSheetName = workbook.SheetNames[0]
          const worksheet = workbook.Sheets[firstSheetName]
          const header = this.getHeaderRow(worksheet)
          const results = XLSX.utils.sheet_to_json(worksheet)
          this.generateData({ header, results })
          this.loading = false
          resolve()
        }
        reader.readAsArrayBuffer(rawFile)
      })
    },
    handleDrop(e) {
      e.stopPropagation()
      e.preventDefault()
      if (this.loading) return
      const files = e.dataTransfer.files
      if (files.length !== 1) {
        this.$message.error('Only support uploading one file!')
        return
      }
      const rawFile = files[0] // only use files[0]

      if (!this.isExcel(rawFile)) {
        this.$message.error('Only supports upload .xlsx, .xls, .csv suffix files')
        return false
      }
      this.upload(rawFile)
      e.stopPropagation()
      e.preventDefault()
    },
    handleDragover(e) {
      e.stopPropagation()
      e.preventDefault()
      e.dataTransfer.dropEffect = 'copy'
    },
    handleUpload() {
      this.$refs.excelUploadInput.click()
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)/.test(file.name)
    },
    getHeaderRow(sheet) {
      const headers = []
      const range = XLSX.utils.decode_range(sheet['!ref'])
      let C
      const R = range.s.r
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
        /* find the cell in the first row */
        let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
        headers.push(hdr)
      }
      return headers
    },
  }
}
</script>

<style lang="scss" scoped>
.excel-upload-input {
  display: none;
  z-index: -9999;
}
.drop {
  border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  text-align: center;
  font-size: 24px;
  color: #bbb;
  margin: 0 auto;
  border-radius: 5px;
  position: relative;
  .spanFilename {
    position: absolute;
    height: 20px;
    font-size: 16px;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    color: #666;
  }
}
</style>

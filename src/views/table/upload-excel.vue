<!--
 * @description: description
 * @fileName: upload-excel.vue
 * @author: pierce
 * @lastDate: 2022-09-01 16:28:03
!-->

<template>
  <div>
    <UploadExcelComponent
      :on-success="handleSuccess"
      :before-upload="beforeUpload"
    ></UploadExcelComponent>
    <el-table
      :data="tableData"
      border
      highlight-current-row
      max-height="485"
    >
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from '@/components/UploadExcel'

export default {
  name: 'UploadExcel',
  components: {
    UploadExcelComponent
  },
  data () {
    return {
      tableData: [],
      tableHeader: []
    }
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1

      if (isLt1M) {
        return true
      }

      this.$message({
        message: 'Please do not upload files larger than 1m in size.',
        type: 'warning'
      })
      return false
    },
    handleSuccess({ results, header }) {
      this.tableData = results
      this.tableHeader = header
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

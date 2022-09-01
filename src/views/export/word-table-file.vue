<!--
 * @description: description
 * @fileName: word-table-file.vue
 * @author: pierce
 * @lastDate: 2022-09-01 08:51:21
!-->

<template>
  <div>
    <div>
      <el-input
        v-model="fileName"
        placeholder="文件名"
        class="export-input"
        clearable
      />
      <el-button
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload(tableData)"
      >
        导出word文件
      </el-button>
    </div>

    <el-table
      :data="tableData"
      border
      script
      style="width: 100%"
      height="485"
      v-loading="loading"
    >
      <el-table-column
        prop="id"
        label="序号"
        min-width="50"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="150"
      ></el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        min-width="150"
      ></el-table-column>
      <el-table-column
        prop="tel"
        label="电话"
        min-width="150"
      ></el-table-column>
      <el-table-column
        prop="datetime"
        label="时间"
        min-width="150"
      ></el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="page-wrapper clearfix">
      <el-pagination
        background
        :page-sizes="[10, 20, 30, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.currentPage"
        :page-size="pagination.pageSize"
        :total="pagination.total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/article'
import docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'

export default {
  name: 'WordTableFile',
  data () {
    return {
      loading: false,
      downloadLoading: false,
      tableData: [],
      params: {},
      pagination: { /// 分页参数
        currentPage: 1,
        pageSize: 10,
        total: 0
      },
      fileName: ''
    }
  },
  methods: {
    getData() {
      let query = {
        ...this.params,
        ...this.pagination
      }
      delete query.total
      this.loading = true

      // 获取数据
      getList(query).then((res) => {
        this.tableData = res.data.items,
        this.pagination.total = res.data.total

        setTimeout(() => {
          this.loading = false
        }, 1.5 * 1000)

      }).catch(() => {
        this.loading = false
      })
    },
    // 当前页大小
    handleSizeChange(val) {
      this.pagination.pageSize = 1
      this.pagination.pageSize = val
      this.getData()
    },
    // 当前页
    handleCurrentChange(val) {
      this.pagination.currentPage = val
      this.getData()
    },
    // 导出数据
    handleDownload(data) {
      this.downloadLoading = true
      // 模板文件
      let docxsrc = '/table.docx'
      // 导出文件名
      let docxName = this.fileName ? this.fileName + '.docx' : '表格数据.docx'

      // 读取模板并转为二进制
      JSZipUtils.getBinaryContent(docxsrc, function(error, content) {
        if (error) {
          throw error
        }

        // 创建pizzip实例，内容为模板内容
        let zip = new PizZip(content)
        // 创建并加载docxtemplater实例
        let doc = new docxtemplater().loadZip(zip)
        // 设置模板变量值
        doc.setData({
          table: data
        })

        // 将模板变量的值进行替换
        try {
          doc.render()
        } catch (error) {
          let e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties
          }
          
          console.log(JSON.stringify({ error: e }))
          throw error
        }

        // 生成一个代表docxtemplater对象的zip文件
        let out = doc.getZip().generate({
          type: 'blob',
          mineType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        })

        // 将目标文件的对象保存为目标类型的文件，并命名
        saveAs(out, docxName)
        this.downloadLoading = false
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.export-input {
  width: 180px;
  margin-right: 6px;
}
</style>

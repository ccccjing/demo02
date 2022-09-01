<!--
 * @description: description
 * @fileName: excel-file.vue
 * @author: pierce
 * @lastDate: 2022-08-24 13:34:21
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
        @click="handleDownload"
      >
        导出excel文件
      </el-button>
    </div>

    <el-table
      :data="tableData"
      border
      script
      style="width: 100%"
      max-height="485"
      v-loading="loading"
    >
      <el-table-column
        prop="workNumber"
        label="工号"
        min-width="80"
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
        prop="birthday"
        label="出生日期"
        min-width="150"
      ></el-table-column>
      <el-table-column
        prop="tel"
        label="电话"
        min-width="150"
      ></el-table-column>
      <el-table-column
        prop="country"
        label="家庭住址"
        min-width="150"
      ></el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
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
import { getStaffList } from '@/api/article'
import { parseTime } from '@/utils'
// import { export_json_to_excel } from '@/utils/Export2Excel'

export default {
  name: 'ExcelFile',
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
      getStaffList(query).then((res) => {
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
    handleDownload() {
      this.downloadLoading = true

      import('@/utils/Export2Excel').then(excel => {
        const tHeader = [
          '工号',
          '姓名',
          '性别',
          '出生日期',
          '电话',
          '家庭住址',
          '邮箱'
        ]
        const filterVal = [
          'workNumber',
          'name',
          'sex',
          'birthday',
          'tel',
          'country',
          'email',
        ]
        const list = this.tableData
        const data = this.formatJson(filterVal, list)
        const filename = this.fileName

        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename
        })

        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
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

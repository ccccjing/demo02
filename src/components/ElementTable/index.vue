<!-- 基于element ui 封装的集搜索，展示，分页的表格组件 -->
<template>
  <div class="element-wrapper-table">
    <div class="search-area"  v-if="defaultConfig.showSearch">
        <div class="search-form">
            <slot name="search"></slot>
        </div>
        <div class="search-btns" v-if="defaultConfig.showSearch">
            <el-button size="mini" type="primary" @click="getTableData"><i class="fa fa-search"></i> 搜索</el-button>
            <el-button size="mini" @click="resetTableData"><i class="fa fa-undo"></i> 重置</el-button>
        </div>
    </div>

    <el-table
      v-loading="isShowLoading"
      :data="tableDataDetail"
      v-bind="defaultConfig.tableProps"
      stripe
      border
      size="mini"
      @selection-change="handleSelectionChange" >
        <!-- 选择框 -->
        <el-table-column
          type="selection"
          width="55"
          :reserve-selection="defaultConfig.checkStore" 
          v-if="defaultConfig.showCheckBox"
        />
        <!-- 序号 -->
        <el-table-column type="index" label="序号"  v-if="defaultConfig.showIndex" />
        <!-- 分组 -->
        <el-table-column type="expand"  v-if="defaultConfig.showExpand">
          <template slot-scope="props">
            <slot name="expand" v-bind="props"></slot>
          </template>
        </el-table-column>
        <!-- 插槽 -->
        <template v-for="(column, index) in tableColumns" >
            <!-- 有插槽,一个单元格展示多个数据 -->
            <el-table-column
              :key="`${column.prop}${index}`"
              :render-header="column.renderHeader"
              :label="column.label"
              :align="column.align ? column.align : 'center'"
              :fixed="column.fixed"
              :min-width="flexColumnWidth(column.label, column.prop) < column.minWidth ? column.minWidth : flexColumnWidth(column.label, column.prop)"
              v-if="column.slot"
            >
                <template slot-scope="scope" >
                    <slot :name="column.prop" v-bind="scope"></slot>
                </template>
            </el-table-column>
            <!-- 对数据进行处理(日期格式，数值赋值。。。)后的值 -->
            <el-table-column
              :key="`${column.prop}_${index}`"
              v-bind="column"
              :align="column.align ? column.align : 'center'"
              :prop="column.prop"
              :fixed="column.fixed"
              :show-overflow-tooltip="column.isShowTooltip"
              :min-width="flexColumnWidth(column.label, column.prop) < column.minWidth ? column.minWidth : flexColumnWidth(column.label, column.prop)"
              v-else-if="column.isFormatter"
            >
            </el-table-column>
            <!-- 直接取值 -->
            <el-table-column
              :key="`${column.prop}-${index}`"
              v-bind="column"
              :align="column.align ? column.align : 'center'"
              :prop="column.prop"
              :fixed="column.fixed"
              :show-overflow-tooltip="column.isShowTooltip"
              :min-width="flexColumnWidth(column.label, column.prop) < column.minWidth ? column.minWidth : flexColumnWidth(column.label, column.prop)"
              v-else
            >
              <template slot-scope="scope">
                <span>{{
                  scope.row[`${column.prop}`]
                }}</span>
              </template>
            </el-table-column>
        </template>
    </el-table>

    <el-pagination
      v-if="defaultConfig.isShowPagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="defaultConfig.pagination.currentPage"
      :page-sizes="defaultConfig.pagination.pageSize"
      :page-size="defaultConfig.pagination.currentSize"
      :layout="defaultConfig.pagination.layout"
      :total="defaultConfig.pagination.totalCount">
    </el-pagination>
  </div>
</template>

<script>
// import axios from '@/api/ajax.js'

export default {
  props: {
    tableConfig: {
      type: Object,
      default: () => {}
    },
    tableColumns: {
      type: Array,
      default: () => []
    },
    searchParams: {
      type: Object,
      default: () => {}
    },
    constantParams: {
      type: Object,
      default: () => {}
    },
    tableDataDetail: {
      type:  Array,
      default: () => []
    }
  },
  data () {
    return {
      isShowLoading: false,
      tableData: [],
      defaultConfig: {
        showSearch: false,
        showExpand: false,
        tableProps: {
          border: true,
          maxHeight: 500,
          emptyText: '没有可以用来显示的数据',
          rowKey: 'id'
        },
        ajax: {
          methods: 'post',
          url: '',
          resKey: 'recordList',
          totalKey: 'totalCount'
        },
        isShowPagination: false,
        pagination: {
          layout: 'total, sizes, prev, pager, next, jumper',
          pageSize: [10, 20, 30, 40],
          currentSize: 10,
          currentPage: 1,
          totalCount: 0
        }
      }
    }
  },
  watch: {
    tableConfig: {
      handler (data) {
        this.getConfig(data, this.defaultConfig)
      },
      deep: true,
      immediate: true
    }
  },
  // 分页参数
  // computed: {
  //   defaultParams () {
  //     if (this.defaultConfig.isShowPagination) {
  //       return {
  //         numPage: this.tableConfig.pagination.currentSize ? this.tableConfig.pagination.currentSize : 10,
  //         page: 1
  //       }
  //     }
  //     return {}
  //   }
  // },
  mounted () {
    // this.getTableData()
  },
  methods: {
    getTableData () {
      // this.isShowLoading = true
      // this.tableData = this.tableDataDetail
      // const { resKey, totalKey, url } = this.defaultConfig.ajax
      // axios.post(url, { ...this.defaultParams, ...this.searchParams, ...this.constantParams }).then((res) => {
      //   this.tableData = res.data.data[resKey] || []
      //   this.defaultConfig.pagination.totalCount = res.data.data[totalKey] || 0
      //   this.isShowLoading = false
      //   this.$emit('getTableData', this.tableData)
      //   this.$emit('getOriginData', res.data.data)
      // }).catch(() => {
      //   this.isShowLoading = false
      // })
    },
    resetTableData () {
      this.$emit('resetData')
    },
    getConfig (data, defaultConfig) {
      Object.keys(data).forEach(configKey => {
        if (typeof data[configKey] === 'object' && data[configKey] !== null) {
          defaultConfig[configKey] = { ...defaultConfig[configKey], ...data[configKey] }
        } else {
          defaultConfig[configKey] = data[configKey]
        }
      })
      console.log(data, this.defaultConfig)
    },
    handleSelectionChange (val) {
      this.$emit('selectData', val)
    },
    handleSizeChange (size) {
      this.defaultParams.numPage = size
      this.getTableData()
    },
    handleCurrentChange (page) {
      this.defaultParams.page = page
      this.getTableData()
    },
    // 获取列中最大宽度
    getMaxLength (arr) {
      return arr.reduce((acc, item) => {
        if (item) {
          const calcLen = this.getTextWidth(item)
          if (acc < calcLen) {
            acc = calcLen
          }
        }
        return acc
      }, 0)
    },
    // 计算出宽度
    getTextWidth (str) {
      let width = 0
      const html = document.createElement('span')
      html.innerText = str
      html.className = 'getTextWidth'
      document.querySelector('body').appendChild(html)
      width = document.querySelector('.getTextWidth').offsetWidth
      document.querySelector('.getTextWidth').remove()
      return width
    },
    // 获取列
    flexColumnWidth (label, prop) {
      // console.log('label', label)
      // console.log('prop', prop)
      // 1.获取该列的所有数据
      const arr = this.tableDataDetail.map(x => x[prop])
      arr.push(label) // 把每列的表头也加进去算
      // console.log(arr)
      // 2.计算每列内容最大的宽度 + 表格的内间距（依据实际情况而定）
      return (this.getMaxLength(arr) + 30)
    },
  }

}
</script>

<style lang="scss" scoped>
 @import './index.scss'
</style>

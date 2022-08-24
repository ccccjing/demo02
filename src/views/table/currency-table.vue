<!--
 * @description: description
 * @fileName: currency-table.vue
 * @author: pierce
 * @lastDate: 2022-08-24 10:48:58
!-->

<template>
  <ElementTable
    :tableConfig="tableConfig"
    :tableColumns="tableColumns"
    :searchParams="searchParams"
    :tableDataDetail='baseData'
    ref="elementTable"
  >
    <template #handle="scope">
      <div class="operates">
        <a
          href="javascript:;"
          v-if="scope.row.settleStatus !== 30"
          >输入结算价</a
        >
        <router-link
          :to="{
            name: 'settle-build-detail',
            query: {
              sysType:scope.row.sysType,
              tradeOrderId:scope.row.tradeOrderId
            },
          }"
          v-if="scope.row.settleStatus !== 10"
          >查看</router-link
        >
      </div>
    </template>
  </ElementTable>
</template>

<script>
import ElementTable from '@/components/ElementTable/index.vue'
// import { timestampToString } from '@/util/utils.js'
export default {
  components: {
    ElementTable
  },
  data () {
    return {
      baseData: [],
      tableColumns: [
        {
          prop: 'serialNum',
          label: '交易流水号',
          minWidth: 120,
          align: 'left',
          isShowTooltip: true,
          fixed: 'left'
        },
        {
          prop: 'sysTypeName',
          label: '签约主体',
          minWidth: 240,
          isFormatter: true,
          isShowTooltip: true,
          formatter: (row, column, cellValue) => {
            let obj = {
              1: '上海钢银电子商务股份有限公司',
              2: '海钢银供应链管理有限公司',
              3: '上海咏鑫实业有限公司'
            }
            return obj[cellValue]
          }
        },
        {
          prop: 'sellTypeName',
          label: '业务类型',
          minWidth: 120,
          align: 'left'
        },
        {
          prop: 'projectName',
          label: '项目名称',
          align: 'left',
          minWidth: 120
        },
        {
          prop: 'jjfName',
          label: '居间方',
          align: 'left',
          minWidth: 120
        },
        {
          prop: 'buyerName',
          label: '买家名称',
          align: 'left',
          minWidth: 120
        },
        {
          prop: 'sellMemberName',
          label: '卖家名称',
          align: 'left',
          isShowTooltip: true,
          minWidth: 120
        },
        {
          prop: 'applyAdminName',
          label: '项目经理',
          align: 'left',
          minWidth: 120
        },
        {
          prop: 'orderTime',
          label: '下单日期',
          // formatter: (row, column, cellValue) => {
          //   return timestampToString(cellValue, 'YYYY-MM-DD hh:mm:ss')
          // },
          align: 'left',
          minWidth: 120
        },
        {
          prop: 'deliveryAuditStatus',
          label: '送货单状态',
          align: 'left',
          minWidth: 120,
          isFormatter: true,
          formatter: (row, column, cellValue) => {
            let obj = {
              0: '待确认',
              1: '审核中',
              2: '通过',
              3: '驳回'
            }
            return obj[cellValue]
          }
        },
        {
          prop: 'settledWeight',
          label: '已结算数量',
          align: 'left',
          minWidth: 120
        },
        {
          prop: 'notSettleWeight',
          label: '未结算数量',
          align: 'left',
          minWidth: 120
        },
        
        {
          prop: 'settleStatus',
          label: '结算状态',
          align: 'left',
          minWidth: 120,
          isFormatter: true,
          formatter: (row, column, cellValue) => {
            let obj = {
              10: '未结算',
              20: '部分结算',
              30: '结算完成',
              90: '驳回'
            }
            return obj[cellValue]
          }
        },
        {
          prop: 'settledNumber',
          label: '已结算件数',
          align: 'left',
          minWidth: 120
        },
        {
          prop: 'notSettleNumber',
          label: '未结算件数',
          align: 'left',
          minWidth: 120
        },
        {
          prop: 'handle',
          label: '操作',
          minWidth: 180,
          fixed: "right",
          slot: true
        }
      ],
      tableConfig: {
      }
    }
  },
  computed: {
    searchParams () {
      return this.$route.query
    }
  },
  methods: {
    getOriginData () {
      this.baseData = [
        {
          "applyAdminName": "张巍巍",
          "buyerName": "无锡钢材贸易公司",
          "canSettle": false,
          "deliveryAuditStatus": 1,
          "deliveryAuditStatusName": "非直销",
          "id": 10,
          "jjfName": "江西钢铁交易",
          "notSettleNumber": 10,
          "notSettleWeight": 10,
          "orderTime": "2021-09-27",
          "projectName": "供应链非直销下单",
          "realNumber": 10,
          "realWeight": 10,
          "sellMemberName": "上海咏鑫实业有限公司",
          "sellType": "1",
          "sellTypeName": "非直销",
          "serialNum": "CS160526X000160485",
          "settleStatus": 20,
          "settleStatusName": "未结算",
          "settledNumber": 10,
          "settledWeight": 10,
          "sysType": 1,
          "sysTypeName": "1",
          "tradeOrderId": 10,
          "weightUnit": "吨"
        },
        {
          "applyAdminName": "张巍巍",
          "buyerName": "无锡钢材贸易公司",
          "canSettle": false,
          "deliveryAuditStatus": 1,
          "deliveryAuditStatusName": "非直销",
          "id": 11,
          "jjfName": "江西钢铁交易12332112232132",
          "notSettleNumber": 10,
          "notSettleWeight": 10,
          "orderTime": "2021-09-27",
          "projectName": "供应链非直销下单",
          "realNumber": 10,
          "realWeight": 10,
          "sellMemberName": "上海咏鑫实业有限公司",
          "sellType": "1",
          "sellTypeName": "非直销",
          "serialNum": "CS160526X000160485",
          "settleStatus": 20,
          "settleStatusName": "未结算",
          "settledNumber": 10,
          "settledWeight": 10,
          "sysType": 1,
          "sysTypeName": "1",
          "tradeOrderId": 10,
          "weightUnit": "吨"
        }
      ]
    },
  },
  mounted () {
    this.getOriginData()
  }
}
</script>

<style>

</style>


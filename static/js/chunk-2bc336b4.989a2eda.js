(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bc336b4"],{2423:function(t,a,e){"use strict";e.d(a,"a",(function(){return i})),e.d(a,"b",(function(){return l}));var n=e("b775");function i(t){return Object(n["a"])({url:"/api/article/list",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/api/article/staffList",method:"get",params:t})}},"9b60":function(t,a,e){},bc3af:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t._self._c;return a("div",[a("div",[a("el-input",{staticClass:"export-input",attrs:{placeholder:"文件名",clearable:""},model:{value:t.fileName,callback:function(a){t.fileName=a},expression:"fileName"}}),a("el-button",{staticClass:"filter-item",attrs:{loading:t.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:t.handleDownload}},[t._v(" 导出excel文件 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",script:"","max-height":"485"}},[a("el-table-column",{attrs:{prop:"workNumber",label:"工号","min-width":"80"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名","min-width":"150"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别","min-width":"150"}}),a("el-table-column",{attrs:{prop:"birthday",label:"出生日期","min-width":"150"}}),a("el-table-column",{attrs:{prop:"tel",label:"电话","min-width":"150"}}),a("el-table-column",{attrs:{prop:"country",label:"家庭住址","min-width":"150"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱","min-width":"150"}})],1),a("div",{staticClass:"page-wrapper clearfix"},[a("el-pagination",{attrs:{background:"","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper","current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,total:t.pagination.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},i=[],l=e("2423");e("d9e2");function o(t,a){if(0===arguments.length||!t)return null;const e=a||"{y}-{m}-{d} {h}:{i}:{s}";let n;"object"===typeof t?n=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));const i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},l=e.replace(/{([ymdhisa])+}/g,(t,a)=>{const e=i[a];return"a"===a?["日","一","二","三","四","五","六"][e]:e.toString().padStart(2,"0")});return l}var r={name:"ExcelFile",data(){return{loading:!1,downloadLoading:!1,tableData:[],params:{},pagination:{currentPage:1,pageSize:10,total:0},fileName:""}},methods:{getData(){let t={...this.params,...this.pagination};delete t.total,this.loading=!0,Object(l["b"])(t).then(t=>{this.tableData=t.data.items,this.pagination.total=t.data.total,setTimeout(()=>{this.loading=!1},1500)}).catch(()=>{this.loading=!1})},handleSizeChange(t){this.pagination.pageSize=1,this.pagination.pageSize=t,this.getData()},handleCurrentChange(t){this.pagination.currentPage=t,this.getData()},handleDownload(){this.downloadLoading=!0,Promise.all([e.e("chunk-34182fda"),e.e("chunk-61ce8a03")]).then(e.bind(null,"8530")).then(t=>{const a=["工号","姓名","性别","出生日期","电话","家庭住址","邮箱"],e=["workNumber","name","sex","birthday","tel","country","email"],n=this.tableData,i=this.formatJson(e,n),l=this.fileName;t.export_json_to_excel({header:a,data:i,filename:l}),this.downloadLoading=!1})},formatJson(t,a){return a.map(a=>t.map(t=>"timestamp"===t?o(a[t]):a[t]))}},mounted(){this.getData()}},s=r,c=(e("bc5a"),e("2877")),d=Object(c["a"])(s,n,i,!1,null,"d0b61f26",null);a["default"]=d.exports},bc5a:function(t,a,e){"use strict";e("9b60")}}]);
//# sourceMappingURL=chunk-2bc336b4.989a2eda.js.map
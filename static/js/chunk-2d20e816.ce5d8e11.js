(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20e816"],{b03e:function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e._self._c;return r("el-form",{ref:"workForm",staticClass:"demo-ruleForm",attrs:{rules:e.rules,model:e.workForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"导出文件名",prop:"fileName"}},[r("el-input",{attrs:{clearable:""},model:{value:e.workForm.fileName,callback:function(r){e.$set(e.workForm,"fileName",r)},expression:"workForm.fileName"}})],1),r("el-form-item",{attrs:{label:"单位",prop:"company"}},[r("el-input",{attrs:{clearable:""},model:{value:e.workForm.company,callback:function(r){e.$set(e.workForm,"company",r)},expression:"workForm.company"}})],1),r("el-form-item",{attrs:{label:"姓名",prop:"name"}},[r("el-input",{attrs:{clearable:""},model:{value:e.workForm.name,callback:function(r){e.$set(e.workForm,"name",r)},expression:"workForm.name"}})],1),r("el-form-item",{attrs:{label:"性别",prop:"sex"}},[r("el-select",{attrs:{clearable:""},model:{value:e.workForm.sex,callback:function(r){e.$set(e.workForm,"sex",r)},expression:"workForm.sex"}},[r("el-option",{attrs:{label:"男",value:"男"}}),r("el-option",{attrs:{label:"女",value:"女"}})],1)],1),r("el-form-item",{attrs:{label:"政治面貌",prop:"politicalOutlook"}},[r("el-input",{attrs:{clearable:""},model:{value:e.workForm.politicalOutlook,callback:function(r){e.$set(e.workForm,"politicalOutlook",r)},expression:"workForm.politicalOutlook"}})],1),r("el-form-item",{attrs:{label:"身份证号",prop:"idNumber"}},[r("el-input",{attrs:{clearable:""},model:{value:e.workForm.idNumber,callback:function(r){e.$set(e.workForm,"idNumber",r)},expression:"workForm.idNumber"}})],1),r("el-form-item",{attrs:{label:"时间",prop:"date"}},[r("el-date-picker",{attrs:{type:"daterange","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy/MM/dd",clearable:""},on:{change:e.getDate},model:{value:e.workForm.date,callback:function(r){e.$set(e.workForm,"date",r)},expression:"workForm.date"}})],1),r("el-form-item",{attrs:{label:"部门",prop:"department"}},[r("el-input",{attrs:{clearable:""},model:{value:e.workForm.department,callback:function(r){e.$set(e.workForm,"department",r)},expression:"workForm.department"}})],1),r("el-form-item",{attrs:{label:"职位",prop:"work"}},[r("el-input",{attrs:{clearable:""},model:{value:e.workForm.work,callback:function(r){e.$set(e.workForm,"work",r)},expression:"workForm.work"}})],1),r("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm()}}},[e._v("导出")]),r("el-button",{on:{click:function(r){return e.resetForm()}}},[e._v("重置")])],1)},a=[],l=o("fbf9"),m=o.n(l),s=o("547c"),i=o.n(s),n=o("0083"),c=o.n(n),u=o("21a6"),p={name:"WordFile",data(){return{workForm:{fileName:"",company:"",name:"",sex:"",politicalOutlook:"",idNumber:"",date:"",startTime:"",endTime:"",department:"",work:""},rules:{fileName:[{max:50,message:"不超过50个字符",trigger:"blur"}],company:[{required:!0,message:"请输入单位",trigger:"blur"},{max:50,message:"不超过50个字符",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"},{max:50,message:"不超过50个字符",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],politicalOutlook:[{required:!0,message:"请输入政治面貌",trigger:"blur"},{max:50,message:"不超过50个字符",trigger:"blur"}],idNumber:[{required:!0,message:"请输入身份证号",trigger:"blur"},{max:50,message:"不超过50个字符",trigger:"blur"}],date:[{required:!0,message:"请选择日期",trigger:"change"}],department:[{required:!0,message:"请输入部门",trigger:"blur"},{max:50,message:"不超过50个字符",trigger:"blur"}],work:[{required:!0,message:"请输入职位",trigger:"blur"},{max:50,message:"不超过50个字符",trigger:"blur"}]}}},methods:{getDate(){console.log(this.workForm.date);let e=this.workForm.date[0];e=e.replace("/","年"),e=e.replace("/","月")+"日",this.workForm.startTime=e;let r=this.workForm.date[1];r=r.replace("/","年"),r=r.replace("/","月")+"日",this.workForm.endTime=r},exportWord(e){let r="/work.docx",o=e.fileName?e.fileName+".docx":"工作证明.docx";c.a.getBinaryContent(r,(function(r,t){if(r)throw r;let a=new i.a(t),l=(new m.a).loadZip(a);l.setData({...e});try{l.render()}catch(r){let e={message:r.message,name:r.name,stack:r.stack,properties:r.properties};throw console.log(JSON.stringify({error:e})),r}let s=l.getZip().generate({type:"blob",mineType:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"});Object(u["saveAs"])(s,o)}))},submitForm(){this.$refs.workForm.validate(e=>{if(!e)return console.log("error submit!!"),!1;this.exportWord(this.workForm)})},resetForm(){this.$refs.workForm.resetFields()}}},d=p,k=o("2877"),b=Object(k["a"])(d,t,a,!1,null,null,null);r["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d20e816.ce5d8e11.js.map
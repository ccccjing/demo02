<!--
 * @description: description
 * @fileName: word-file.vue
 * @author: pierce
 * @lastDate: 2022-08-24 13:22:08
!-->

<template>
  <el-form ref="workForm" :rules="rules" :model="workForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="导出文件名" prop="fileName">
      <el-input v-model="workForm.fileName" clearable></el-input>
    </el-form-item>
    <el-form-item label="单位" prop="company">
      <el-input v-model="workForm.company" clearable></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="workForm.name" clearable></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="sex">
      <el-select v-model="workForm.sex" clearable>
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="政治面貌" prop="politicalOutlook">
      <el-input v-model="workForm.politicalOutlook" clearable></el-input>
    </el-form-item>
    <el-form-item label="身份证号" prop="idNumber">
      <el-input v-model="workForm.idNumber" clearable></el-input>
    </el-form-item>
    <el-form-item label="时间" prop="date">
      <el-date-picker
        v-model="workForm.date"
        type="daterange"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy/MM/dd"
        @change="getDate"
        clearable
      ></el-date-picker>
    </el-form-item>
    <el-form-item label="部门" prop="department">
      <el-input v-model="workForm.department" clearable></el-input>
    </el-form-item>
    <el-form-item label="职位" prop="work">
      <el-input v-model="workForm.work" clearable></el-input>
    </el-form-item>
    <el-button type="primary" @click="submitForm()">导出</el-button>
    <el-button @click="resetForm()">重置</el-button>
  </el-form>
</template>

<script>
import docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'

export default {
  name: 'WordFile',
  data () {
    return {
      workForm: {
        fileName: '',
        company: '',
        name: '',
        sex: '',
        politicalOutlook: '',
        idNumber: '',
        date: '',
        startTime: '',
        endTime: '',
        department: '',
        work: '',
      },
      rules: {
        fileName: [
          { max: 50, message: '不超过50个字符', trigger: 'blur' }
        ],
        company: [
          { required: true, message: '请输入单位', trigger: 'blur' },
          { max: 50, message: '不超过50个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { max: 50, message: '不超过50个字符', trigger: 'blur' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        politicalOutlook: [
          { required: true, message: '请输入政治面貌', trigger: 'blur' },
          { max: 50, message: '不超过50个字符', trigger: 'blur' }
        ],
        idNumber: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { max: 50, message: '不超过50个字符', trigger: 'blur' }
        ],
        date: [
          { required: true, message: '请选择日期', trigger: 'change' },
        ],
        department: [
          { required: true, message: '请输入部门', trigger: 'blur' },
          { max: 50, message: '不超过50个字符', trigger: 'blur' }
        ],
        work: [
          { required: true, message: '请输入职位', trigger: 'blur' },
          { max: 50, message: '不超过50个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    // 计算出带年月日的时间
    getDate() {
      console.log(this.workForm.date)
      let startTime = this.workForm.date[0]
      startTime = startTime.replace('/', '年')
      startTime = startTime.replace('/', '月') + '日'
      this.workForm.startTime = startTime

      let endTime = this.workForm.date[1]
      endTime = endTime.replace('/', '年')
      endTime = endTime.replace('/', '月') + '日'
      this.workForm.endTime = endTime
    },
    // 导出word文件
    exportWord(data) {
      // 模板
      let docxsrc = '/work.docx'
      // 导出文件名
      let docxName = data.fileName ? data.fileName + '.docx' : '工作证明.docx'

      // 读取模板并转为二进制
      JSZipUtils.getBinaryContent(docxsrc, function(error, content) {
        if(error) {
          throw error
        }
        
        // 创建pizzip实例，内容为模板的内容
        let zip = new PizZip(content)
        // 创建并加载docxtemplater实例
        let doc = new docxtemplater().loadZip(zip)
        // 设置模板变量的值
        doc.setData({
          ...data
        })

        try {
          // 用模板变量的值替换所有模板变量
          doc.render()
        } catch(error) {
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

        // 将目标文件对象保存为目标类型的文件，并命名
        saveAs(out, docxName)
      })
    },
    // 导出前校验
    submitForm() {
      this.$refs.workForm.validate((valid) => {
        if (valid) {
          this.exportWord(this.workForm)
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    // 重置
    resetForm() {
      this.$refs.workForm.resetFields()
    }
  },
}
</script>

<style>

</style>

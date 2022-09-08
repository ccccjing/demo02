<!--
 * @description: description
 * @fileName: qr-code.vue
 * @author: pierce
 * @lastDate: 2022-08-25 08:53:55
!-->

<template>
  <div>
    <div class="qrcode" ref="qrcode"></div>
    <el-input v-model="str" class="elinput"></el-input>
    <el-button type="primary" @click="updateQrCode">更新二维码</el-button>
    <el-button type="danger" @click="clearQrCode">清除二维码</el-button>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'

export default {
  name: 'QrCode',
  data() {
    return {
      str: ''
    }
  },
  methods: {
    creatQrCode() {
      let text = this.str || 'http://39.99.51.240/#/login?redirect=%2Fhome'
      new QRCode(this.$refs.qrcode, {
        text: text, // 内容
        width: 128, // 宽
        height: 128, // 高
        colorDark: '#000000', // 前景颜色
        colorLight: '#ffffff', // 背景颜色
        correctLevel: QRCode.CorrectLevel.H, // 容错级别L,M,Q,H
      })
    },
    clearQrCode() {
      this.$refs.qrcode.innerHTML = ''
    },
    updateQrCode() {
      // this.$refs.qrcode.makeCode(this.str)
      console.log('update code')
      this.clearQrCode()
      this.creatQrCode()
    }
  },
  mounted() {
    this.creatQrCode()
  }
}
</script>

<style lang="scss" scoped>
.qrcode {
  width: 128px;
  height: 128px;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}
.elinput {
  margin-bottom: 10px;
}
</style>

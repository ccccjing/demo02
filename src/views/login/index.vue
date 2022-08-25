<!--
 * @description: description
 * @fileName: index.vue
 * @author: pierce
 * @lastDate: 2022-08-25 15:04:05
!-->

<template>
  <div class="login">
    <ul class="bg-bubbles">
      <li class="bubbles" v-for="(item, index) in 10" :key="index"></li>
    </ul>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="form">
      <div class="box">
        <h2 class="title">Login</h2>
      </div>

      <el-form-item class="box" prop="username">
        <label for="username">账号：</label>
        <el-input
          class="input"
          ref="username"
          id="username"
          name="username"
          type="text"
          autocomplete="off"
          placeholder="请输入账号"
          v-model="loginForm.username"
        /><br />
      </el-form-item>

      <el-form-item class="box" prop="password">
        <label for="password">密码：</label>
        <el-input
          ref="password"
          class="input"
          id="password"
          name="password"
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
        /><br />
      </el-form-item>

      <div class="box">
        <!-- <input class="button" type="button" value="注册" />
        <input class="button" type="submit" value="登录" /> -->
        <el-button
          type="primary"
          style="width:100%;margin-bottom:30px;"
          @click.native.prevent="handleLogin"
          size="mini"
        >注册</el-button>
        <el-button
          type="primary"
          style="width:100%;margin-bottom:30px;"
          @click.native.prevent="handleLogin"
        >登录</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: "Login",
  data () {
    const validateUserName = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不少于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '111111',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUserName }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur',  },
          { validator: validatePassword }
        ]
      }
    }
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log('true')
        } else {
          console.log('error submit!!')
          return false
        }
      })
      console.log(this.loginForm)
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  height: 100%;
  overflow: hidden;
  .bg-bubbles {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, #50a3a2, #53e3a6);
    .bubbles {
      position: absolute;
      // 从底部冒出
      bottom: -160px;
      width: 40px;
      height: 40px;
      background-color: skyblue;
      // 使用动画，时间，无限循环
      animation: square 15s infinite;
      // 相同的速度开始到结束
      transition-timing-function: linear;
      border-radius: 50%;
      &:nth-child(1) {
        left: 10%;
      }
      &:nth-child(2) {
        left: 20%;
        width: 90px;
        height: 90px;
        animation-delay: 2s;
        animation-direction: 7s;
      }
      &:nth-child(3) {
        left: 25%;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-direction: 8s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(5) {
        left: 70%;
      }
      &:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
      }
      &:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        animation-delay: 2s;
      }
      &:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-direction: 15s;
      }
      &:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        animation-delay: 2s;
        animation-direction: 12s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      &:nth-child(10) {
        left: 85%;
        width: 160px;
        height: 160px;
        animation-delay: 5s;
      }
    }
  }

  .form {
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    max-width: 380px;
    min-width: 350px;
    height: 28%;
    padding: 20px;
    background-color: #50a3a2;
    opacity: .8;
    color: #fff;
    .box {
      position: relative;
      width: 100%;
      height: 50px;
      padding-bottom: 18px;
      box-sizing: border-box;
      display: flex;
      &:last-child {
        padding: 0;
        height: 70px;
      }
      .title {
        width: 100%;
        text-align: center;
      }
      label {
        flex: 1;
        text-align: left;
        line-height: 34px;
        text-align: right;
        cursor: pointer;
      }
      .input {
        flex: 4;
        width: 77%;
        border: 1px solid #53e3a6;
        padding: 6px;
        border-radius: 6px;
        color: #9b9b9b;
        cursor: pointer;
        &::-webkit-input-placeholder {
          color: #ccc;
        }
      }
      .captchaImg {
        position: absolute;
        top: 3px;
        right: 6px;
        width: 68px;
        height: 25px;
      }
      .box-code {
        position: absolute;
        top: 4px;
        right: 6px;
        width: 66px;
        height: 23px;
        line-height: 23px;
        color: #50a3a2;
        font-size: 12px;
        text-align: center;
        border: 1px solid #50a3a2;
        border-radius: 6px;
        cursor: pointer;
      }
      .button {
        width: 80px;
        height: 34px;
        border: 1px solid #53e3a6;
        margin: 0 60px;
        border-radius: 6px;
        background-color: #50a3a2;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}

/deep/ .el-form-item__content {
  width: 100%;
}

:deep() .el-form-item__error {
  top: 150%;
  left: 35%;
}

// 动画
@keyframes square {
  0% {
    opacity: 0.5;
    transform: translateY(0) rotate(45deg);
  }
  25% {
    opacity: 0.75;
    transform: translateY(-400px) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: translateY(-600px) rotate(135deg);
  }
  100% {
    opacity: 0;
    transform: translateY(-1000px) rotate(180deg);
  }
}
</style>

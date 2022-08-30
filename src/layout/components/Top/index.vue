<!--
 * @description: description
 * @fileName: index.vue
 * @author: pierce
 * @lastDate: 2022-08-23 10:35:01
!-->
<template>
  <el-header>
      <div class="change-sidebar">
        <i
          class="el-icon-s-fold"
          @click="toggleSidebar"
          v-if="sidebar.open"
        ></i>
        <i
          class="el-icon-s-unfold"
          @click="toggleSidebar"
          v-if="!sidebar.open"
        ></i>
      </div>
      <el-dropdown trigger="click" @command="handleLogout">
        <span class="avatar">
          <img :src="avatar" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>系统设置</el-dropdown-item>
          <el-dropdown-item command="3">退出账号</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <!-- <span>{{ name }}</span> -->
    </el-header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Top',
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar'
    ])
  },
  methods: {
    toggleSidebar() {
      console.log(this.$store)
      this.$store.dispatch('app/toggleSidebar')
    },
    async handleLogout(command) {
      if (command === '3')
      console.log(123)
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  width: 100%;
  text-align: right;
  font-size: 12px;
}
.change-sidebar {
  position: absolute;
  text-align: left;
  width: 30px;
  display: inline-block;
  font-size: 14px;
  top: 0;
  right: 65px;
  cursor: pointer;
}
// .el-icon-setting {
//   margin-right: 15px;
// }
.el-dropdown {
  height: 60px;
}
.avatar {
  display: inline-block;
  width: 60px;
  height: 60px;
  cursor: pointer;
  img {
    width: 36px;
    height: 36px;
    margin-top: 12px;
    margin-right: 12px;
    border-radius: 50%;
  }
}
</style>
<!--
 * @description: description
 * @fileName: index.vue
 * @author: pierce
 * @lastDate: 2022-08-23 10:35:01
!-->
<template>
  <el-header style="text-align: right; font-size: 12px">
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
      <el-dropdown trigger="click">
        <i class="el-icon-setting"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Top',
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleSidebar() {
      console.log(this.$store)
      this.$store.dispatch('app/toggleSidebar')
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
}
.change-sidebar {
  text-align: left;
  width: 30px;
  display: inline-block;
  font-size: 14px;
}
.el-icon-setting {
  margin-right: 15px;
}
</style>
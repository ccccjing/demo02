<!--
 * @description: description
 * @fileName: index.vue
 * @author: pierce
 * @lastDate: 2022-08-23 10:40:28
!-->
<template>
  <el-aside width="" style="background-color: rgb(238, 241, 246)">
    <el-menu
      :unique-opened="true"
      :collapse="isCollapse"
      class="el-menu-vertical-demo"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in permission_routes"
        :key="route.path"
        :item="route"
        :basePath="route.path"
      ></sidebar-item>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem.vue';

export default {
  name: "SiderBar",
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.open
    }
  },
  mounted() {
    // this.$store.dispatch('permission/generateRoutes', ['admin'])
    console.log(this.permission_routes)
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-aside {
  color: #333;
}
</style>
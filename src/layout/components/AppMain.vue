<!--
 * @description: description
 * @fileName: AppMain.vue
 * @author: pierce
 * @lastDate: 2022-08-23 10:26:49
!-->
<template>
  <el-container>
    <TagsView></TagsView>
    <el-main>
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key"></router-view>
        </keep-alive>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import TagsView from './TagsView'

export default {
  name: "AppMain",
  components: {
    TagsView
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.source {
  padding: 24px 0;
}
.el-container {
  flex-wrap: wrap;
}
.el-main {
  width: 100%;
  padding: 0 20px;
  height: calc(100% - 60px);
  overflow: hidden;
  overflow-y: auto;
}
</style>
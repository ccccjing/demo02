<template>
  <!-- <el-container style="height: 100%">
    <Top></Top>
    <div class="box">
      <Sidebar></Sidebar>
      <el-container>
        <AppMain></AppMain>
      </el-container>
    </div>
  </el-container> -->
  <div class="box">
    <Top></Top>
    <el-container style="height: 90%">
      <Sidebar></Sidebar>
      <el-container>
        <AppMain></AppMain>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Top from "./components/Top";
import Sidebar from "./components/Sidebar";
import AppMain from "./components/AppMain.vue";

export default {
  name: "Layout",
  components: {
    Top,
    Sidebar,
    AppMain,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
.box {
  height: 100%;
}
.el-container .is-vertical {
  height: 100%;
}
</style>

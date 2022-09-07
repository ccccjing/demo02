<!--
 * @description: description
 * @fileName: complex-table.vue
 * @author: pierce
 * @lastDate: 2022-08-23 16:09:55
!-->

<template>
  <div class="box" v-waterMarker="{text:'PIERCE',textColor:'rgba(180, 180, 180, 0.4)'}">
    <h2 ref="titleText">{{ title }}</h2>
    <el-button @click="changeTitle">change</el-button>
    <el-button v-copy="copyText">copy</el-button>
    <el-button v-debounce="debounceClick">防抖</el-button>
    <div class="ball" v-draggable></div>
  </div>
</template>

<script>
export default {
  name: 'ComplexTable',
  data () {
    return {
      title: 'ComplexTable',
      copyText: 'a copy directives',
    }
  },
  methods: {
    changeTitle() {
      this.title = 'hello'
      console.log(this.$refs.titleText.innerHTML)
    },
    debounceClick() {
      console.log('debounceClick')
    }
  },
  mounted() {
    console.log(Math.random())
  },
}
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  .ball {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: rgb(133, 133, 252);
    border-radius: 50%;
    border-style: #fff;
  }
}
</style>

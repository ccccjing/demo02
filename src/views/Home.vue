<!--
 * @description: description
 * @fileName: Home.vue
 * @author: pierce
 * @lastDate: 2022-08-22 14:46:09
!-->
<template>
  <div class="box">
    <count-down
      :day="day"
      :hour="hours"
      :minute="minutes"
      :second="seconds"
      :showColon="false"
      :fontSize="30"
      backgroundColor="#007AFF"
      color="#fff"
      @timeup="handleT"
    ></count-down>
  </div>
</template>

<script>
import CountDown from '../components/CountDown/CountDown.vue'
export default {
  components: { CountDown },
  name: 'Home',
  data () {
    return {
      day: 0,
      hours: 24,
      minutes: 60,
      seconds: 60
    }
  },
  mounted() {
    this.hours -= new Date().getHours()
    this.minutes -= new Date().getMinutes()
    this.seconds -= new Date().getSeconds()
  },
  methods: {
    handleT() {
      alert('time out')
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 600px;
  height: 200px;
}
</style>
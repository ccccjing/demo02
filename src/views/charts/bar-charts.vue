<!--
 * @description: description
 * @fileName: bar-charts.vue
 * @author: pierce
 * @lastDate: 2022-09-26 13:11:58
!-->

<template>
  <div>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "PictorialBar",
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("main"));

    let option = {
      tooltip: {},
      legend: {},
      xAxis: {
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {},
      series: [
        {
          name: "Sale",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20, 4],
          colorBy: "data",
        },
      ],
    };

    // 绘制图表
    myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 600px;
}
</style>

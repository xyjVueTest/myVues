<style type="text/scss" lang="scss">

</style>
<template>
  <div class="page">
    <h5>{{title}}</h5>
    <div ref="eBar" style="width:100%; height:300px;"></div>
  </div>
</template>
<script>
  // 引入 ECharts 主模块
  import echarts from 'echarts/lib/echarts'
  // 引入柱状图
  import 'echarts/lib/chart/bar'
  // 引入提示框和标题组件
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/title'
  export default{
    name: '',
    data () {
      return {
        title: 'echarts之柱状图'
      }
    },
    mounted () {
      let myChart = echarts.init(this.$refs.eBar)
      myChart.setOption({
        title: {text: 'ECharts 入门示例'},
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
</script>

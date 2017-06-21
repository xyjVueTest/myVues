<style type="text/scss" lang="scss">
  .page-vpie{
    padding:.15rem;
    h5{
      text-align: center;
    }
  }
  :-webkit-full-screen #vPie {
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="page-vpie">
    <h5>{{msg}}</h5>
    <div id="vPie" @click="full">
      <ve-pie :data="chartData" :settings="chartSettings" :events="chartEvents" tooltip-visible legend-visible></ve-pie>
    </div>
    <p>被点击日期：{{ name }}</p>
    <button class="big-btn" id="button">点击试试</button>
  </div>
</template>
<script>
  export default {
    name: 'vChartsPie',
    data () {
      return {
        msg: 'V-charts饼图',
        name: ''
      }
    },
    mounted () {
     /* var elem = document.getElementById('button')
      if (elem.requestFullscreen) {
        elem.requestFullscreen()
      } */
      // this.launchFullScreen(document.getElementById('vPie'))
    },
    created () {
      this.chartData = {
        columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
        ]
      }
      this.chartSettings = {
        dimension: '日期',
        metrics: '销售额-1季度',
        selectedMode: 'single',
        hoverAnimation: false
      }
      var self = this
      this.chartEvents = {
        click: function (e) {
          self.name = e.name
          console.log(e)
        }
      }
    },
    methods: {
      launchFullScreen (element) {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullscreen()
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen()
        }
      },
      full () {
        this.launchFullScreen(document.getElementById('vPie'))
      }
    }
  }
</script>

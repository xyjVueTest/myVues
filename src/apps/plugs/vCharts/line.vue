<style type="text/scss" lang="scss">
  .page-vcharts{
    padding: .15rem;
    h5{
      text-align:center;
    }
  }
</style>
<template>
  <div class="page page-vcharts">
    <h5>{{msg}}</h5>
    <ve-line :data="chartData" :settings="chartSettings" :dataZoom="chartData.dataZoom" tooltip-visible legend-visible></ve-line>
  </div>
</template>
<script>
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/dataZoom'
  export default{
    name: 'vChartsLine',
    data () {
      return {
        msg: 'v-chart的折线图'
      }
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
          { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 },
          { '日期': '1月7日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月8日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月9日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月10日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月11日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月12日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
        ],
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 100
          }, {
            start: 0,
            show: false, // 隐藏手柄滑动放大和缩小
            end: 100,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '70%',
            handleStyle: {
              color: '#fff',
              shadowBlur: 3,
              shadowColor: 'rgba(0, 0, 0, 0.6)',
              shadowOffsetX: 2,
              shadowOffsetY: 2
            }
          }]
      }
      this.chartSettings = {
        dimension: ['日期'],
        metrics: ['销售额-1季度', '销售额-2季度', '占比'],
        axisSite: {
          right: ['占比']
        },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['销售额', '占比'],
        area: true,
        stack: {
          '销售额': ['销售额-1季度', '销售额-2季度']
        }
      }
    }
  }
</script>

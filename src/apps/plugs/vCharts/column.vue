<style type="text/scss" lang="scss">
  .page-vcolumn{
    padding:.15rem;
    h5{
      text-align: center;
    }
  }
</style>
<template>
  <div class="page-vcolumn">
    <h5>{{msg}}</h5>
    <ve-column :data="chartData" :settings="chartSettings" tooltip-visible legend-visible></ve-column>
  </div>
</template>
<script>
  export default {
    name: 'vChartsPie',
    data () {
      return {
        msg: 'V-charts柱状图',
        name: ''
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
          { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
        ]
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

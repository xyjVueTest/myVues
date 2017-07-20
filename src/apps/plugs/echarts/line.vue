<style type="text/scss" lang="scss">
  @mixin border($direction: bottom, $borderColor: $border-color) {

    background-repeat: no-repeat;
    @if $direction == top or $direction == bottom {
      background-size: 100% 1px;
      background-position: $direction left;
      @if $direction == top {
        background-image: linear-gradient(180deg, $borderColor, $borderColor 50%, transparent 50%);
      } @else {
        background-image: linear-gradient(360deg, $borderColor, $borderColor 50%, transparent 50%);
      }
    } @else if $direction == right or $direction == left {
      background-size: 1px 100%;
      background-position: bottom $direction;
      @if $direction = right {
        background-image: linear-gradient(270deg, $borderColor, $borderColor 50%, transparent 50%);
      } @else {
        background-image: linear-gradient(90deg, $borderColor, $borderColor 50%, transparent 50%);
      }
    }
  }
  .page-echart{
    h5{
      text-align:center;
      margin: .1rem 0;
    }
  }
  .echartList{
    border-bottom:1px solid #ddd;
    overflow: hidden;
    li{
      float:left;
      width:25%;
      height: .3rem;
      line-height: .3rem;
      text-align: center;
    }
  }
  .selected{
    color:#0064FD;
    border: none;
    border-bottom:1px solid #0064FD;
  }
</style>
<template>
  <div class="page-echart">
    <h5>{{title}}</h5>
    <button>{{}}切换</button>
    <ul class="echartList">
      <li v-for="(value, index) in list" :class="{selected : index==id}" @click="go(index, value.days)">{{value.name}}</li>
    </ul>
    <div ref="Eline" style="height:400px;"></div>
  </div>
</template>

<script>
  // 引入 ECharts 主模块
  import echarts from 'echarts/lib/echarts'
  // import echarts from 'echarts'
  // 引入柱状图
  import 'echarts/lib/chart/line'
  // 引入各功能组件
  import 'echarts/lib/component/dataZoom'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/title'
  import 'echarts/lib/component/legend'
  let Eline
  export default{
    name: '',
    data () {
      return {
        id: 0,
        title: 'echarts之折现图',
        list: [{name: '最近7天', id: 0, days: 7}, {name: '最近30天', id: 1, days: 30}, {name: '所有', id: 2, days: 35}, {name: '自定义时间', id: 3, days: 20}]
      }
    },
    created () {
      console.log(this.$route.query.dd_orientation)
    },
    methods: {
      go (ids, days) {
        this.id = ids
        var date = []
        var data0 = [Math.random() * 100]
        var data1 = [Math.random() * 200]
        var data2 = [Math.random() * 300]
        var data3 = [Math.random() * 400]

        for (var i = 1; i < days; i++) {
          date.push(i + 1)
          data0.push(Math.round((Math.random() - 0.1) * 10 + data0[i - 1]))
          data1.push(Math.round((Math.random() - 0.2) * 20 + data0[i - 1]))
          data2.push(Math.round((Math.random() - 0.3) * 30 + data0[i - 1]))
          data3.push(Math.round((Math.random() - 0.4) * 40 + data0[i - 1]))
        }
        let option = Eline.getOption()
        option.xAxis[0].data = date
        option.series[0].data = data0
        option.series[1].data = data1
        option.series[2].data = data2
        option.series[3].data = data3
        Eline.setOption(option, true)
      }
    },
    mounted () {
      var date = [1, 2, 3, 4, 5, 6, 7]
      var data0 = [Math.random() * 300]
      var data1 = [Math.random() * 400]
      var data2 = [Math.random() * 500]
      var data3 = [Math.random() * 600]

      for (var i = 1; i < 30; i++) {
        // var now = i + 1
        // date.push([now].join('/'))
        data0.push(Math.round((Math.random() - 0.5) * 20 + data0[i - 1]))
        data1.push(Math.round((Math.random() - 0.5) * 20 + data0[i - 1]))
        data2.push(Math.round((Math.random() - 0.5) * 20 + data0[i - 1]))
        data3.push(Math.round((Math.random() - 0.5) * 20 + data0[i - 1]))
      }
      let option = {
        tooltip: {
          // trigger: 'axis',
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%']
          }
        },
        title: {
          left: 'center',
          text: '生活号点击数',
          textStyle: {
            fontSize: '14px'
          }
        },
        legend: {
          show: true,
          inactiveColor: '#ccc',
          data: [{
            name: '年所得12万',
            icon: 'circle',
            textStyle: {
              color: 'blue'
            }
          }, {
            name: '个人所得税',
            icon: 'circle',
            textStyle: {
              color: 'blue'
            }
          }, {
            name: '三方协议',
            icon: 'circle',
            textStyle: {
              color: 'blue'
            }
          }, {
            name: '社保费',
            icon: 'circle',
            textStyle: {
              color: 'blue'
            }
          }],
          bottom: '18px',
          itemGap: 10,
          itemWidth: 10,
          textStyle: {
            fontSize: 12
          }
        },
        toolbox: { // 工具栏
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          position: 'bottom',
          data: date,
          // name: '日期',
          nameLocation: 'middle',
          inverse: false,
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          name: '点击数',
          nameLocation: 'end',
          position: 'right',
          axisTick: {
            inside: true
          },
          axisLabel: {
            inside: true,
            showMinLabel: false,
            textStyle: {
              color: '#000'
            }
          }
        },
        dataZoom: [{
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
        }],
        series: [
          {
            name: '年所得12万',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'rgb(255, 70, 131)'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 8, [{
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                }, {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }])
              }
            },
            data: data0
          },
          {
            name: '个人所得税',
            type: 'line',
            smooth: true,
            // symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'rgb(169, 128, 242)'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(224, 207, 250)'
                }, {
                  offset: 1,
                  color: 'rgb(235, 224, 251)'
                }])
              }
            },
            data: data1
          },
          {
            name: '三方协议',
            type: 'line',
            smooth: true,
            // symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'rgb(110, 238, 242)'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(124, 220, 253)'
                }, {
                  offset: 1,
                  color: 'rgb(235, 224, 251)'
                }])
              }
            },
            data: data2
          },
          {
            name: '社保费',
            type: 'line',
            smooth: true,
            // symbol: 'none',
            sampling: 'average',
            itemStyle: {
              normal: {
                color: 'rgb(169, 228, 142)'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgb(124, 107, 250)'
                }, {
                  offset: 1,
                  color: 'rgb(235, 224, 251)'
                }])
              }
            },
            data: data3
          }
        ]
      }
      Eline = echarts.init(this.$refs.Eline)
      Eline.setOption(option, true)
      window.onresize = Eline.resize
    }
  }
</script>

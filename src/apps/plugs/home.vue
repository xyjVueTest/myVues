<style type="text/scss" lang="scss">
  .page-plugs{
    padding:.15rem;
    h5{
      margin-top: .15rem;
      text-align:center;
    }
    ul{
     li{
       padding:.1rem;
       background-repeat: no-repeat;
       background-size:100% 1px;
       background-position: bottom left;
       background-image: linear-gradient(360deg, navy, navy 50%, transparent 50%);
       b{
         display: block;
         float:right;
         color: navy;
       }
     }
    }
  }
</style>
<template>
  <div class="page-plugs">
    <h5>chart.js图表</h5>
    <ul>
      <li v-for="v in chartList" @click="golist(v.path)">{{v.name}} <b>></b></li>
    </ul>
    <h5>v-chart.js图表</h5>
    <ul>
      <li v-for="v in vChartList" @click="golist(v.path)">{{v.name}} <b>></b></li>
    </ul>
    <h5>图片预览之PhotoSwipe</h5>
    <ul>
      <li v-for="v in PhotoSwipe" @click="golist(v.path)">{{v.name}} <b>></b></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'plugs-home',
    data () {
      return {
        chartList: [
          {name: '折线图', path: {path: '/hanz/plugs/cLine'}},
          {name: '柱状图', path: {path: '/hanz/plugs/cColumn'}}
        ],
        vChartList: [
          {name: '折线图', path: {path: '/hanz/plugs/vLine'}},
          {name: '柱状图', path: {path: '/hanz/plugs/vColumn'}},
          {name: '饼状图', path: {path: '/hanz/plugs/vPie'}},
          {name: '环形图', path: {path: '/hanz/plugs/vRing'}}
        ],
        PhotoSwipe: [
          {name: '图片预览', path: {path: '/hanz/plugs/photos'}},
          {name: '连续图片预览', path: {path: '/hanz/plugs/photolist'}}
        ]
      }
    },
    methods: {
      golist (path) {
        this.$router.push(path)
      }
    }
  }
</script>

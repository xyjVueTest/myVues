<style type="text/scss" lang="scss">
  .photoswipe-img{
    margin-top:.15rem;
    text-align:center;
    p{
      margin:.1rem 0;
      a{
        color:blue ;
      }
    }
  }
</style>
<template>
  <div class="page">
    <h4>{{title}}</h4>
    <div @click="openBig" class="photoswipe-img">
      <img :src="srcImg" alt="" style="width:50%;height:40%;">
      <p><a>图片预览</a></p>
    </div>
    <photo-swpie></photo-swpie>
  </div>
</template>
<script>
  import photoSwpie from '../../../components/photoswipe/photoswipe.vue'
  import swipe from '../../../components/photoswipe/swipe.js'
  export default {
    name: 'plugs-photo',
    data () {
      return {
        title: '连续图片放大测试',
        srcImg: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg'
      }
    },
    mixins: [swipe],
    components: {photoSwpie: photoSwpie},
    methods: {
      openBig () {
        this.open(0, [{
          src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
          w: 964,
          h: 1024
        }, {
          src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
          w: 1237,
          h: 1540
        }, {
          src: 'https://farm3.staticflickr.com/2567/5697107145_a4c2eaa0cd_o.jpg',
          w: 1237,
          h: 1540
        }, {
          src: 'https://farm6.staticflickr.com/5023/5578283926_822e5e5791_m.jpg',
          w: 1237,
          h: 1540
        }])
      }
    }
  }
</script>

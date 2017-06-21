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
    <div @click="openBig0" class="photoswipe-img">
      <img :src="srcImg0" alt="" style="width:50%;height:40%;">
      <p><a>图片预览</a></p>
    </div>
    <br>
    <div @click="openBig1" class="photoswipe-img">
      <img :src="srcImg1" alt="" style="width:50%;height:40%;">
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
        title: '图片预览放大测试',
        srcImg0: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
        srcImg1: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg'
      }
    },
    mixins: [swipe],
    components: {photoSwpie: photoSwpie},
    methods: {
      openBig0 () {
        this.open(0, [{
          src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
          w: 964,
          h: 1024
        }])
      },
      openBig1 () {
        this.open(0, [{
          src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
          /* w: 1024,
          h: 683 */
          w: 1237,
          h: 1540
        }])
      }
    }
  }
</script>

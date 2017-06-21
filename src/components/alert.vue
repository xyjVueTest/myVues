<style type="text/scss" lang="scss">
  .mask{
    position:fixed;
    padding:.5rem;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:1000;
    background-color:rgba(0,0,0,0.4);
    .mask-all{
      position:fixed;
      z-index:1002;
      width:80%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      top:50%;
      left:50%;
      border-radius: .15rem;
      background-color: #FFF;
      .mask-content{
        padding:.3rem .2rem .1rem;
      }
      .mask-btn{
        padding:.15rem .2rem .3rem;
        .center-btn{
          z-index:1001;
          width: 100%;
          height: .4rem;
          border-width: 0;
          border-radius: .06rem;
          background: #1C86EE;
          color: #fff;
          font-size: .18rem;
        }
      }
    }
  }
</style>
<template>
  <div>
    <div v-if="isShow" class="mask">
      <div class="mask-all">
        <div class="mask-content">
          <slot name="alertText"></slot>
        </div>
        <div class="mask-btn">
          <button class="center-btn" @click="hide()">{{btnHide}}</button>
        </div>
      </div>
    </div>
    <button class="big-btn" @click="Show()">{{btnShow}}</button>
  </div>
</template>
<script>
  export default {
    name: 'alert-mask',
    data () {
      return {
        isShow: false
      }
    },
    props: {
      btnHide: String,
      btnShow: String
    },
    methods: {
      Show () {
        this.isShow = true
      },
      hide () {
        this.isShow = false
      }
    }
  }
</script>

<style type="text/scss" lang="scss">
.pmask{
  position:fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 988;
  background-color: rgba(0,0,0,0.4);
}
.pmask-alert{
  position: relative;
  .alert-main{
    position: absolute;
    z-index: 999;
    top: 20px;
    left:-5px;
    width:100%;
    border-radius: 6px;
    &::before{
      display: inline-block;
      width:0;
      height:0;
      border:10px solid transparent;
      border-bottom-color:#fff;
      content:'';
      position: absolute;
      top:-10px;
      right:10px;
      left:0;
    }
    .alert-text{
      position: absolute;
      z-index: 1000;
      top:6px;
      padding: .1rem .12rem;
      border-radius: 10px;
      background-color: #fff;
    }
  }
}
</style>
<template>
    <span>
      <i @click="alert" @touchstart="alert" class="pmask-alert">
        <slot name="mark"></slot>
        <div class="alert-main" v-show="isShow">
          <div class="alert-text"  :style="{width: boxWidth, right: boxRight, left: boxLeft}">
            <slot name="alertText"></slot>
          </div>
        </div>
      </i>
      <div class="pmask" v-show="isShow" @click="hide" @touchstart="hide"></div>
    </span>
</template>
<script>
  export default{
    name: 'popUp',
    data () {
      return {
        isShow: false
      }
    },
    props: {
      boxRight: String,
      boxLeft: String,
      boxWidth: String
    },
    methods: {
      alert () {
        this.isShow = true
      },
      hide () {
        this.isShow = false
      }
    }
  }
</script>

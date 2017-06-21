<style type="text/scss" lang="scss">
.alert-list{
  margin: .15rem 0;
}
.mask-img{
  text-align: center;
  margin-bottom: .2rem;
  i{
    display: inline-block;
    width: 1.36rem;
    height: 1.36rem;
    background: url(https://dsb-cdn.oss-cn-hangzhou.aliyuncs.com/alipay/assets/images/sfxy-zrrxx@2x.png) no-repeat;
    background-size: contain;
  }
}
  .mask-text{
    h4{
      text-align: center;
      margin-bottom: .15rem;
    }
  }
  .marginTop{
    margin-top:.15rem;
  }
</style>
<template>
  <div class="page">
    <h4>Alert组件</h4>
    <div class="alert-list">
      <alert-mask  :btnShow="btnshow0" :btnHide="btnhide0">
        <div slot="alertText">
          <div class="mask-img">
            <i></i>
          </div>
          <div class="mask-text">
            <h4>{{wxts0}}</h4>
            <p>{{msg0}}</p>
          </div>
        </div>
      </alert-mask>
      <div class="marginTop">
        <alert-mask  :btnShow="btnshow1" :btnHide="btnhide1">
          <div slot="alertText">
            <div class="mask-text">
              <h4>{{wxts1}}</h4>
              <p>{{msg1}}</p>
            </div>
          </div>
        </alert-mask>
      </div>
    </div>
  </div>
</template>
<script>
  import Alert from '../../components/alert.vue'
  export default {
    name: 'component-alert',
    components: {AlertMask: Alert},
    data () {
      return {
        btnshow0: '图片及字体组合提示框',
        btnhide0: '我知道了',
        wxts0: '温馨提示',
        msg0: '本提示框组件里面的内容等可以自定义，样式等都可以自定义，主要写在slot里面。',
        btnshow1: '字体组合提示框',
        btnhide1: '我知道了',
        wxts1: '温馨提示',
        msg1: '本提示框组件里面的内容等可以自定义，样式等都可以自定义，主要写在slot里面。'
      }
    }
  }
</script>

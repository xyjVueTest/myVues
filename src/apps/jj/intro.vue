<style type="text/scss" lang="scss">
  .page-jj{
    padding:15px 0;
    .box0{
      display: flex;
      flex-direction: row;
      .item{
        padding:.14rem 0;
        display: flex;
        flex-direction: column;
        flex:1;
        .imgs{
          display: flex;
          justify-content: center;
          .i{
            display: block;
            width:.44rem;
            height:.44rem;
            &.gscx{
              background:url(//dsb-cdn.oss-cn-hangzhou.aliyuncs.com/alipay/assets/images/homeList_gscx_top%403x.png) no-repeat;
              background-size: contain;
            }
            &.sbfjn{
              background:url(//dsb-cdn.oss-cn-hangzhou.aliyuncs.com/alipay/assets/images/homeList_sbfjn_top%403x.png) no-repeat;
              background-size: contain;
            }
            &.sfxy{
              background:url(//dsb-cdn.oss-cn-hangzhou.aliyuncs.com/alipay/assets/images/homeList_sfxy_top%403x.png) no-repeat;
              background-size: contain;
            }
            &.yhzc{
              background:url(//dsb-cdn.oss-cn-hangzhou.aliyuncs.com/alipay/assets/images/homeList_yhzc_top%403x.png) no-repeat;
              background-size: contain;
            }
          }
        }
        .text{
          font-size: .14rem;
          text-align: center;
          color:#222;
          margin-top:.18rem;
          &.yhzc{
            margin-top:.1rem;
          }
        }
      }
    }
    .page-ceshi{
      text-align: center;
      padding:10px;
      .border-top-1px,.border-left-1px,.border-bottom-1px,.border-right-1px{
        position:relative;
      }
      .border-top-1px::after,.border-left-1px::after,.border-bottom-1px::after,.border-right-1px::after{
        background-color: #000;
        content:'';
        position:absolute;
        transform-origin: 0 0;
      }
      .border-top-1px::after{
        left:0;
        top:0;
        height:1px;
        width:100%;
        // transform: scaleY(0.3);
      }
      .border-left-1px::after{
        left:0;
        top:0;
        height:100%;
        width:1px;
        // transform: scaleX(0.3);
      }
      .border-bottom-1px::after{
        left:0;
        bottom: 0;
        height:1px;
        width:100%;
        // transform: scaleY(0.3);
      }
      .border-right-1px::after{
        right:0;
        top:0;
        height:100%;
        width:1px;
        // transform: scaleX(0.3);
      }
      @media only screen and (-webkit-min-device-pixel-ratio: 2.0), only screen and (min-resolution: 2dppx) {
        .border-bottom-1px::after, .border-top-1px::after {
          transform: scaleY(0.3);
        }
        .border-left-1px::after, .border-right-1px::after {
          transform: scaleX(0.3);
        }
      }
    }
    .mac-border{
      padding:10px;
      .top{
        background: linear-gradient(180deg ,red,#FFF 50%,transparent 50%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
      }
      .left{

      }
      .right{

      }
      .bottom{

      }
    }
    .page-tabs{
      display: flex;
      flex-flow: row nowrap;
      li{
        flex:1;
        height:.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-of-type(1){
          border-top:2px solid #118DEA;
          margin-right:1px;
        }
        &:nth-of-type(2){
          border-top:2px solid #FEB414;
          margin:0 1px;
        }
        &:nth-of-type(3){
          border-top:2px solid #26AA8F;
          margin:0 1px;

        }
        &:nth-of-type(4){
          border-top:2px solid #E7576F;
          margin:0 1px;

        }
        &:nth-of-type(5){
          border-top:2px solid #910FE9;
          margin-left:1px;
        }
      }
    }
  }
</style>
<template>
  <div class="page-jj">
    <h5>1,Flex盒模型测试</h5>
    <div class="box0">
      <div class="item" v-for="item in list">
        <div class="imgs">
          <i class="i" :class="item.id"></i>
        </div>
        <div class="text" :class="item.id" v-html="item.name"></div>
      </div>
    </div>
    <h5>2,利用1px及transform来实现移动端边框效果</h5>
    <div class="page-ceshi">
      <div class="border-top-1px">B</div>
      <div class="border-right-1px">C</div>
      <div class="border-left-1px">D</div>
      <div class="border-bottom-1px">E</div>
    </div>
    <h5>3,利用background来实现移动端border效果</h5>
    <div class="mac-border">
      <div class="top">上边框</div>
      <div>下边框</div>
      <div>左边框</div>
      <div>右边框</div>
    </div>
    <ul class="page-tabs" ref="mytabs">
      <li v-for="(item, index) in tabList" @click="tabs($event, item, index)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'hanz-jj',
    data () {
      return {
        title: '简介',
        selectedIndex: 0,
        msg: '通过vue2.0来编写一些可复用的指令，组件及引用插件的使用情况，并将使用过的整理汇集在此方便引用及使用。',
        list: [
          {name: '个税查询', id: 'gscx'},
          {name: '社保费缴纳', id: 'sbfjn'},
          {name: '三方协议', id: 'sfxy'},
          {name: '电子税务局<br>个人用户注册', id: 'yhzc'}],
        tabList: [
          {id: 0, name: '最新', bgColor: '#118DEA'},
          {id: 1, name: '业界', bgColor: '#FEB414'},
          {id: 2, name: '案例', bgColor: '#26AA8F'},
          {id: 3, name: '法规', bgColor: '#E7576F'},
          {id: 4, name: '解读', bgColor: '#910FE9'}
        ]
      }
    },
    mounted () {
      this.$refs.mytabs.childNodes[0].style.backgroundColor = this.tabList[0].bgColor
      this.$refs.mytabs.childNodes[0].style.color = '#fff'
    },
    methods: {
      tabs (e, item, index) {
        this.selectedIndex = index
        e.target.style.backgroundColor = item.bgColor
        e.target.style.color = '#fff'
        for (let i = 0; i < this.tabList.length; i++) {
          if (this.selectedIndex !== this.tabList[i].id) {
            e.target.parentNode.childNodes[this.tabList[i].id].style.backgroundColor = '#fff'
            e.target.parentNode.childNodes[this.tabList[i].id].style.color = '#000'
          }
        }
      }
    }
  }
</script>


<template>
  <div class="page-jj">
    <h3>{{title}}</h3>
    <div class="page-jj-content">
      <p class="text-indet">{{msg}}</p>
      <div class="page-jj-text">
        <p><strong>M</strong>y <strong>B</strong>est <strong>V</strong>ue 组件库 </p>
        <p><strong>G</strong>ood <strong>L</strong>uck <strong>T</strong>o <strong>O</strong>urs</p>
        <ul>
          <li>aaa奥术大师多所</li>
          <li class="sw">地方地方所得税法</li>
          <li>是的范德萨发打发</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'hanz-jj',
    data () {
      return {
        title: '简介',
        msg: '通过vue2.0来编写一些可复用的指令，组件及引用插件的使用情况，并将使用过的整理汇集在此方便引用及使用。'
      }
    }
  }
</script>
<style type="text/scss" lang="scss">
.page-jj{
  padding:15px;
  h3{
    text-align:center;
  }
  .page-jj-content{
    margin:15px;
    p{
      line-height:  2;
    }
    .page-jj-text{
      background-repeat: no-repeat;
      background-size:100% 1px;
      background-position: bottom left;
      background-image: linear-gradient(360deg, navy, navy 50%, transparent 50%);
      p{
        color:navy;
        font-style: italic;
      }
      strong{
        color:red;
      }
      ul>li{
        list-style:disc;
        &.sw{
          list-style: circle;
          cursor:default;/* pointer wait progress default*/
          border:.01rem groove blue;
        }
      }
    }
  }
}
</style>

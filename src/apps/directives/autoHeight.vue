<style type="text/scss" lang="scss">
.page-autoHeight{
  padding:.15rem;
  h3{
    text-align: center;
    margin-bottom: .2rem;
  }
  textarea{
    display: block;
    font-size:.16rem;
    border:.01rem solid #aaaaaa;
    width:100%;
    min-height:.5rem;
  }
}
</style>
<template>
  <div class="page-autoHeight">
    <h3>AutoHeight</h3>
    <textarea v-auto-height placeholder="请输入内容">测试一下输入框随输入内容自动增高.</textarea>
    <br>
    <p><i>router-link上绑定事件需要添加.native才可以注册成功</i></p>
    <div>
      <router-link to="" @click.native="doThing">测试内</router-link>
    </div>
    <router-link to="intro" @click.native="doThing" tag="s">跳转到intro页面</router-link>
  </div>
</template>
<script>
  export default{
    name: 'hanz-autoHeight',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      doThing () {
        alert('您好！')
      }
    }
  }
</script>

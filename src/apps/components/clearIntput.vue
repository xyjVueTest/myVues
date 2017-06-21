<style type="text/scss" lang="scss">
.page-clear-demo{
  padding: .15rem 0;
}
</style>
<template>
  <div class="page">
    <h5>输入框输入显示自动清除提示标志</h5>
    <div class="page-clear-demo">
      <input-autoclear label="姓名" type="text" placeholder="请输入姓名" v-model="name" maxlength="14"></input-autoclear>
      <input-autoclear label="密码" placeholder="请输入密码" v-model="password" maxlength="14"></input-autoclear>
      <input-autoclear label="重复密码" placeholder="请再次输入密码" v-model="rePassword" maxlength="14"></input-autoclear>
    </div>
    <button class="big-btn" @click="confirm">确&nbsp;&nbsp;定</button>
  </div>
</template>
<script>
  import inputClear from '../../components/InputAutoclear.vue'
  export default {
    name: 'input-autoClear-demo',
    components: {InputAutoclear: inputClear},
    data () {
      return {
        name: '张无忌',
        password: '',
        rePassword: ''
      }
    },
    methods: {
      confirm () {
        console.log('name=', this.name)
        console.log('password=', this.password)
        console.log('rePassword=', this.rePassword)
      }
    }
  }
</script>

<style type="text/scss" lang="scss">

</style>
<template>
  <div class="page">
    <pop-alert  boxLeft="-6px" boxWidth="200px">
      <i slot="mark">?</i>
      <div slot="alertText">
        <h3>测试</h3>
        <p>句点印刷或书写中作为标点的一个标记或圆点，尤指一个句号
          A mark or dot used in printing or writing for punctuation, especially a period.
          当　外面悬挂著三个球的标记。
          Signs with three balls hang outside pawnbrokers' shops.</p>
      </div>
    </pop-alert>
  </div>
</template>
<script>
  import popAlert from './popUp.vue'
  export default{
    name: '',
    data () {
      return {
        title: 'popup弹出框'
      }
    },
    components: {PopAlert: popAlert}
  }
</script>

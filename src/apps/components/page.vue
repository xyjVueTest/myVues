<style type="text/scss" lang="scss">

</style>
<template>
  <div class="page">
    <h5>title</h5>
    <my-pages></my-pages>
  </div>
</template>
<script>
  import myPages from '../../components/page.vue'
  export default{
    name: 'hanz-pages',
    data () {
      return {
        title: '分页数据测试',
        datalist: []
      }
    },
    components: {MyPages: myPages},
    created () {
      this.datalist = [
          {dj: 1.2, num: 30},
          {dj: 2.2, num: 20},
          {dj: 3.2, num: 40},
          {dj: 1.5, num: 10},
          {dj: 2.2, num: 50},
          {dj: 5.2, num: 80}
      ]
    }
  }
</script>

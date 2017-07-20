<style type="text/scss" lang="scss">

</style>
<template>
  <div>
    <search-clear placeholder="请输入内容" type="text" btnSearch ="搜吧" :mysearch="mySearch" v-model="names"></search-clear>
    <div class="text-content">
      <ul>
        <li v-for="s in list">{{s.name}}</li>
      </ul>
    </div>
    <button class="big-btn" @click="confirm">确定</button>
  </div>
</template>
<script>
  import SearchClear from '../../components/search.vue'
  export default {
    name: 'searchclear',
    components: {SearchClear: SearchClear},
    data () {
      return {
        title: 'search搜索框组件样式',
        names: '',
        list: [
          {name: '杭州市西湖区', id: '01'},
          {name: '杭州市萧山区', id: '02'},
          {name: '杭州市拱墅区', id: '03'}
        ]
      }
    },
    methods: {
      mySearch () {
        // alert('我是来搜索内容的')
        console.log(this.names)
      },
      confirm () {
        console.log('confirm=', this.names)
      }
    }/* ,
    computed: {
      listSearch () {
        return this.list.filter(items => items.name.includes(this.names))
      }
    } */
  }
</script>

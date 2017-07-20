<style type="text/scss" lang="scss">
  .page-components{
    li{
      position:relative;
      font-size:.18rem;
      padding:.1rem 0;
      background-repeat: no-repeat;
      background-size:100% 1px;
      background-position: bottom left;
      background-image: linear-gradient(360deg, navy, navy 50%, transparent 50%);
    }
  }
</style>
<template>
  <div class="page page-components">
    <h4>JS 组件</h4>
    <ul>
      <li v-for="v in list" @click="goList(v.path)">{{v.name}} <i class="go-left"></i></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'components-intro',
    data () {
      return {
        list: [
          {name: 'InputAutoClear', path: {path: '/hanz/components/inputClear'}},
          {name: 'Alert', path: {path: '/hanz/components/alert'}},
          {name: 'Search', path: {path: '/hanz/components/searchClear'}},
          {name: 'Pages分页', path: {path: '/hanz/components/pages'}},
          {name: 'popup弹出框', path: {path: '/hanz/components/popup'}}
        ]
      }
    },
    methods: {
      goList (path) {
        this.$router.push(path)
      }
    }
  }
</script>


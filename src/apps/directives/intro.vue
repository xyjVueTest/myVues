<template>
  <div class="page-directives">
    <h4 class="">一些可常用的指令</h4>
    <ul class="page-directives-list">
      <li v-for="v in list" @click="goDirs(v.path)">
        {{v.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name: 'hanz-directives',
    data () {
      return {
        list: [
          {name: 'RequireFor', path: '/hanz/directives/requireFor'},
          {name: 'AutoHeight', path: '/hanz/directives/autoHeight'}
        ]
      }
    },
    methods: {
      goDirs (path) {
        this.$router.push({path: path})
      }
    }
  }
</script>
<style type="text/scss" lang="scss">
  .page-directives{
    padding: 15px;
    h4{
      text-align: center;
    }
    ul{
      display:flex;
      flex-wrap: wrap;
      li{
        display:flex;
        height:.5rem;
        width:100%;
        font-size:.18rem;
        align-items: center;
        border-bottom:.01rem solid #aaaaaa;
      }
    }
  }
</style>

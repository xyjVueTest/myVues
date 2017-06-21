<template>
  <div class="page-home">
    <ul class="home-rows">
      <li class="home-rows-list border-bottom" v-for="(value,index) in data"  @click="go(value.path)">
        <div class="page-home-item" :class="{ 'border-right': index % 2 === 0 }">{{(value.name)}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'hanz-home',
    data () {
      return {
        data: [
          {name: '简介', path: '/hanz/jj/intro'},
          {name: '指令', path: '/hanz/directives/intro'},
          {name: '组件', path: '/hanz/components/intro'},
          {name: '插件', path: '/hanz/plugs/home'}
        ]
      }
    },
    methods: {
      go (path) {
        console.log(path)
        this.$router.push({path: path})
      }
    }
  }
</script>
<style type="text/scss" lang="scss" scoped>
.page-home{
  .home-rows{
    display: flex;
    flex-wrap: wrap;
    min-height:1rem;
    .home-rows-list{
      display: flex;
      justify-content: center;
      align-items: center;
      width:50%;
    }
  }
  .border-bottom{
    border-bottom: 0.01rem solid #aaa;
  }
  .border-right{
    border-right: 0.01rem solid #aaaaaa;
  }
  .page-home-item{
    width:100%;
    font-size:.16rem;
    text-align: center;
  }
}
</style>

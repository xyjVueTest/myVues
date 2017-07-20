<style type="text/scss" lang="scss">
  .page-search{
    padding:.15rem 0;
    h5{
      margin-bottom: .2rem;
      text-align: center;
    }
  }
  .search-all{
    background-color:#EEEEF4;
    padding:.08rem;
  }
  .search-input{
    position: relative;
    display: inline-block;
    width:84%;
    padding: .05rem;
    -webkit-border-radius:.05rem;
    -moz-border-radius:.05rem;
    -ms-border-radius:.05rem;
    border-radius:.05rem;
    background-color: #FFFFFF;
    input{
      width:86%;
      font-size:.16rem;
      padding-right:.16rem;
      line-height: .2rem;
      border:none;
      background-color: #FFFFFF;
      &::placeholder{
        font-size:.12rem;
      }
    }
  }
  .search-text{
    display: inline-block;
    width:10%;
    text-align: center;
    color:#0B83F1;
  }
.icon-search:before{
  content:'';
  width: .16rem;
  height: .16rem;
  display: inline-block;
  background: url(../assets/imgs/commoms/search.png) no-repeat;
  -webkit-background-size:contain;
  background-size:contain;
  vertical-align: sub;
}
  .search-clear{
    position: absolute;
    top:0.044rem;
    right: 0.03rem;
    &:before{
      content:'';
      width:.22rem;
      height:.22rem;
      display: inline-block;
      background: url(../assets/imgs/commoms/clear.png) no-repeat;
      -webkit-background-size:contain;
      background-size:contain;
      vertical-align: middle;
    }
  }
  .text-content{
    padding:.15rem;
    ul>li{
      border-bottom:1px solid #DDDDDD;
      padding:.05rem 0;
    }
  }
</style>
<template>
  <div class="page-search">
    <h5>{{title}}</h5>
    <div class="search-all">
      <div>
        <div class="search-input">
          <i class="icon-search"></i>
          <input
            @change="$emit('change', currentValue)"
            @input="currentValue=$event.target.value;"
            ref="inputclear" :type="type"
            :placeholder="placeholder || '搜索'"
            :value="currentValue"
            @focus="isShowclear=true"
            @blur="isShowclear=false">
          <i v-if="isShowclear && currentValue" class="search-clear" @click="clear" @touchstart="clear"></i>
        </div>
        <span class="search-text" @click="mysearch">{{btnSearch}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'vue-search',
    data () {
      return {
        title: 'search搜索框样式组件',
        isShowclear: false,
        currentValue: this.value
      }
    },
    props: {
      type: {type: String, default: 'text'},
      placeholder: String,
      btnSearch: String,
      mysearch: Function,
      value: {}
    },
    watch: {
      value (val, old) {
        this.currentValue = val
      },
      currentValue (val) {
        this.$emit('input', val)
      }
    },
    methods: {
      clear () {
        this.currentValue = ''
        console.log(this.currentValue)
        this.$refs.inputclear.focus()
      }
    }
  }
</script>

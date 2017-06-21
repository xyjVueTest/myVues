<style type="text/scss" lang="scss">
.page-autoclear{
  padding: .15rem;
  label{
    font-size:.16rem;
    width:30%;
  }
  .autoclear-input{
    position:relative;
  }
  input{
    border:none;
    width:68%;
    background: transparent;
    font-size: .16rem;
    padding:.05rem;
    border:1px solid #aaa;
    border-radius: .05rem;
  }
  i.clear{
    position: absolute;
    display: inline-block;
    right: .2rem;
    top:.05rem;
    width:.2rem;
    height:.2rem;
    line-height: .2rem;
    background: #aaa;
    border-radius: .1rem;
    text-align: center;
    color:#fff;
  }
}
</style>
<template>
  <div class="page-autoclear">
    <div class="autoclear-input">
      <label for="name">姓名：</label>
      <input type="text" id="name" ref="inputclear" :value="currentValue" @focus="isClear=true" @blur="isClear=false" placeholder="请输入姓名" v-model="name">
      <div @click="clear" @touchstart="clear">
        <i class="clear"  v-show="isClear && name">X</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'input-autoclear',
  data () {
    return {
      name: '张晓明xx',
      isClear: false,
      currentValue: ''
    }
  },
  methods: {
    clear () {
      console.log(this.name)
      this.name = ''
      console.log(this.$refs.inputclear)
      this.$refs.inputclear.focus()
    }
  },
  watch: {
    name (val, old) {
      console.log('val', val)
      console.log('old', old)
      this.currentValue = val
    },
    currentValue (val) {
      console.log('currentValue', val)
    }
  }
}
</script>


<style type="text/scss" lang="scss">
.page-autoclear{
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
    &::-webkit-input-placeholder{
      font-size: .14rem;
    }
     &::-moz-input-placeholder{
      font-size: .14rem;
    }
    &::-ms-input-placeholder{
      font-size: .14rem;
    }
    /*border:1px solid #aaa;
    border-radius: .05rem;*/
  }
  i.clear{
    position: absolute;
    display: inline-block;
    right: .1rem;
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
      <label for="name">{{label}}：</label>
      <input style="display: none;">
      <input
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        @change="$emit('change', currentValue)"
        id="name" ref="inputclear"
        @input="currentValue = $event.target.value;"
        :value="currentValue"
        @focus="isClear=true"
        @blur="isClear=false"
        :maxlength="maxlength"
        :placeholder="placeholder">
      <div @click="clear" @touchstart="clear">
        <i class="clear"  v-show="isClear && currentValue">X</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'input-autoclear',
  data () {
    return {
      isClear: false,
      currentValue: this.value
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    label: String,
    maxlength: String,
    disabled: String,
    readonly: String,
    value: ''
  },
  methods: {
    clear () {
      this.currentValue = ''
      this.$refs.inputclear.focus()
    }
  },
  watch: {
    value (val, old) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  }
}
</script>


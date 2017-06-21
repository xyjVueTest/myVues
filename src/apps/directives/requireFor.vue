<style type="text/scss" lang="scss">
  .page-requireFor {
    padding: .15rem;
    h3 {
      text-align: center;
    }
    ul {
      margin:.2rem 0;
      li {
        width: 100%;
        margin: .1rem 0;
        height: .3rem;
        font-size: .15rem;
        border-bottom:.01rem solid #aaaaaa;
        label {
          text-align:right;
          width:30%;
          display: inline-block;
          width:1rem;
          font-size: .18rem;
        }
        input{
          width:68%;
          border:none;
          background: transparent;
          &[placeholder]{
            font-size:.16rem;
          }
        }
      }
    }
    .error{
      width:100%;
      text-align: center;
      font-size:.16rem;
      line-height:.3rem;
      height:.3rem;
      background: #FFD700;
      -webkit-border-radius:.05rem ;
      -moz-border-radius:.05rem;
      border-radius:.05rem;
      color:	#EE2C2C;
    }

    .big-btn {
      display: block;
      width: 100%;
      height: .4rem;
      border-width: 0;
      -webkit-border-radius: .06rem;
      -moz-border-radius: .06rem;
      border-radius: .06rem;
      background: #1C86EE;
      color: #fff;
      font-size: .18rem;
      &[disabled]{
        background:#aaa;
      }
    }
  }
</style>
<template>
  <div class="page-requireFor">
    <h3>RequireFor</h3>
    <div  v-auto-clear="[name, pwd, repwd]">
      <ul>
        <li><label for="forname">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</label><input id="forname" type="text" v-model="name" placeholder="请输入姓名"></li>
        <li><label for="pwd">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</label><input id="pwd" type="password" @blur="pwdlur()" v-model="pwd" placeholder="请输入密码"></li>
        <div class="error" v-show="ispwdError">{{pwdError}}</div>
        <li><label for="repwd">重复密码：</label><input id="repwd" type="password" v-model="repwd" @blur="repwdblur()" placeholder="请再次输入密码"></li>
        <div class="error" v-show="isrepwdError">{{repwdError}}</div>
      </ul>
      <button class="big-btn am-btn" @click="confirm()">确定</button>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        title: 'RequireFor',
        name: '长老',
        pwd: '',
        repwd: '',
        ispwdError: false,
        isrepwdError: false,
        pwdError: '',
        repwdError: ''
      }
    },
    methods: {
      pwdlur () {
        if (this.pwd.length > 20 || this.pwd.length < 6) {
          this.ispwdError = true
          this.pwdError = '密码长度为6-20位'
        } else if (this.pwd !== this.repwd && (this.repwd + '').trim() !== '' && (this.pwd.length > 6 && this.pwd.length < 20)) {
          this.isrepwdError = true
          this.ispwdError = false
          this.repwdError = '两次输入的密码不一致'
        } else {
          this.ispwdError = false
        }
      },
      repwdblur () {
        if (this.pwd !== this.repwd && (this.pwd + '').trim() !== '') {
          this.isrepwdError = true
          this.repwdError = '两次输入的密码不一致'
        } else {
          this.isrepwdError = false
        }
      },
      confirm () {
        console.log('保存成功！')
      }
    }
  }
</script>

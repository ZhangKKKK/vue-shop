<template>
  <div class="sign">
    <mt-header fixed title="注册">
      <router-link to="/login" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="box">
      <div class="i-list">
        <div class="input">
          <span>用户名 </span>
          <input type="text" name="username" placeholder="请输入用户名">
        </div>
        <!--<p class="error" v-show="errors.has('username')">{{ errors.first('username') }}</p>-->
      </div>
      <div class="i-list">
        <div class="input">
          <span>密码 </span>
          <input type="text" name="password" placeholder="请输入密码">
        </div>
        <!--<p class="error" v-show="errors.has('password')">{{ errors.first('password') }}</p>-->
      </div>
    </div>
    <mt-button type="primary" size="large" @click.native="sign()">Sign</mt-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        passwordAgin: ''
      }
    },
    methods: {
      sign() {
        console.log(this.username)
      }
    }
  }
</script>
<style>
  .box{
    width: 100%;
    height: auto;
    font-size: 0.24rem;
  }
  .sign{
    width: 100%;
    height: 100%;
    padding-top: 0.8rem;
    box-sizing: border-box;
    background: #f8f8f8;
  }
  .i-list{
    width: 100%;
    min-height: 0.8rem;
    font-size: 0.24rem;
    background: #fff;
    display: inline-block;
  }
  .i-list .input{
    height: 0.8rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .i-list span{
    display: inline-block;
    height: 0.8rem;
    line-height: 0.8rem;
    width: 2rem;
  }
  .i-list input{
    height: 0.8rem;
    width: 5rem;
    border: none;
    outline: none;
    font-size: 0.24rem;
  }
  .i-list .error{
    height: 0.4rem;
    line-height: 0.4rem;
    color: #dd524d;
  }
</style>

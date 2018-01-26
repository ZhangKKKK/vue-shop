<template>
  <div class="login">
    <mt-header fixed title="登录">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>

    <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>

    <mt-button type="primary" size="large" @click.native="login()">Login</mt-button>
    <div class="caozuo">
      <router-link to="/sigin">去注册</router-link>
      <router-link to="/sigin">忘记密码？</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        username:'',
        password:''
      }
    }
  }
</script>
<style>
  .login{
    width: 100%;
    height: 100%;
    padding-top: 0.8rem;
    box-sizing: border-box;
    background: #f8f8f8;
  }
  .mint-button--large{
    display: inline-block;
    width: 96%;
  }
  .caozuo{
    height: .6rem;
    width: 100%;
    line-height: .6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.28rem;
    padding: 0 0.24rem;
    box-sizing: border-box;
  }
  .caozuo a{
    display: inline-block;
    width: auto;
    height: 0.4rem;
  }
</style>

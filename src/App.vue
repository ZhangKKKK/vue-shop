<template>
  <div id="app">
    <remoteJs href="http://at.alicdn.com/t/font_541383_0eztxry1hcx72e29.css"></remoteJs>
    <!--头部-->
    <mt-header title="标题过长会隐藏">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view></router-view>
    <!--内容-->
    <router-view/>
    <!--底部-->
    <footer class="footer">
      <router-link to="/" class="iconfont icon-home"></router-link>
      <router-link to="/imgs" class="iconfont icon-img"></router-link>
      <router-link to="/chat" class="iconfont icon-about"></router-link>
      <router-link to="/contact" class="iconfont icon-contact"></router-link>
    </footer>
  </div>
</template>

<script>
  import remoteJs from '@/components/remoteJs'
export default {
  name: 'app',
  components:{
    remoteJs
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*padding-top: 50px;*/
  box-sizing: border-box;
}
  .header {
    background: #FF0036;
    height: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  .header .nav,.header .login{
    width: 0.9rem;
    height: 100%;
    line-height: 0.9rem;
  }
  .form{
    width: 5rem;
    height: 0.66rem;
    position: relative;
  }
  .form input{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    padding-left: 0.4rem;
    box-sizing: border-box;
    font-size: 0.24rem;
  }
  .form span{
    display: inline-block;
    position: absolute;
    left: 0;
    top:0.06rem;
  }

  .footer{
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    background: #fff;
  }
  .footer a{
    display: block;
    width: 25%;
    height: 100%;
    text-align: center;
    line-height: 1rem;
    font-size: 0.48rem;
    color: #6d6d72;
  }
  .footer a.active{
    color: red;
  }
</style>

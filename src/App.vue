<template>
  <div id="app">
    <remoteCss href="http://at.alicdn.com/t/font_541383_zn6wtqa0nmdq85mi.css"></remoteCss>
    <!--内容-->
    <router-view></router-view>
  </div>
</template>

<script>
  import remoteCss from '@/components/remeto'
export default {
  name: 'app',
  components:{remoteCss},
  data(){
    return{
      shopCar:[]
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
#app {
  height: 100%;
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
</style>

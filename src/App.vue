<template>
  <div id="app">
    <remoteJs href="http://at.alicdn.com/t/font_541383_ry9ovc04u29ms4i.css"></remoteJs>
    <!--内容-->
    <router-view></router-view>
    <!--底部-->
    <footer_tab :pathUrl="$route.path"></footer_tab>
  </div>
</template>

<script>
  import remoteJs from '@/components/remoteJs'
  import footer_tab from '@/components/common/footer_tab'
export default {
  name: 'app',
  components:{remoteJs,footer_tab},
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
</style>

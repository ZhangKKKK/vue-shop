<template>
  <div class="footer">
    <div class="footer-item" :class="pathUrl=='/'?'active':''">
      <router-link to="/" class="iconfont icon-home"></router-link>
    </div>
    <div class="footer-item" :class="pathUrl=='/category'?'active':''">
      <router-link to="/category" class="iconfont icon-leimupinleifenleileibie"></router-link>
    </div>
    <div class="footer-item" :class="pathUrl=='/shopCar'?'active':''">
      <router-link to="/shopCar" class="iconfont icon-icon01"></router-link>
    </div>
    <div class="footer-item" :class="pathUrl=='/my'?'active':''">
      <router-link to="/my" class="iconfont icon-wode"></router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name:'footer_tab',
    props:['pathUrl'],
    data(){
      return{

      }
    }
  }
</script>
<style>
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
  .footer-item{
    width: 25%;
    height: 100%;
    line-height: .6rem;
    text-align: center;
  }
  .footer-item a{
    display: block;
    width: 100%;
    height: 100%;
    color: #666;
    font-size: 0.4rem;
    line-height: 1rem;
  }
  .footer > div.active a{
    color: #78d4f9;
  }
</style>

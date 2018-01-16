<template>
  <ul class="shopList">
    <li v-for="v in todos">
      <img :src="v.src" @click="go(v.id)">
      <span>{{v.title}}</span>
    </li>
  </ul>
</template>
<script>
  export default {
    name:'shopList',
    data(){
      return{}
    },
    props:['todos']
  }
</script>
<style>
  .shopList{
    width: 100%;
    height: 1.6rem;
    padding: 0.12rem;
    box-sizing: border-box;
    display: flex;
    justify-content:space-between;
    position: static;
  }
  .shopList > li{
    width: 1.4rem;
    height: 100%;
    line-height: 0;
  }
  .shopList > li img{
    width: 0.8rem;
    height: 0.8rem;
  }
  .shopList > li span{
    display: inline-block;
    width: 100%;
    height: 0.36rem;
    line-height: 0.36rem;
    font-size: 0.2rem;
  }
</style>

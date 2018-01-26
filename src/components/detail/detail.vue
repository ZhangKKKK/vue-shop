<template>
  <div class="detail">
    <mt-header fixed title="C·商品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <div class="img">
        <img :src="url" alt="">
      </div>
      <h2>{{title}}</h2>
      <h3>￥ {{price}}</h3>
    </div>
  </div>
</template>
<script>
  export default {
    name:'detail',
    data(){
      return{
        title:'好吃的',
        price:19,
        url:'./static/images/shopImgs/shop1.jpg'
      }
    }
  }
</script>
<style scope>
  .detail{
    width: 100%;
    height: 100%;
    padding: 0.8rem 0 1rem 0;
    box-sizing: border-box;
  }
  .img{
    width: 100%;
    height: 4rem;
    padding: 0 1rem;
    box-sizing: border-box;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .img img{
    width: 80%;
  }
  h2{
    margin-top: 1rem;
    padding-left: 1rem;
    text-align: left;
    font-size: 0.32rem;
    color: #222;
    box-sizing: border-box;
  }
  h3{
    margin-top: .4rem;
    padding-left: 1rem;
    text-align: left;
    font-size: 0.24rem;
    color: orangered;
    box-sizing: border-box;
  }
</style>

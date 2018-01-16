<template>
  <div class="self-run">
    <div class="self-top">品牌活动</div>
    <ul class="self-btm">
      <li><img :src="self_1" alt=""></li>
      <li>
        <p>小黑盒</p>
        <img :src="self_2" alt="">
      </li>
      <li>
        <p>大牌甄选</p>

        <img :src="self_3" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:'selfRun',
    data(){
      return{
        self_1:'../../../static/images/image/self_1.webp',
        self_2:'../../../static/images/image/self_2.webp',
        self_3:'../../../static/images/image/self_3.webp'
      }
    }
  }
</script>
<style>
  .self-run{
    width: 100%;
    height: 5.4rem;
    padding: 0 0.12rem;
    box-sizing: border-box;
  }
  .self-run .self-top{
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.24rem;
    text-align: left;
  }
  .self-btm{
    width: 100%;
    height: 5rem;
  }
  .self-btm > li:first-child{
    height: 100%;
  }
  .self-btm > li:first-child img{
    width: 100%;
  }
  .self-btm > li{
    float: left;
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .self-btm > li p{
    display: inline-block;
    width: 40%;
    font-size: 0.18rem;
  }
  .self-btm > li img{
    width: 40%;
  }
</style>

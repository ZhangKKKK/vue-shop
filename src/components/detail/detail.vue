<template>
  <div class="detail">
    <mt-header fixed title="C·商品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div>
      <div class="img">
        <img :src="shopData.url" alt="">
      </div>
      <h2>{{shopData.title}}</h2>
      <h3>￥ {{shopData.price}}</h3>
    </div>

    <!--添加购物车-->
    <div class="addCart">
      <div @click="go()" class="iconfont icon-icon01"></div>
      <div @click="addShop()">加入购物车</div>
      <div @click="buy()">立即购买</div>
    </div>
    <!--点击加入购物车弹框-->
    <mt-popup
      v-model="popupVisible"
      position="bottom">
      <car></car>
    </mt-popup>
  </div>
</template>
<script>
  import axios from 'axios'
  import car from './car'
  export default {
    name:'detail',
    components:{car},
    data(){
      return{
        popupVisible:false,
        shopData:{
          title:'好吃的',
          price:19,
          url:'./static/images/shopImgs/shop1.jpg'
        }
      }
    },
    mounted(){
      axios.get('http://192.168.2.127/Vue/shop/src/components/detail/detail.php').then((res)=>{
        console.log(eval(eval(res).data))
        this.shopData=eval(eval(res).data)
      }).catch((rej)=>{
        this.shopData=this.shopData
      })
    },
    methods:{
      go(){
        this.$router.push('/shopCar')
      },
      addShop(){
        this.popupVisible=true;
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

  .addCart{
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #26a2ff;
    display: flex;
    justify-content: flex-start;
  }
  .addCart > div{
    width: 40%;
    height: 100%;
    line-height: 1rem;
    font-size: 0.28rem;
    color: #fff;
  }
  .addCart > div:first-child{
    width: 20%;
    font-size: 0.56rem;
  }
</style>

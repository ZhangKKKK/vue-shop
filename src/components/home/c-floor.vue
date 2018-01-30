<template>
  <div class="floor">
    <div v-for="v in lists">
    <div class="floor-top">
      <span class="floor-title">{{v.topTitle}}</span>
      <span class="floor-num">{{v.topId}}F</span>
    </div>
    <ul class="floor-box">
      <li v-for="item in v.item">
        <div class="img" @click="go(item.id)"><img :src="item.url" alt=""></div>
        <p>{{item.title}}</p>
        <div class="price">
          <span class="money"><b>￥</b>{{item.price}}</span>
          <span class="iconfont icon-icon01" @click="addShopCar(item)"></span>
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
    import {mapGetters,mapMutations} from 'vuex'
  export default {
    name: 'floor',
    props:['lists'],
    data(){
      return{}
    },
      computed:{
          ...mapGetters(['carts'])
      },
    methods:{
        ...mapMutations({
            setCarts: 'SET_CARTS'
        }),
      addShopCar(v){
        let carts = this.$store.state.carts;
        carts.push(v);
        this.setCarts(carts);
      },
      go(id){
        this.$router.push({name:'detail',params:{id:id}})
      }
    }
  }
</script>
<style>
  .floor{
    width: 100%;
    height: 5.4rem;
  }
  .floor .floor-top{
    height: 0.6rem;
    line-height: 0.6rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    box-sizing: border-box;
  }
  .floor .floor-top span{
    font-size: 0.28rem;
    color: #222;
  }

  .floor-box{
    height: auto;
    overflow: hidden;
    border-bottom: 1px solid #e8e8e8;
    border-top: 1px solid #e8e8e8;
  }
  .floor-box > li:nth-of-type(even){
    border-left: 1px solid #e8e8e8;
  }
  .floor-box > li{
    float: left;
    width: 50%;
    height: 4.4rem;
    box-sizing: border-box;
    margin: 0.2rem 0;
    padding: 0 0.2rem;
  }
  .floor-box > li .img{
    width: 100%;
    height: 3.3rem;
    overflow: hidden;
    padding: 0.3rem;
    box-sizing: border-box;
  }
  .floor-box > li .img img{
    width: 100%;
  }

  .floor-box > li p{
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.24rem;
    text-align: left;
  }
  .floor-box > li .price{
    height: 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.24rem;
  }
  .floor-box > li .money{
    color: red;
  }
  .floor-box > li .money b{
    font-style: normal;
  }
</style>

<template>
  <div class="shopCar">
    <mt-header fixed title="C·SHOPCART"></mt-header>

      <ul class="context" v-if="show">
          <li v-for="(v,k) in lists">
              <div><img :src="v.url"></div>
              <div>
                  <span class="price">价格：￥ {{v.price}}</span>
                  <span>品名：{{v.title}}</span>
                  <span>数量：{{v.num}}</span>
              </div>
              <div><a class="iconfont icon-delete" @click="del(k)"></a></div>


          </li>
      </ul>
      <p v-else class="message">购物车中没有商品，快去添加吧</p>

    <!--底部-->
    <footer_tab :pathUrl="$route.path"></footer_tab>
  </div>
</template>
<script>
    import { MessageBox,Toast } from 'mint-ui';
    import {mapGetters,mapMutations} from 'vuex'
  import footer_tab from '@/components/common/footer_tab'
  export default {
    components:{footer_tab},
    data(){
      return{
          show:this.$store.state.carts.length,
          lists:this.$store.state.carts
      }
    },
      computed:{
          ...mapGetters(['carts'])
      },
      methods:{
          ...mapMutations({
              delCarts: 'DEL_CARTS'
          }),
          del(k){
              MessageBox.confirm('确定删除?').then(action => {
                  let carts = this.$store.state.carts;
                  carts.splice(k,1);
                  this.delCarts(carts);
                  Toast({
                      message: '删除成功',
                      position: 'bottom',
                      duration: 2000
                  });
              }).catch(rej => {
                  Toast({
                      message: '删除失败',
                      position: 'bottom',
                      duration: 2000
                  });
              });
          }
      }
  }

</script>
<style scoped>
  .shopCar{
    height:100%;
    padding: 0.8rem 0 1rem 0;
    box-sizing: border-box;
      font-size: 0.24rem;
      color: #222;
  }
    .context{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        padding: 0.12rem;
        box-sizing: border-box;
    }
    .context > li{
        width: 100%;
        height: 2.4rem;
        display: flex;
        justify-content: space-between;
    }
    .context > li > div{
        width: 33.33%;
    }
  .context > li > div:first-child{
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .context > li > div:first-child img{
      width: 80%;
  }
  .context > li > div:nth-child(2) span{
      display: block;
      height: 33%;
      text-align: left;
      line-height: 0.8rem;
  }
    .price{
        color: orangered;
    }
  .context > li > div:nth-child(3){
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .context > li > div:nth-child(3) a{
      display: block;
      width: 0.88rem;
      height: 0.88rem;
      font-size: 0.48rem;
      line-height: 0.88rem;
      text-align: center;

  }
    .message{
        height: 1rem;
        line-height: 1rem;
        color: #999;
    }
</style>

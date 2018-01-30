<template>
  <div class="addcar">
      <ul class="top">
          <li><img :src="info.url"></li>
          <li><h3>{{info.title}}</h3><h4>￥ {{info.price}}</h4></li>
          <li><a class="iconfont icon-guanbi" @click="close"></a></li>
      </ul>
      <div class="buyNum">
          <div>购买数量</div>
          <div class="opt">
              <a class="iconfont icon-jian" @click="cancal()"></a>
              <input type="text" v-model="num">
              <a class="iconfont icon-jiahao" @click="add()"></a>

          </div>
      </div>
      <div class="foote" @click="addShop()">添加购物车</div>
  </div>
</template>
<script>
    import {mapGetters,mapMutations} from 'vuex'
  export default {
      props:['info'],
    data(){
      return{
          num:1
      }
    },
      computed:{
          ...mapGetters(['carts'])
      },
      methods:{
          ...mapMutations({
              setCarts:'SET_CARTS'
          }),
        addShop(){
            this.info.num=this.num;
            this.$store.state.carts.push(this.info);
            this.setCarts(this.$store.state.carts);
            this.$emit('close')
        },
        close(){
            this.$emit('close')
        },
          cancal(){
            if(this.num<=0){
                this.num=0
            }else{
                this.num-=1
            }
          },
          add(){
              this.num+=1
          }
      }
  }
</script>
<style scoped>
  .addcar{
    width: 100vw;
    height: 4rem;
    background: #fff;
  }
    .top{
        width: 100%;
        height: 2rem;
        display: flex;
        justify-content: space-around;
        font-weight: normal;
        padding-bottom: 0.2rem;
        border-bottom: 1px solid #e0e0e0;
    }
    .top li{
        width: 33.333%;
        height: 100%;
        font-size: 0.24rem;
        padding-top: 0.2rem;
        box-sizing: border-box;
        overflow: hidden;
    }
  .top >li:first-child{
      padding: 0.2rem;
  }
  .top >li:first-child img{
      width: 100%;
  }
  .top >li:nth-child(2) h3{
      color: #333;
  }
  .top >li:nth-child(2) h4{
      color: red;
      margin-top: 0.2rem;
  }
  .top >li:nth-child(3) a{
      display: inline-block;
      float: right;
      width: 0.88rem;
      height: 0.88rem;
      line-height: 0.88rem;
      margin-top: -0.2rem;
  }

    .buyNum{
        width: 100%;
        height: 0.8rem;
        padding: 0.2rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
    .buyNum div{
        font-size: 0.12rem;
        color: #222;
        height: 100%;
        width: 50%;
        line-height: 0.4rem;
    }
    .buyNum div:first-child{
        text-align: left;
    }
  .buyNum div:last-child{
      text-align: right;
  }
    .buyNum div.opt input{
        display: inline-block;
        height: 0.4rem;
        width: 0.4rem;
        text-align: center;
        border: none;
        outline: none;
    }
  .buyNum div.opt a{
      display: inline-block;
      height: 0.4rem;
      width: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
  }

    .foote{
        width: 100%;
        height: 0.98rem;
        background: #26a2ff;
        font-size: 0.28rem;
        text-align: center;
        line-height: 0.98rem;
        color: #fff;
    }
</style>

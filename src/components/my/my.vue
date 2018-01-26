<template>
  <div class="myperson">
    <mt-header fixed title="我的"></mt-header>
    <div class="container">
    <div class="person-img">
      <div class="img">
        <!--<img :src="" alt="">-->
      </div>
      <div class="info">{{info}}</div>
    </div>
    <ul class="item">
      <li>个人信息</li>
      <li>我的订单</li>
      <li>我的地址</li>
    </ul>
    <mt-button v-if="active" type="primary" size="small" @click.native="loginOut()">退出登录</mt-button>
    <mt-button v-else type="primary" size="small" @click.native="login()">登录</mt-button>
    </div>
    <!--底部-->
    <footer_tab :pathUrl="$route.path"></footer_tab>
  </div>
</template>
<script>
  import footer_tab from '@/components/common/footer_tab'
  import {MessageBox} from 'mint-ui'
  import {mapGetters,mapMutations} from 'vuex'
  export default {
    components:{footer_tab},
    data(){
      return{
        active:false,
        info:'森林迷了鹿'
      }
    },
    computed:{
      ...mapGetters([
        'this.$store.state.comname'
      ])
    },
    mounted(){
      this.setComname('my')
    },
    methods:{
      ...mapMutations({
        setComname: 'SET_COMNAME'
      }),
      loginOut(){
        MessageBox.confirm('确定执行此操作?').then(action => {
          console.log(action)
          this.$router.push('login')
        }).catch(error=>{console.log(error)});
      },
      login(){
        this.$router.push('login')
      }
    }
  }
</script>
<style scoped>
  .myperson{
    width: 100%;
    height: 100%;
    padding-top: 0.8rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
    background: #f8f8f8;
  }
  .container{
    height: 100%;
    overflow-y: scroll;
  }
  .person-img{
    width: 100%;
    height: 4rem;
    background: #26a2ff;
    border-top: 1px solid #f8f8f8;
    position: relative;
  }
  .person-img .img{
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top:-1rem;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: red;
    border-radius: 50%;
  }
  .person-img .info{
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.28rem;
    color: #fff;
    position: absolute;
    bottom: 1rem;
    left: 0;
  }
  .item{
    width: 100%;
    height: auto;
  }
  .item > li{
    height: 0.8rem;
    line-height: 0.8rem;
    padding-left: 0.24rem;
    box-sizing: border-box;
    background: #fff;
    font-size: 0.28rem;
    text-align: left;
    margin-bottom: 0.2rem;
  }
</style>

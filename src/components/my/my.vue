<template>
  <div class="myperson">
    <mt-header fixed title="我的"></mt-header>
    <div class="container">
    <div class="person-img">
      <div class="img">
        <img :src="headImg" alt="">
      </div>
      <div class="info" v-if="active">{{this.$store.state.loginInfo.username}}</div>
      <div class="info" v-else>[未登录]</div>
    </div>
    <ul class="item">
      <li>个人信息</li>
      <li>我的订单</li>
      <li>我的地址</li>
    </ul>
        <div class="loginBtn">
            <mt-button v-if="active" type="primary" size="large" @click.native="loginOut()">退出登录</mt-button>
            <mt-button v-else type="primary" size="large" @click.native="login()">登录</mt-button>
        </div>
     </div>
    <!--底部-->
    <footer_tab :pathUrl="$route.path"></footer_tab>
  </div>
</template>
<script>
    import {mapGetters,mapMutations} from 'vuex'
  import footer_tab from '@/components/common/footer_tab'
  import {MessageBox} from 'mint-ui'
  export default {
    components:{footer_tab},
    data(){
      return{
          active:this.$store.state.loginInfo.username.length > 0 ? true : false,
          headImg:this.$store.state.loginInfo.username.length > 0 ?'./static/images/head.jpg':'./static/images/falsehead.jpg'
      }
    },
      computed:{
          ...mapGetters(['loginInfo'])
      },
    methods:{
        ...mapMutations({
            setLogin: 'SET_LOGIN'
        }),
      loginOut(){
        MessageBox.confirm('确定执行此操作?').then(action => {
          this.setLogin({username:'',password:''});
          console.log(action);
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
    border-radius: 50%;
      overflow: hidden;
  }
  .person-img .img img{
      width: 100%;
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

    .loginBtn{
        padding: 0 0.24rem;
        box-sizing: border-box;
    }
  .mint-button{
      font-size: 0.32rem;
      letter-spacing: 0.06rem;
  }
</style>

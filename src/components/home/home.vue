<template>
  <div class="main">
    <!--头部-->
    <mt-header fixed title="C·SHOP">
      <mt-button slot="right" @click.native="share()"><span class="iconfont icon-share"></span></mt-button>
    </mt-header>

    <transition :name="slidename">
      <div v-show="mainarea" class="container" >
        <banner :images="images"></banner>
        <floor_num :lists="shopList"></floor_num>
        <mt-popup
          v-model="popupVisible"
          position="bottom">
          <share></share>
        </mt-popup>
      </div>
    </transition>
    <!--底部-->
    <footer_tab :pathUrl="$route.path"></footer_tab>
  </div>
</template>
<script>
  import banner from '@/components/home/banner'
  import floor_num from '@/components/home/c-floor'
  import share from '@/components/share'
  import footer_tab from '@/components/common/footer_tab'

  import {mapGetters,mapMutations} from 'vuex'
  export default {
    name: 'home',
    data(){
      return{
        popupVisible:false,
        mainarea:false,
        slidename:'slide',
        images: [
          {id: 1,url: './static/images/bannerImg/banner1.jpg'},
          {id: 2,url: './static/images/bannerImg/banner2.jpg'},
          {id: 3,url: './static/images/bannerImg/banner3.jpg'}
        ],
        shopList: [
            {topId: 1,topTitle:'零食·小吃',item: [{id: 1, title: '坚果夹心海苔', price: 9, url: './static/images/shopImgs/1.jpg'}, {id: 2,  title: '长沙猪肉脯', price: 13, url: './static/images/shopImgs/2.jpg'}]},
            {topId: 2,topTitle:'生鲜·水果',item: [{id: 1, title: '红霞草莓一盒', price: 9, url: './static/images/shopImgs/shop3.jpg'}, {id: 2, title: '丰州大橙子一只', price: 6, url: './static/images/shopImgs/shop4.jpg'}]},
            {topId: 3,topTitle:'奶品·水饮',item: [{id: 1, title: '怡宝饮用水', price: 23, url: './static/images/shopImgs/shop1.jpg'}, {id: 2, title: '德亚酸奶整箱', price: 34, url: './static/images/shopImgs/shop2.jpg'}]}
        ]
      }
    },
    computed:{

    },
    mounted(){
      this.mainarea=true;
    },
    methods:{
      share(){
        this.popupVisible=true
      },
    },
    components:{banner,floor_num,share,footer_tab}
  }
</script>
<style scoped>
  .main{
    width: 100%;
    height: 100%;
    padding-top: 0.8rem;
    padding-bottom: 1rem;
    box-sizing: border-box;
  }
  .container{
    height: 100%;
    overflow-y: scroll;
  }
  .slide-enter-active {
    transition: all .3s ease;
  }
  .slide-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-enter, .slide-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>

<template>
  <div class="main">
    <ul class="shopList">
      <li v-for="v in todos">
        <img :src="v.src" @click="go(v.id)">
        <span>{{v.title}}</span>
      </li>
    </ul>
    <banner :bannerImg="bannerImg"></banner>
  </div>
</template>
<script>
  import banner from '@/components/banner'
  export default {
    name: 'hello',
    data() {
      return {
        todos: [
          {id: 1, title: '苏宁易购', src: "../static/images/shopList/1.webp"},
          {id: 2, title: '天猫超市', src: "../static/images/shopList/2.png"},
          {id: 3, title: '天猫国际', src: "../static/images/shopList/3.webp"},
          {id: 4, title: '聚划算', src: "../static/images/shopList/4.webp"},
          {id: 5, title: '分类', src: "../static/images/shopList/5.webp"},
        ],
        bannerImg: [
          {id: 1,src: '../static/images/bannerImg/banner1.webp',href: ''},
          {id: 2,src: '../static/images/bannerImg/banner2.webp',href: ''},
          {id: 3,src: '../static/images/bannerImg/banner3.webp',href: ''},
        ]
      }
    },
    components:{banner}
  }
</script>
<style>
  .main{
    width: 100%;
    /*padding: 0.24rem;*/
    box-sizing: border-box;
    position: absolute;
    top: 1rem;
    bottom: 1.1rem;
    background: #fff;
  }
  .shopList{
    width: 100%;
    height: 1.6rem;
    padding: 0.12rem;
    box-sizing: border-box;
    display: flex;
    justify-content:space-between;
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

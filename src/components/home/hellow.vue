<template>
  <div class="main">
    <showList :todos="todos"></showList>
    <banner :bannerImg="bannerImg"></banner>

    <div class="image-big">
      <img :src="bigUrl" alt="">
    </div>

    <selfRun></selfRun>
  </div>
</template>
<script>
  import showList from '@/components/home/showList'
  import banner from '@/components/home/banner'
  import selfRun from '@/components/home/selfRun'
  export default {
    name: 'hello',
    data() {
      return {
        bigUrl:'../../static/images/big.webp',
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
    components:{showList,banner,selfRun}
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
  .image-big{
    width: 100%;
    height: 5rem;
  }
  .image-big img{
    width: 100%;
  }
</style>

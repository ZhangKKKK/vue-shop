<template>
  <div class="main">
    <!--头部-->
    <mt-header fixed title="C·SHOP"></mt-header>
      <banner :images="images"></banner>
      <floor_num :lists="shopList"></floor_num>
  </div>
</template>
<script>
  import banner from '@/components/home/banner'
  import floor_num from '@/components/home/c-floor'
  export default {
    name: 'home',
    data(){
      return{
        images: [
          {id: 1,url: '../../../static/images/bannerImg/banner1.webp'},
          {id: 2,url: '../../../static/images/bannerImg/banner2.webp'},
          {id: 3,url: '../../../static/images/bannerImg/banner3.webp'}
        ],
        shopList: [
            {topId: 1,topTitle:'零食·小吃',item: [{id: 1, title: '坚果夹心海苔', price: 9, url: '../../../static/images/shopImgs/1.jpg'}, {id: 2,  title: '长沙猪肉脯', price: 13, url: '../../../static/images/shopImgs/2.jpg'}]},
            {topId: 2,topTitle:'生鲜·水果',item: [{id: 1, title: '红霞草莓一盒', price: 9, url: '../../../static/images/shopImgs/2-1.webp'}, {id: 2, title: '丰州大橙子一只', price: 6, url: '../../../static/images/shopImgs/2-2.webp'}]},
            {topId: 3,topTitle:'奶品·水饮',item: [{id: 1, title: '怡宝饮用水', price: 23, url: '../../../static/images/shopImgs/3-1.webp'}, {id: 2, title: '德亚酸奶整箱', price: 34, url: '../../../static/images/shopImgs/3-2.webp'}]}
        ]
      }
    },
    components:{banner,floor_num}
  }
</script>
<style>
  .main{
    width: 100%;
    position: fixed;
    top: 0.8rem;
    bottom: 1.2rem;
    overflow: auto;
  }
</style>

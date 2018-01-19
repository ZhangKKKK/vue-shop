<template>
  <div class="category">
    <mt-header fixed title="C·分类"></mt-header>
    <ul class="c-list">

      <li v-for="v in c_list" :data-type="v.type" :class="type==v.type?'active':''" @click="active(v.type)">{{v.name}}</li>
    </ul>
    <ul class="c_shopList">
      <li v-for="v in c_shopList" v-if="v.type==type">
        <img :src="v.url" alt="">
        <div><span>{{v.name}}</span><span>{{v.price}}</span></div>
        <div class="iconfont icon-icon01"></div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        value:'',
        type:0,
        c_list: [
          {name: '精选',type:0},
          {name: '水果',type:1},
          {name: '小吃',type:2},
          {name: '饮品',type:3}
        ],
        c_shopList: [
          {id: 1,name: '坚果夹心海苔',type: 2,url: '../../../static/images/shopImgs/1.jpg',price: 9},
          {id: 2,name: '长沙猪肉脯',type: 2,url: '../../../static/images/shopImgs/2.jpg',price: 13},
          {id: 3,name: '红霞草莓一盒',type: 1,url: '../../../static/images/shopImgs/2-1.webp',price: 9},
          {id: 4,name: '丰州大橙子一只',type: 1,url: '../../../static/images/shopImgs/2-2.webp',price: 9},
          {id: 5,name: '坚果夹心海苔',type: 0,url: '../../../static/images/shopImgs/1.jpg',price: 9},
          {id: 6,name: '坚果夹心海苔',type: 0,url: '../../../static/images/shopImgs/1.jpg',price: 9},
        ]
      }
    },
    methods:{
      active(type){
        this.type=type
      }
    }
  }
</script>
<style>
  .category{
    width: 100%;
    position: fixed;
    top: 0.8rem;
    bottom: 1.2rem;
  }
  .c-list{
    width: 100%;
    height: auto;
    padding: 0.12rem;
    box-sizing: border-box;
    overflow: hidden;
  }
  .c-list li{
    float: left;
    width: auto;
    padding: 0.12rem 0.4rem;
    border-radius: 0.4rem;
    background: #fff;
    color: #222;
    font-size: 0.24rem;
    margin: 0 0.1rem;
  }
  .c-list li.active{
    background: #26a2ff;
    color: #fff;
  }

  .c_shopList{
    width: 100%;
    height: auto;
  }
  .c_shopList li{
    height: 2rem;
    padding: 0 0.24rem;
    margin: 0.12rem 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    line-height: 2rem;
  }
  .c_shopList li img{
    height: 100%;
  }
  .c_shopList li div{
    font-size: 0.24rem;
  }

  .mint-search{
    width: 100%;
    height: 1rem;
    font-size: 0.24rem;
  }
</style>

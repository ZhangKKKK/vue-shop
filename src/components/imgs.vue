<template>
  <ul class="img-list">
    <li v-for="v in images">
      <img v-lazy="v.url">
      <p>{{v.title}}</p>
      <b>{{v.price}}</b>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'imgs',
    data(){
      return{
        images: [
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/1.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/2.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/3.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/4.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/5.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/6.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/7.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/8.webp'},

          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/1.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/2.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/3.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/4.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/5.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/6.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/7.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/8.webp'},

          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/1.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/2.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/3.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/4.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/5.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/6.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/7.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/8.webp'},

          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/1.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/2.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/3.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/4.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/5.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/6.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/7.webp'},
          {title: '飞利浦剃须刀',price:39.00,url: '../static/images/image/8.webp'}
        ]
      }
    }
  }
</script>
<style>
  .img-list{
    width: 100%;
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    padding: 0.12rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 0.24rem;
  }
  ul li{
    width: 40%;
    height: auto;
    margin: 10px 0;
  }
  ul li b{
    color: red;
  }
  ul li img{
    width: 100%;
  }
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
</style>

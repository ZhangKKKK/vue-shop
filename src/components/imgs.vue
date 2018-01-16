<template>
  <ul>
    <li v-for="v in images">
      <img v-lazy="v" :src="v.url" >
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'imgs',
    data(){
      return{
        images: [
          '../static/images/image/1.webp',
          '../static/images/image/2.webp',
          '../static/images/image/3.webp',
          '../static/images/image/4.webp',
          '../static/images/image/5.webp',
          '../static/images/image/6.webp',
          '../static/images/image/7.webp',
          '../static/images/image/8.webp',
        ]
      }
    }
  }
</script>
<style>
  ul{
    width: 100%;
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    padding: 0.12rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  ul li{
    width: 45%;
    height: auto;
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

<template>
  <div class="banner">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="v in images"><img :src="v.url"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default {
    name: 'banner',
    props: ['images'],
    data(){
      return{}
    }
  }
</script>
<style>
  .banner{
    width: 100%;
    height: 2.8rem;
  }
  .banner img{
    width: 100%;
  }
</style>

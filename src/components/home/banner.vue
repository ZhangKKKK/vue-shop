<template>
  <div class="banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="v in bannerImg"><img :src="v.src" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>

</template>

<script>
  export default {
    name: 'banner',
    props:['bannerImg'],
    data(){
      return{}
    }
  }
</script>

<style>
.banner{
  width: 100%;
  height: 2.8rem;
  background: red;
}
  img{
    width: 100%;
  }
</style>

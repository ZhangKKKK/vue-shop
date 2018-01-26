<template>
  <div class="shopCar">
    <mt-header fixed title="C·SHOPCART"></mt-header>
    <!--底部-->
    <footer_tab :pathUrl="$route.path"></footer_tab>
  </div>
</template>
<script>
  import footer_tab from '@/components/common/footer_tab'
  export default {
    components:{footer_tab},
    data(){
      return{}
    }
  }

</script>
<style scoped>
  .shopCar{
    height:100%;
    padding: 0.8rem 0 1rem 0;
    box-sizing: border-box;
  }
</style>

<template>
  <div>
    <input type="text" v-validate="'required|email'" data-vv-delay="3000" name="email" placeholder="email">
    <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
  </div>
</template>
<script>
  export default {

  };
</script>
<style>
  div{
    font-size: 0.24rem;
  }
</style>

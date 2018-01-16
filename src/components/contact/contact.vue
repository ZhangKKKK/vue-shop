<template>
  <div class="contact-fotm">
  <mt-field label="用户名" placeholder="请输入用户名" v-model="form.username"></mt-field>
    <mt-field label="邮箱" placeholder="请输入邮箱" v-model="form.emailUrl"></mt-field>
    <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="form.phone"></mt-field>
    <mt-button type="primary" size="large" @click.native="btn()">primary</mt-button>

  </div>
</template>
<script>
  export default {
    name:'contact',
    data(){
      return{
        form:{username:'',
              emailUrl:'',
              phone:''}
      }
    },
    methods:{
      btn(){
        console.log(this.form)
      }
    }
  }
</script>
<style>
  .contact-fotm{
    width: 100%;
    height: auto;
    padding: 0.12rem;
    box-sizing: border-box;
  }
</style>

<template>
  <div id="box">
      <div id="share-qrcode" title="二维码分享"></div>
      <div id="share-douban" title="豆瓣分享"></div>
      <div id="share-qzone" title="QQ空间分享"></div>
      <div id="share-sina" title="新浪微博分享"></div>
      <div id="share-qq" title="QQ好友分享"></div>
  </div>
</template>
<script>
  // 分享
  import 'jquery'
  import '../../static/js/jsmodern-1.1.1.min'
  import '../../static/css/jsmodern-1.1.1.min.css'
  jsModern.share({
    qrcode: "#share-qrcode",
    douban: "#share-douban",
    qzone: "#share-qzone",
    sina: "#share-sina",
    qq: "#share-qq"
  });
  export default {
    data(){
      return{}
    }
  }
</script>
<style scope>
  #box{
    width: 100vw;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  #box >div{
    width: 0.6rem;
    height: 0.6rem;
    float: left;
    cursor: pointer;
    border-radius: 0.08rem;
    background-size: contain;
    margin: 0 0.2rem;
  }
  #share-qrcode { background-image: url(../../static/images/share/wechat.png); }
  #share-douban { background-image: url(../../static/images/share/db.png); }
  #share-qzone { background-image: url(../../static/images/share/qzone.png); }
  #share-sina { background-image: url(../../static/images/share/sina.png); }
  #share-qq { background-image: url(../../static/images/share/qq.png); }
</style>

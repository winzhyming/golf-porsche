<template>
  <div id="collection-index">
    <div class="top-ban pr">
      <img src="https://d.devnow.cn/golf2019/images/2019/top/top-yingxiangjijin.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1><img src="https://d.devnow.cn/golf2019/images/btn-finalist06.png" class="ic"/>影像集锦</h1>
      </div>
    </div>
    <div class="pr">
    	<router-view></router-view>
    </div>

    <img src="https://d.devnow.cn/golf2019/images/2019/bottom2019.jpg" alt="" class="img-bot">
    <!-- <div class="ei-bot" v-bottom_img>
      <img src="https://d.devnow.cn/golf2019/images/bot-img.png"/>
    </div> -->
    
    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/golf2019/images/ic-back.jpg"/></a>
    <a @click="index" class="index-btn"><img src="https://d.devnow.cn/golf2019/images/ic-index.jpg"/></a>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      index() {
        this.$router.push({'name': 'dashboard'});
      },
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/collection/index.vue
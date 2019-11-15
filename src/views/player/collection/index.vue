<template>
  <div id="collection-index">
    <div class="top-ban pr">
      <img src="/static/images/bg-top6.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1><img src="/static/images/btn-finalist06.png" class="ic"/>影像集锦</h1>
      </div>
    </div>
    <div class="pr">
    	<router-view></router-view>
    </div>

    <img src="/static/images/bg-bottom.jpg" alt="" class="img-bot">
    <!-- <div class="ei-bot" v-bottom_img>
      <img src="/static/images/bot-img.png"/>
    </div> -->
    
    <a @click="back" class="back-btn" v-bottom_back><img src="/static/images/ic-back.jpg"/></a>
    <a @click="index" class="index-btn"><img src="/static/images/ic-index.jpg"/></a>
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
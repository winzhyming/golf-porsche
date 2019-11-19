<template>
  <div id="sub-index">
    <div class="top-ban pr">
      <img :src="img_path" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1><img src="/static/images/ic-final-guest02.png" class="ic"/>班车时刻表</h1>
      </div>
    </div>
    <router-view></router-view>
    
    <img src="/static/images/2019/bottom2019.jpg" alt="" class="img-bot">
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
      return {
        img_path: ''
      }
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
// src/views/guest/schedule/index.vue
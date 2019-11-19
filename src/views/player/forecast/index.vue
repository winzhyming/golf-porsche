<template>
  <div id="forecast-index">
    <div class="top-ban pr">
      <img src="/static/images/2019/top-tianqiyubao.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1>天气预报</h1>
      </div>
    </div>
    <div class="pr">
    	<router-view></router-view>
    </div>
    
    <!-- <img src="/static/images/2019/bot.png" alt="" class="img-bot"> -->
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
// src/views/player/forecast/index.vue
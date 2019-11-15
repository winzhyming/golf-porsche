<template>
  <div id="schedule-index">
    <div class="top-ban pr">
      <img src="/static/images/bg-top2.jpg" class="pa-img"/>
      <!-- <div class="tbt-tit pa">
        <img src="/static/images/top-tit.png" class="pa-img"/>
        <h1><img src="/static/images/btn-finalist02.png" class="ic"/>赛程安排</h1>
      </div> -->
    </div>
    <div class="pr">
    	<router-view></router-view>
    </div>
    
    <!-- <div class="ei-bot" v-bottom_img>
      <img src="/static/images/bot-img.png"/>
    </div> -->

    <img src="/static/images/bg-bottom.jpg" alt="" class="img-bot">
    
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
// src/views/player/schedule/index.vue
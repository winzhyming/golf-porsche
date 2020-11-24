<template>
  <div id="map-index">
    <div class="top-ban pr">
      <img src="https://d.devnow.cn/golf2020/images/top-banners/jddt.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1><img src="https://d.devnow.cn/golf2019/images/btn-finalist04.png" class="ic"/>酒店地图</h1>
      </div>
    </div>
    
    <div class="pr">
    	<router-view></router-view>
    </div>
    
    
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
// src/views/player/map/index.vue
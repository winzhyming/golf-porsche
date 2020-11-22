<template>
  <div class="ei-main">
    <div class="map-tep">
      <!-- <h1 class="mt-tit fen-b" @click="large">点击放大 <img src="https://d.devnow.cn/golf2019/images/ic-search.png" class="ic-img"/></h1> -->
      <div class="gallery-map" data-pswp-uid="1" v-photoswipe="'.gallery-map'">
      	<a href="/static/images/2020/maps/map-lg.jpg" data-size="876x582" data-med="/static/images/2020/maps/map-lg.jpg" data-med-size="876x582" class="map-a">
          <img src="/static/images/2020/maps/map-sm1.jpg"/><br>
          <img src="/static/images/2020/maps/map-sm2.jpg"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      large() {
        $('.gallery-map a').click();
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/map/map-hotel.vue
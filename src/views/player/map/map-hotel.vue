<template>
  <div class="ei-main">
    <div class="map-tep">
      <!-- <h1 class="mt-tit fen-b" @click="large">点击放大 <img src="https://d.devnow.cn/travelclub2019/images/ic-search.png" class="ic-img"/></h1> -->
      <div class="gallery-map" data-pswp-uid="1" v-photoswipe="'.gallery-map'">
      	<a href="https://d.devnow.cn/travelclub2019/images/2019/map-lg.png" data-size="1000x709" data-med="https://d.devnow.cn/travelclub2019/images/2019/map-lg.png" data-med-size="732x470" class="map-a">
          <img src="https://d.devnow.cn/travelclub2019/images/2019/map.jpg"/>
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
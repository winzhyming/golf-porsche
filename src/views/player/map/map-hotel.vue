<template>
  <div class="ei-main">
    <div class="map-tep">
      <!-- <h1 class="mt-tit fen-b" @click="large">点击放大 <img src="/static/images/ic-search.png" class="ic-img"/></h1> -->
      <div class="gallery-map" data-pswp-uid="1" v-photoswipe="'.gallery-map'">
      	<a href="/static/images/2019/map-lg.png" data-size="1000x709" data-med="/static/images/2019/map-lg.png" data-med-size="1000x709" class="map-a">
          <img src="/static/images/hotel-map_2018.jpg"/>
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
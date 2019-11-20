<template>
  <div class="ei-main">
    <div class="vp-box">
      <section class="vp-videos">
        <h1 class="vpb-tit">视频集锦</h1>
        <ul>
          <li>
            <video controls="controls">
            	<source src="http://d.devnow.cn/2017.mp4" type="video/mp4"></source>
            	当前浏览器不支持 video直接播放
            </video>
          </li>
          <li>
            <video controls="controls">
              <source src="http://d.devnow.cn/2018.mp4" type="video/mp4"></source>
              当前浏览器不支持 video直接播放
            </video>
          </li>
        </ul>
      </section>
      <section class="vp-pics">
        <h1 class="vpb-tit">图片集锦</h1>
        <div class="vpp-box">
          <div class="clearfix my-gallery" data-pswp-uid="1" v-photoswipe="'.my-gallery'">
            <a :href="pic.big" data-size="598x396" :data-med="pic.big" data-med-size="598x396" v-for="(pic, index) in pics" :key="index">
              <img :src="pic.normal"/>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        pics: []
      }
    },
    methods: {
      initPics: function() {
        for(var i = 0; i < 2; i++) {
          this.pics.push({
            'normal': 'https://d.devnow.cn/travelclub2019/images/collection/' + (i + 1) + '.jpg',
            'big': 'https://d.devnow.cn/travelclub2019/images/collection/' + (i + 1) + '.jpg'
          });
        }
      }
    },
    created() {
      this.initPics();
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/collection/videos-pics.vue
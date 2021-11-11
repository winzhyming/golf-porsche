<template>
  <div class="ei-main">
    <div class="vp-box">
      <!-- <section class="vp-videos">
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
      </section> -->
      <section class="vp-pics" style="padding-top: 0;">
        <h1 class="vpb-tit">图片集锦</h1>
        <div class="vpp-box">
          <div v-if="pics.length" class="clearfix my-gallery" data-pswp-uid="1" v-photoswipe="'.my-gallery'">
            <a :href="pic" data-size="598x396" :data-med="pic" data-med-size="598x396" v-for="(pic, index) in pics" :key="index">
              <img :src="pic"/>
            </a>
          </div>
          <div v-if="!pics.length" class="fn-none" style="margin-top: 20vmin;">
            <p style="font-size: 6vmin;" @click="goOther">敬请期待</p>
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
      goOther() {
        console.log('test')
        wx.miniProgram.navigateTo({
          url: '/pages/test/test',
  　　  })
      },
      initPics: function() {
        for(var i = 0; i < 2; i++) {
          this.pics.push({
            'normal': 'https://d.devnow.cn/travelclub2019/images/collection/' + (i + 1) + '.jpg',
            'big': 'https://d.devnow.cn/travelclub2019/images/collection/' + (i + 1) + '.jpg'
          });
        }
      },
      getPics() {
        $.ajax({
          type: "GET",
          url: "/static/data/imgs.txt?t=" + new Date().getTime(),
          // url: "https://www.stxcve.cn/sk/myOrder2.php",
          success: (data) => {
            if(data.length && typeof data === 'string') {
              var string = data.replace(/\r\n/g, '')
              string = string.replace(/\n/g, '')
              console.log('string is :', string.split(','))
              this.pics = string.split(',')
            }
          },
          error: (_error) => {
            this.$root.pop(_error);
//          this.$router.push({'name': 'subscribe.result', 'params': {'type': this.activity_select.val}});  
          } 
        })
      }
    },
    created() {
      this.getPics();
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/collection/videos-pics.vue
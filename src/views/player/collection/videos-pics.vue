<template>
  <div class="ei-main">
    <div class="vp-box" style="padding-bottom: 8vmin">
      <section class="vp-videos">
        <h1 class="vpb-tit">视频集锦</h1>
        <ul>
          <li>
            <video controls="controls">
            	<source src="https://d.devnow.cn/g/golf2019.mp4" type="video/mp4"></source>
            	当前浏览器不支持 video直接播放
            </video>
            <!-- <p>2020 保时捷高尔夫巡回赛中国总决赛</p> -->
            <p></p>
          </li>
        </ul>
      </section>
      <section class="vp-pics">
        <h1 class="vpb-tit">图片集锦</h1>
        <div class="vpp-box">
          <div class="clearfix my-gallery" data-pswp-uid="1" v-photoswipe="'.my-gallery'" v-if="day1.length">
            <template v-if="day1.length">
              <h4 style="float: left; width: 100%; margin: 3vmin 9.3125vmin 2vmin; text-align: left;">12 月 3 日</h4>
              <a :href="pic" data-size="598x396" :data-med="pic" data-med-size="598x396" v-for="(pic, index) in day1" :key="'day1' + index">
                <img :src="pic"/>
              </a>
            </template>
            <template v-if="day2.length">
              <h4 style="float: left; width: 100%; margin: 3vmin 9.3125vmin 2vmin; text-align: left;">12 月 4 日</h4>
              <a :href="pic" data-size="598x396" :data-med="pic" data-med-size="598x396" v-for="(pic, index) in day2" :key="'day2' + index">
                <img :src="pic"/>
              </a>
            </template>
            <template v-if="day3.length">
              <h4 style="float: left; width: 100%; margin: 3vmin 9.3125vmin 2vmin; text-align: left;">12 月 5 日</h4>
              <a :href="pic" data-size="598x396" :data-med="pic" data-med-size="598x396" v-for="(pic, index) in day3" :key="'day3' + index">
                <img :src="pic"/>
              </a>
            </template>
          </div>
          <div v-else class="none">
            <p>赛后上传精选活动照片</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .vp-videos ul li p{
    text-align: center;
    font-size: 2.5vmin;
  }
  div.none p{
    margin-top: 3.125vmin;
    text-align: center;
    font-size: 2.5vmin;
  }
</style>

<script>
  
  export default {
    data() {
      return {
        pics: [],
        day1: [],
        day2: [],
        day3: []
      }
    },
    methods: {
      initPics: function() {
        for(var i = 0; i < 2; i++) {
          this.pics.push({
            'normal': 'https://d.devnow.cn/golf2019/images/collection/' + (i + 1) + '.jpg',
            'big': 'https://d.devnow.cn/golf2019/images/collection/' + (i + 1) + '.jpg'
          });
        }
      },
      calPics: function(str) {
        let pics = str.split(',')
        let i = 0;
        pics.length && pics.forEach((pic) => {
          if (i < 63) {
            this.day1.push(pic)
          } else if (i < 360) {
            this.day2.push(pic)
          } else {
            this.day3.push(pic)
          }
          i++
        })
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
              // console.log('string is :', string.split(','))
              // this.pics = string.split(',')
              this.calPics(string)
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
      // this.initPics();
      this.getPics();
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/collection/videos-pics.vue
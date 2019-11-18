<template>
  <!-- 亚特兰蒂斯水世界 -->
  <div class="ei-main">
    <div class="yuyue2019">
      <div class="desc">
        <p>一波波清凉无比的欢乐浪潮，让您感受精彩绝伦的欢乐氛围！老少咸宜的亚特兰蒂斯水世界全年开放。您可从接近 8 层楼高的顶端以自由落体的方式纵身一跃，从近乎垂直的滑道上获得极高的速度和刺激，通过曲线滑道穿过鲨鱼池隧道。保时捷中国车主俱乐部邀请您前来亚特兰蒂斯水世界，享受阳光、水花和无尽欢愉！</p>
        <br>
        <br>
        <p>出发集合地点：2F酒店大堂</p>
        <p>出发时间：09:45 集合班车发车前往亚特兰蒂斯水上世界</p>
        <p>返回集合地点：亚特兰蒂斯正门</p>
        <p>返回时间：15:45 集合班车发车返回酒店</p>
        <br>
        <p>*特别提醒：需自带泳衣等装备，并携带好身份证件。</p>
      </div>
    <div class="yuyue-btns">
      <a @click="confirm" href="javascript:;">确认预约</a>
      <a @click="back" href="javascript:;">返回上一页</a>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$parent.img_path = '/static/images/2019/top-jiabinyuyue01.jpg';
      this.$parent.title = '亚特兰蒂斯'
    },
    methods: {
      confirm() {
        this.$root.$emit('confirm', () => {
          this.$router.replace({'name': 'subscribe.result'})
        }, 'water')
      },
      back() {
        this.$router.go(-1);
      }
    }

  }
</script>
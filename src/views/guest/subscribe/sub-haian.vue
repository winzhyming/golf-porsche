<template>
  <div class="ei-main">
    <div class="ef-main em2018">
      <article class="ef-art pc-art mct-art">
        <h1 class="no-bb">最美海岸试驾体验  <img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic"/></h1>
        <h2>&nbsp;</h2>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动时间:</span>
          <span class="fr text-right fen">12 月 5 日 13:30 - 16:30 </span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">集合地点:</span>
          <span class="fr text-right">酒店 2 层大堂 保时捷试乘试驾问询台</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动内容:</span>
          <span class="fr text-right">由专业教练带领您驾驶保时捷，体验乐趣⾮凡的海滨⾼速路， 享受沿途美景和保时捷所带来的的极致驾驶体验。</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">注意事项:</span>
          <span class="fr text-right">请您随⾝携带驾照。<br>请勿穿着⾼跟鞋。</span>
        </section>
        <div class="btn-form">
          <a @click="subscribe" class="btn-order ib">立即预约</a>
          <p class="form-tips fen">* 报名截止时间 12 ⽉ 4 日 12:00。</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      subscribe() {
        this.$router.push({'name': 'subscribe.form', 'params': {'activity': '3'}});
      }
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/golf2020/images/top-banners/yysj.jpg';
      
      // this.$parent.img_path = 'https://d.devnow.cn/golf2019/images/bg-top11.jpg'
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-movie.vue
<template>
  <div class="ei-main">
    <div class="ef-main em2018">
      <article class="ef-art pc-art mct-art">
        <h1 class="no-bb">冲浪体验<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic"/></h1>
        <h2>&nbsp;</h2>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动时间:</span>
          <span class="fr text-right fen">2021 年 12 月 4 日 13:30 - 15:30</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">集合地点:</span>
          <span class="fr text-right">酒店 2 层大堂，保时捷签到中心</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动内容:</span>
          <span class="fr text-right">班车接送，前往神州半岛进行冲浪体验。</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">注意事项:</span>
          <span class="fr text-right">保时捷中国将为活动伙伴支付相关费用，请身着可下水的服装，并携带浴巾。</span>
        </section>
        <div class="btn-form">
          <a @click="subscribe" class="btn-order ib">立即预约</a>
          <p class="form-tips fen">* 报名截止时间 12 月 3 日 12:00。</p>
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
        this.$router.push({'name': 'subscribe.form', 'params': {'activity': '6'}});
      }
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/golf2021/top-banners/chonglang.jpg';
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-movie.vue
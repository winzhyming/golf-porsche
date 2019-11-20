<template>
  <div class="ei-main">
    <div class="ef-main em2018">
      <article class="ef-art pc-art mct-art">
        <h1 class="no-bb">分界洲岛试驾体验 <img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic"/></h1>
        <h2>&nbsp;</h2>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动时间:</span>
          <span class="fr text-right fen">12 月 1 日 10:00 - 13:00, 13:00 - 16:00</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">集合地点:</span>
          <span class="fr text-right">酒店 2 层大堂保时捷签到中心</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动形式:</span>
          <span class="fr text-right">由专业教练带您驾驶保时捷，体验乐趣非凡的海南滨海高速路，享受沿途美景及保时捷所带来的极致驾驶体验。试驾去程，班车回程。</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">注意事项:</span>
          <span class="fr text-right">保时捷中国将为活动伙伴支付入岛门票，但岛内所有活动均为自费项目。分界洲岛为离陆海岛。如需游玩水上项目，请自行携带泳衣浴巾。</span>
        </section>
        <div class="btn-form">
          <a @click="subscribe" class="btn-order ib">立即预约</a>
          <p class="form-tips fen">（截止时间 11 月 30 日 17:00）</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/bg-top10.jpg';
    },
    methods: {
      subscribe() {
        this.$router.push({'name': 'subscribe.form', 'params': {'activity': '2'}});
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-volcano.vue
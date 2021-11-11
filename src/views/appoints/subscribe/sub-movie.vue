<template>
  <div class="ei-main">
    <div class="ef-main em2018">
      <article class="ef-art pc-art mct-art">
        <h1 class="no-bb">分界洲岛自由行 <img src="/static/images/2020/ic-next-darkblue.png" class="ic"/></h1>
        <h2>&nbsp;</h2>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动时间:</span>
          <span class="fr text-right fen">12 月 1 日 13:00 - 16:00</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">集合地点:</span>
          <span class="fr text-right">酒店 2 层大堂保时捷签到中心</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动形式:</span>
          <span class="fr text-right">班车接送，详见班车信息。</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">景点介绍:</span>
          <span class="fr text-right">分界洲岛所处地理位置特殊、气候变化明显、岛屿地形独特，以及地域文化特色鲜明等，故分界洲岛自古就有“分界岛”、“美人岛”、“马鞍岭”、“睡佛岛”等美誉。置身其中，令人心旷神怡。</span>
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
    data() {
      return {}
    },
    methods: {
      subscribe() {
        this.$router.push({'name': 'subscribe.form', 'params': {'activity': '1'}});
      }
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/bg-top9.jpg';
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-movie.vue
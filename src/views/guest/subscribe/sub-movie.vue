<template>
  <div class="ei-main">
    <div class="ef-main em2018">
      <article class="ef-art pc-art mct-art">
        <h1 class="no-bb">水上活动体验：石梅湾威斯汀酒店  <img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic"/></h1>
        <h2>&nbsp;</h2>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动时间:</span>
          <span class="fr text-right fen">12 月 4 日 13:30 - 15:30 </span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">集合地点:</span>
          <span class="fr text-right">酒店 2 层大堂 保时捷签到中⼼</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动内容:</span>
          <span class="fr text-right">酒店附近沙滩海域的⽔上活动体验</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">活动场地:</span>
          <span class="fr text-right">⽯梅湾威斯汀酒店附近沙滩及海域</span>
        </section>
        <section class="clearfix">
          <span class="fl lable-left ellipsis">注意事项:</span>
          <span class="fr text-right">保时捷中国将为活动伙伴⽀付相关费⽤，请⾝着可下⽔的服装，并携带浴⼱。</span>
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
        this.$router.push({'name': 'subscribe.form', 'params': {'activity': '2'}});
      }
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/golf2020/images/top-banners/tqyb.jpg';
      
      // this.$parent.img_path = 'https://d.devnow.cn/golf2019/images/bg-top11.jpg'
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-movie.vue
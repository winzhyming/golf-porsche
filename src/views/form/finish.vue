<template>
  <div class="ei-main">
    <div class="ef-main">
      <article class="ef-art pc-art mct-art">
        <div class="result-tips form-result">
          <strong>恭喜您已完成试驾体验的预约，稍后将有工作人员与您联系确认是否预约成功。</strong><br /><br /><br />
          生于赛道，驰于公路。911, 一辆承载激情的跑车，几代人心目中的梦幻跑车；全新 Panamera, 专为热爱运动的驾驶者和同样富有活力的乘客而打造。保时捷邀请专业教练带您体验最纯正的保时捷血统，感受保时捷基因带来的震撼。
          <br /><br />
          <p class="table">
            <span class="table-cell">试驾时间：</span><span class="table-cell">11 月 29 日、11 月 30 日、12 月 2 日</span>
          </p>
          <p class="table">
            <span class="table-cell">集合地点：</span><span class="table-cell">蓝湾绿城威斯汀度假酒店 2 层大堂保时捷试驾体验接待处</span>
          </p>
          <p class="table">
            <span class="table-cell">试驾车辆：</span><span class="table-cell">911, 全新 Panamera</span>
          </p><br /><br />
          <p class="table">
            <span class="table-cell">试驾流程：：</span>
          </p>
          <p>00:00 – 00:10 	驾驶安全讲解<br />
00:10 – 00:25	试驾（去程）<br />
00:25 – 00:30	试驾者交换驾驶车辆<br />
00:30 – 00:45 	试驾（返程）</p>
          <p class="tips-bot">
            <b style="font-weight: 600;">*请现场携带驾驶证,并签署免责条款，参加试驾活动。</b><br>
*11 月 29、30 日及 12月 2 日的试驾活动面向全体入住酒店的嘉宾。
          </p><br />
        </div>
        <div class="btn-form">
          <a @click="index" class="btn-order ib">返回首页</a>
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
      index() {
        this.$router.push({'name': 'dashboard'});
      }
    }
  }
</script>




// WEBPACK FOOTER //
// src/views/form/finish.vue
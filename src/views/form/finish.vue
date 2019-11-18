<template>
  <div class="ei-main">
    <div class="ef-main">
      <article class="ef-art pc-art mct-art">
        <div class="result-tips form-result">
          <strong>尊敬的保时捷车主俱乐部会员</strong><br />
          <strong>恭喜您已完成试驾体验的预约</strong>
          <br /><br />
          <p><strong>试驾简介</strong></p>
          <p>生于赛道，驰于公路，保时捷邀请专业教练带您体验最纯正的保时捷血统，感受保时捷基因带来的震撼。</p>
          <p></p>
          <p class="table">
            <span class="table-cell">试驾时间：</span><span class="table-cell">12 月 2 日</span>
          </p>
          <p class="table">
            <span class="table-cell">集合地点：</span><span class="table-cell">蓝湾绿城威斯汀度假酒店 2 层大堂保时捷试驾体验接待处</span>
          </p>
          <p class="table">
            <span class="table-cell">试驾车辆：</span><span class="table-cell">718 Cayman / Cayenne Coupé / Macan /  718 Boxster</span>
          </p><br /><br />
          <p class="table">
            <span class="table-cell">试驾流程：</span>
          </p>
          <p>10:00 – 11:00 	试驾<br />
11:30 – 12:30	试驾<br />
13:00 – 14:00	午餐<br />
14:00 – 15:00	试驾<br />
15:15 – 16:15 试驾<br />
</p>
          <p class="tips-bot">
            <b style="font-weight: 600;">*请现场携带驾驶证,并签署免责条款，参加试驾活动。</b><br>
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
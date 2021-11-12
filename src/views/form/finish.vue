<template>
  <div class="ei-main">
    <div class="ef-main">
      <article class="ef-art pc-art mct-art">
        <div class="result-tips form-result">
          <strong>恭喜您已完成试驾体验的预约</strong>
          <br /><br />
          <p><strong>试驾简介</strong></p>
          <p>生于赛道，驰于公路，保时捷邀请专业教练带您体验最纯正的保时捷血统，感受保时捷基因带来的震撼。</p>
          <p></p>
          <p class="table">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">试驾时间：</span>
            <span class="table-cell" v-if="activity_time === '1'">12 月 2 日 10:00</span>
            <span class="table-cell" v-if="activity_time === '2'">12 月 2 日 11:30</span>
            <span class="table-cell" v-if="activity_time === '3'">12 月 2 日 14:00</span>
            <span class="table-cell" v-if="activity_time === '4'">12 月 2 日 15:15</span>
          </p>
          <p class="table">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">集合地点：</span>
            <span class="table-cell">酒店 2 层大堂保时捷试驾体验接待柜台</span>
          </p>
          <p class="table">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">试驾车辆：</span>
            <span class="table-cell" v-if="car_type === '1'">718 Cayman</span>
            <span class="table-cell" v-if="car_type === '2'">Cayenne Coupé</span>
            <span class="table-cell" v-if="car_type === '3'">Macan</span>
            <span class="table-cell" v-if="car_type === '4'">718 Boxster</span>
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
      var query = this.$route.query || {}
      return {
        car_type: query.car_type,
        activity_time: query.activity_time
      }
    },
    methods: {
      index() {
        this.$router.push({'name': 'index'});
      }
    }
  }
</script>




// WEBPACK FOOTER //
// src/views/form/finish.vue
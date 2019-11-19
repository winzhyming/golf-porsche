<template>
  <div class="ei-main">
    <div class="ef-main">
      <article class="ef-art pc-art mct-art">
        <div class="result-tips form-result">
          <strong>恭喜您已完成试驾体验的预约，稍后将有工作人员与您联系确认是否预约成功。</strong><br /><br /><br />
          <p class="table">
            <span class="table-cell" style="width: 5em; vertical-align: top;">试驾时间：</span><span class="table-cell">请在预约时间前10分钟到达集合地点</span>
          </p>
          <p class="table">
            <span class="table-cell" style="width: 5em; vertical-align: top;">集合地点：</span><span class="table-cell">蓝湾绿城威斯汀度假酒店 2 层大堂保时捷试驾体验接待处</span>
          </p>
          <p class="table">
            <span class="table-cell" style="width: 5em; vertical-align: top;">试驾车辆：</span><span class="table-cell"> 718 Cayman, 718 Boxster, Macan, Cayenne Coupe</span>
          </p><br /><br />
          <p class="table">
            <span class="table-cell" style="width: 5em; vertical-align: top;">试驾流程：</span>
          </p>
          <p>00:00 – 00:10 	驾驶安全讲解<br />
00:10 – 00:25	试驾（去程）<br />
00:25 – 00:30	试驾者交换驾驶车辆<br />
00:30 – 00:45 	试驾（返程）</p>
          <p class="tips-bot">
            <b style="font-weight: 600;">*请现场携带驾驶证,并签署免责条款，参加试驾活动。</b><br>
*11 月 28、29 日及 12 月 1 日的试驾活动面向全体入住酒店的嘉宾。
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
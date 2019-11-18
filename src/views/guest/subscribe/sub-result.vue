<template>
  <div class="ei-main">
    <div class="ef-main">
      <article class="ef-art pc-art mct-art">
        <div class="result-tips form-result">
          <strong>恭喜您已完成试驾体验的预约，稍后将有工作人员与您联系确认是否预约成功。</strong>
          <br /><br />
          <p class="table">
            <span class="table-cell">活动项目：</span><span class="table-cell">xxxxx</span>
          </p>
          <p class="table">
            <span class="table-cell">活动日期：</span><span class="table-cell">2019 年 12 月 2 日</span>
          </p>
          <p class="table">
            <span class="table-cell">集合地点：</span><span class="table-cell">19:00 - 20:00</span>
          </p>
          <p class="table">
            <span class="table-cell">集合地点：</span><span class="table-cell">蓝湾绿城威斯汀度假酒店 2 层大堂保时捷试驾体验接待处</span>
          </p>
          <p class="tips-bot">
            <b style="font-weight: 600;">*请注意！活动一经确认将无法更改，敬请准时出席。</b><br>
参与亚特兰蒂斯水上世界和呀诺达雨林文化旅游区的嘉宾请随身携带好个人的身份证件以便入院登记！<br>
如现场有任何问题请联系活动热线（24 小时）：<br>
1512-1038 -911

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
      let _params = this.$route.params;
      return {
        type: _params.type || '1'
      }
    },
    mounted() {
      this.$parent.img_path = '/static/images/bg-top11.jpg';
    },
    methods: {
      index() {
        this.$router.push({'name': 'dashboard'});
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-result.vue
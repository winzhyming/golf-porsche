<template>
  <div class="ei-main">
    <div class="ef-main">
      <article class="ef-art pc-art mct-art">
        <div class="result-tips form-result">
          <strong v-if="type === '1'">恭喜您已完成亚特兰蒂斯水世界的预约。</strong>
          <strong v-if="type === '2'">恭喜您已完成呀诺达雨林文化旅游区的预约。</strong>
          <strong v-if="type === '3'">恭喜您已完成威士忌品鉴的预约。</strong>
          <strong v-if="type === '4'">恭喜您已完成威士忌品鉴的预约。</strong>
          <strong v-if="type === '5'">恭喜您已完成海滨瑜伽的预约。</strong>
          <strong v-if="type === '6'">恭喜您已完成海滨瑜伽的预约。</strong>
          <strong v-if="type === '7'">恭喜您已完成高尔夫的预约。</strong>
          <br /><br />
          <p class="table">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动项目：</span>
            <span class="table-cell" v-if="type === '1'">亚特兰蒂斯水世界</span>
            <span class="table-cell" v-if="type === '2'">呀诺达雨林文化旅游区</span>
            <span class="table-cell" v-if="type === '3'">威士忌品鉴</span>
            <span class="table-cell" v-if="type === '4'">威士忌品鉴</span>
            <span class="table-cell" v-if="type === '5'">海滨瑜伽</span>
            <span class="table-cell" v-if="type === '6'">海滨瑜伽</span>
            <span class="table-cell" v-if="type === '7'">高尔夫</span>
          </p>
          <p class="table">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动日期：</span>
            <span class="table-cell">2019 年 12 月 2 日</span>
          </p>
          <p class="table" v-if="type === '1'">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动时间：</span>
            <span class="table-cell">09:00 - 16:00</span>
          </p>
          <p class="table" v-if="type === '2'">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动时间：</span>
            <span class="table-cell">12:30 - 16:30</span>
          </p>
          <p class="table" v-if="type === '3'">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动时间：</span>
            <span class="table-cell">14:30 - 15:30</span>
          </p>
          <p class="table" v-if="type === '4'">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动时间：</span>
            <span class="table-cell">16:00 - 17:00</span>
          </p>
          <p class="table" v-if="type === '5'">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动时间：</span>
            <span class="table-cell">08:00 - 09:00</span>
          </p>
          <p class="table" v-if="type === '6'">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动时间：</span>
            <span class="table-cell">09:30 - 10:30</span>
          </p>
          <p class="table" v-if="type === '7'">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动时间：</span>
            <span class="table-cell">09:30 - 16:30</span>
          </p>
          <p class="table">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动地点：</span>
            <span class="table-cell">酒店 2 楼大堂集合</span>
          </p>
          <p class="tips-bot">
            <b style="font-weight: 600;">*请注意！活动一经确认将无法更改，敬请准时出席。</b><br>
参与亚特兰蒂斯水上世界和呀诺达雨林文化旅游区的嘉宾请随身携带好个人的身份证件以便入院登记！<br>
如现场有任何问题请联系活动热线：<br>
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
      if(this.type === '1') {
        this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-jiabinyuyue01.jpg';
      } else if(this.type === '2') {
        this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-yanuoda.jpg';
      } else if(this.type === '3' || this.type === '4') {
        this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-pinjiu.jpg';
      } else if(this.type === '5' || this.type === '6') {
        this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-yoga.jpg';
      } else if(this.type === '7') {
        this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-golf.jpg';
      } else {
        this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/bg-top11.jpg';
      }
      
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
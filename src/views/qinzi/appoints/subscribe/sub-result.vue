<template>
  <div class="ei-main">
    <div class="ef-main">
      <article class="ef-art pc-art mct-art">
        <div class="result-tips form-result">
          <strong>尊敬的保时捷车主俱乐部会员<br>恭喜您已完成 12 月 6 日活动的预约</strong>
          <br /><br />
          <p class="table">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动项目：</span>
            <span class="table-cell" v-if="type === '1'">近海冲浪 + 豪华游艇</span>
            <span class="table-cell" v-if="type === '2'">豪华游艇 + 水上摩托艇</span>
            <span class="table-cell" v-if="type === '3'">-最美海岸试驾体验</span>
          </p>
          <p class="table">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动日期：</span>
            <span class="table-cell">2021 年 12 月 6 日</span>
          </p>
          <p class="table" v-if="type === '1'">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动时间：</span>
            <span class="table-cell">09:00 - 15:00</span>
          </p>
          <p class="table" v-if="type === '2'">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动时间：</span>
            <span class="table-cell">09:00 - 15:00</span>
          </p>
          <p class="table" v-if="type === '3'">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动时间：</span>
            <span class="table-cell">11:30  -15:30</span>
          </p>
          <!-- <p class="table">
            <span class="table-cell" style="width: 5.2em; vertical-align: top;">活动地点：</span>
            <span class="table-cell">酒店 2 楼大堂集合</span>
          </p> -->
          <p class="tips-bot">
            <b style="font-weight: 600;">* 请注意！活动一经确认将无法更改，敬请准时出席。</b><br>
            <!-- <b style="font-weight: 600;" v-if="type === '1'">* 请带好身份证件以便登记。</b>
            <b style="font-weight: 600;" v-if="type === '3'">* 请随身携带好个人的身份证件以便入园登记。</b>
            <b style="font-weight: 600;" v-if="type === '4'">* 请带好泳衣等装备及个人的身份证件以便入园登记。</b> -->
* 如现场有任何问题请联系活动热线：<br>
131-6100-5513
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
        this.$parent.img_path = '/static/images/2020/top-banners/haidiao.jpg';
      } else if(this.type === '2') {
        this.$parent.img_path = '/static/images/2020/top-banners/haiyangguan.jpg';
      } else if(this.type === '3') {
        this.$parent.img_path = '/static/images/2020/top-banners/yulin.jpg';
      } else if(this.type === '4') {
        this.$parent.img_path = '/static/images/2020/top-banners/shuishijie.jpg';
      } else if(this.type === '7') {
        this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-golf.jpg';
      } else {
        this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/bg-top11.jpg';
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
// src/views/guest/subscribe/sub-result.vue
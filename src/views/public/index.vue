<template>
  <!-- <div id="index-view" style="padding-bottom: 12vmin; height: 100vh;"> -->
  <div id="index-view">
    <div class="body-index pr">
      <section class="bi-tit fen-b">
        <img class="img-logo" src="https://d.devnow.cn/golf2019/images/logo.png" alt="Porsche">
        <img class="img-word" src="https://d.devnow.cn/golf2019/images/2019/landing-title.png" alt="2019 保时捷高尔夫巡回赛总决赛 Porsche Golf Cup China Final 2019">
      </section>
      <section class="bi-btns">
        <ul>
          <li>
            <h1>总决赛选手专用入口</h1>
            <router-link :to="{'name': 'player'}" class="btn-index">赛事详情</router-link>
          </li>
          <li>
            <h1>总决赛嘉宾专用入口</h1>
            <router-link :to="{'name': 'guest'}" class="btn-index">活动预约</router-link>
          </li>
          <li>
            <h1>全体住客通用入口</h1>
            <router-link :to="{'name': 'form.drive'}" class="btn-index">试驾预约</router-link>
          </li>
        </ul>
      </section>
    </div>
    <img src="https://d.devnow.cn/golf2019/images/2019/bottom2019.jpg" alt="" class="img-bot">
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    created() {
      // $('.body').addClass('body-index-bg');
    },
    beforeDestroy() {
      // $('.body').removeClass('body-index-bg');
      // $('.body').removeClass('body-finalist');
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/public/index.vue
<template>
  <div id="index-view" style="padding-bottom: 12vmin; height: 100vh;">
    <div class="body-index pr">
      <section class="bi-tit fen-b">
        <img class="img-logo" src="/static/images/logo.png" alt="Porsche">
        <img class="img-word" src="/static/images/landing-title.png" alt="2018 保时捷高尔夫巡回赛总决赛 Porsche Golf Cup China Final 2018">
      </section>
      <section class="bi-btns">
        <ul>
          <li>
            <h1>决赛选手专用入口</h1>
            <router-link :to="{'name': 'player'}" class="btn-index">赛事详情</router-link>
          </li>
          <li>
            <h1>决赛嘉宾专用入口</h1>
            <router-link :to="{'name': 'guest'}" class="btn-index">活动预约</router-link>
          </li>
          <li>
            <h1>全体住客通用入口</h1>
            <router-link :to="{'name': 'form.drive'}" class="btn-index">试驾预约</router-link>
          </li>
        </ul>
      </section>
    </div>
    <img src="/static/images/2019/bot.png" alt="" class="img-bot">
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
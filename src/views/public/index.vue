<template>
  <!-- <div id="index-view" style="padding-bottom: 12vmin; height: 100vh;"> -->
  <div id="index-view">
    <div class="body-index pr">
      <section class="bi-tit fen-b">
        <img class="img-logo" src="/static/images/2019/logo.png" alt="Porsche">
        <img class="img-word" src="/static/images/2019/landing-title.png" alt="2019 保时捷高尔夫巡回赛总决赛 Porsche Golf Cup China Final 2019">
      </section>
      <section class="bi-btns">
        <ul>
          <li>
            <router-link :to="{'name': 'player'}" class="btn-index">活动详情</router-link>
          </li>
          <li>
            <router-link :to="{'name': 'guest'}" class="btn-index">活动预约</router-link>
          </li>
          <li>
            <router-link :to="{'name': 'form.drive'}" class="btn-index">试驾预约</router-link>
          </li>
          <li>
            <router-link :to="{'name': 'col.videospics'}" class="btn-index">影像集锦</router-link>
          </li>
        </ul>
      </section>
    </div>
    <img src="/static/images/2019/bot.png" alt="" class="img-bot">

    <div class="xieyi-dimmer">
      
    </div>
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
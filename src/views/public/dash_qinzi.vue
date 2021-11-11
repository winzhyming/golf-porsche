<template>
  <!-- <div id="index-view" style="padding-bottom: 12vmin; height: 100vh;"> -->
  <div id="index-view" class="bg-attach-ment" style="background: url(/static/images/2020/dt2020.png) bottom center no-repeat; background-size: 100% auto; background-color: #070304;">
  <!-- <div id="index-view" style="background: url(/static/images/2020/dt2020.png) bottom center norepeat;"> -->
    <div class="body-index pr" style="padding-bottom: 39vmin;">
      <section class="bi-tit fen-b">
        <img class="img-logo" src="/static/images/2020/logo_white.png" alt="Porsche">
        <img class="img-word" src="/static/images/2020/loading-title-white.png" alt="2021 保时捷中国车主俱乐部年度晚宴 Porsche Club China Annual Gala 2021">
      </section>
      <section class="bi-btns">
        <ul>
          <li>
            <router-link :to="{'name': 'qinzi.acts'}" class="btn-index" style="color: #fff; border-color: #fff;">活动详情</router-link>
          </li>
          <li>
            <router-link :to="{'name': 'qinzi.appoints'}" class="btn-index" style="color: #fff; border-color: #fff;">活动预约</router-link>
          </li>
          <li>
            <router-link :to="{'name': 'qinzi.mine'}" class="btn-index" style="color: #fff; border-color: #fff;">我的行程</router-link>
          </li>
          <li><a href="javascript:;" @click="goOtherMini()" class="btn-index" style="color: #fff; border-color: #fff;">影像集锦</a></li>
        </ul>
      </section>
    </div>
    <!-- <img src="https://d.devnow.cn/travelclub2019/images/2019/bot.png" alt="" class="img-bot"> -->
  </div>
</template>

<script>
  export default {
    methods: {
      goOtherMini() {
        wx.miniProgram.navigateTo({
          url: '/pages/test/test',
  　　  })
      }
    }
  }
</script>
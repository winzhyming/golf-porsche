<template>
  <div id="index-view" style="height: 100vh;">
  <!-- <div id="index-view" class="bg-attach-ment" style="background: url(/static/images/2020/dt2020.png) bottom center no-repeat; background-size: 100% auto; background-color: #070304;"> -->
  <!-- <div id="index-view" style="background: url(/static/images/2020/dt2020.png) bottom center norepeat;"> -->
    <div class="body-index pr" style="padding-bottom: 39vmin;">
      <section class="bi-tit fen-b">
        <img class="img-logo" src="/static/images/2019/logo.png" alt="Porsche">
        <img class="img-word" src="/static/images/2021/landing-title.png" alt="2021 保时捷中国车主俱乐部年度晚宴 2021 Porsche Club China Annual Gala">
      </section>
      <section class="bi-btns">
        <ul>
          <li>
            <router-link :to="{'name': 'huwai.acts'}" class="btn-index">活动详情</router-link>
          </li>
          <li>
            <router-link :to="{'name': 'huwai.appoints'}" class="btn-index">活动预约</router-link>
          </li>
          <li>
            <router-link :to="{'name': 'huwai.mine'}" class="btn-index">我的行程</router-link>
          </li>
          <li><a href="javascript:;" @click="goOtherMini()" class="btn-index">影像集锦</a></li>
        </ul>
      </section>
    </div>
    <img src="/static/images/2021/bot2021.jpg" alt="" class="img-bot" style="bottom: 0%;">
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
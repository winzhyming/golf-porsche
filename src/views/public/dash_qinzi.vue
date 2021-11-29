<template>
  <div id="index-view" style="height: 100vh;">
    <div class="body-index pr" style="padding-bottom: 39vmin;">
      <section class="bi-tit fen-b">
        <img class="img-logo" src="/static/images/2019/logo.png" alt="Porsche">
        <img class="img-word" src="https://d.devnow.cn/pcc/2021/landing-title.png" alt="2021 保时捷中国车主俱乐部年度晚宴 2021 Porsche Club China Annual Gala">
      </section>
      <section class="bi-btns">
        <ul>
          <li>
            <router-link :to="{'name': 'qinzi.acts'}" class="btn-index">活动详情</router-link>
          </li>
          <li>
            <router-link :to="{'name': 'qinzi.appoints'}" class="btn-index">活动预约</router-link>
          </li>
          <li>
            <router-link :to="{'name': 'qinzi.mine'}" class="btn-index">我的行程</router-link>
          </li>
          <li><a href="javascript:;" @click="goOtherMini()" class="btn-index">影像集锦</a></li>
        </ul>
      </section>
    </div>
    <img src="https://d.devnow.cn/pcc/2021/bot25.png" class="img-bot" style="left: 50%; transform: translateX(-50%); bottom: 1; width: 58%;">
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
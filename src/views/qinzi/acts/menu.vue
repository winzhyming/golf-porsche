<template>
  <div id="player-menu" class="bg-attach-ment">
    <section class="bf-tit fen-b">
      <h1 class="chi" style="color: #000">2020 保时捷中国车主俱乐部年度晚宴</h1>
      <h1 class="en" style="color: #000">Porsche Club China Annual Gala 2020</h1>
    </section>
    <div class="bf-main pr">
      <!-- <img src="https://d.devnow.cn/travelclub2019/images/bg-finalist-main.png" class="pa-bg"/> -->
      <div class="pa table bfm-body" style="height: 124vmin;">
        <section class="fb-btns">
          <ul>
            <!--  -->
            <li style="border-bottom: 1px solid #000;">
              <router-link :to="{'name': 'qinzi.acts.schedule'}" class="btn-a">
                <img src="/static/images/2020/btn-finalist02.png" alt="" />
                <h2 style="color: #000">日程安排</h2>
              </router-link>
            </li>
            <li style="border-bottom: 1px solid #000;">
              <router-link :to="{'name': 'qinzi.acts.act'}" class="btn-a">
                <img src="/static/images/2020/btn-finalist01.png" alt="" />
                <h2 style="color: #000">活动信息</h2>
              </router-link>
            </li>
            <li style="border-bottom: 1px solid #000;">
              <router-link :to="{'name': 'qinzi.acts.hotel'}" class="btn-a">
                <img src="/static/images/2020/btn-finalist04.png" alt="" />
                <h2 style="color: #000">酒店地图</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'qinzi.acts.forecast'}" class="btn-a">
                <img src="/static/images/2020/btn-finalist051.png" alt="" />
                <h2 style="color: #000">天气预报</h2>
              </router-link>
            </li>
          </ul>
        </section>
      </div>
    </div>
    
    <a @click="index" class="index-btn"><img src="/static/images/2020/ic-index.png"/></a>
    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/travelclub2019/images/ic-back.jpg"/></a>
  </div>
</template>

<script>
  export default {
    methods: {
      index() {
        this.$router.push({'name': 'index'});
      },
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>
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
            <!-- <li>
              <router-link :to="{'name': 'event.menu'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/btn-finalist01.png" alt="" />
                <h2>赛事信息</h2>
              </router-link>
            </li> -->
            <li style="border-bottom: 1px solid #000;">
              <router-link :to="{'name': 'schedule.list'}" class="btn-a">
                <img src="/static/images/2020/btn-finalist02.png" alt="" />
                <h2 style="color: #000">日程安排</h2>
              </router-link>
            </li>
            <!-- <li>
              <router-link :to="{'name': 'site.guide'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/btn-finalist07.png" alt="" />
                <h2>球场指南</h2>
              </router-link>
            </li> -->
            <li style="border-bottom: 1px solid #000;">
              <router-link :to="{'name': 'activity.menu'}" class="btn-a">
                <img src="/static/images/2020/btn-finalist01.png" alt="" />
                <h2 style="color: #000">活动信息</h2>
              </router-link>
            </li>
            <!-- <li>
              <router-link :to="{'name': 'activity.dressugestion'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/btn-finalist08.png" alt="" />
                <h2>着装建议</h2>
              </router-link>
            </li> -->
            <li style="border-bottom: 1px solid #000;">
              <router-link :to="{'name': 'map.hotel'}" class="btn-a">
                <img src="/static/images/2020/btn-finalist04.png" alt="" />
                <h2 style="color: #000">酒店地图</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'forecast.weather'}" class="btn-a">
                <img src="/static/images/2020/btn-finalist051.png" alt="" />
                <h2 style="color: #000">天气预报</h2>
              </router-link>
            </li>
            <!-- <li>
              <router-link :to="{'name': 'activity.emergcontact'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/btn-finalist05.png" alt="" />
                <h2>紧急联络</h2>
              </router-link>
            </li> -->
            <!-- <li>
              <router-link :to="{'name': 'col.videospics'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/btn-finalist06.png" alt="" />
                <h2>影像集锦</h2>
              </router-link>
            </li> -->
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
    data() {
      return {}
    },
    mounted() {
      // $('.body').addClass('body-finalist');
    },
    destroyed() {
      // $('.body').removeClass('body-finalist');
    },
    methods: {
      index() {
        this.$router.push({'name': 'dashboard'});
      },
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>



// WEBPACK FOOTER //
// src/views/player/menu.vue
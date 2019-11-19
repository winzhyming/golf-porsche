<template>
  <div id="player-menu" class="bg-attach-ment">
    <section class="bf-tit fen-b">
      <h1 class="chi">2019 电驰神往俱乐部年度晚宴</h1>
      <!-- <h1 class="en">Porsche Glub China Aunual Gala 2019</h1> -->
    </section>
    <div class="bf-main pr">
      <!-- <img src="/static/images/bg-finalist-main.png" class="pa-bg"/> -->
      <div class="pa table bfm-body" style="height: 124vmin;">
        <section class="fb-btns">
          <ul>
            <!-- <li>
              <router-link :to="{'name': 'event.menu'}" class="btn-a">
                <img src="/static/images/btn-finalist01.png" alt="" />
                <h2>赛事信息</h2>
              </router-link>
            </li> -->
            <li>
              <router-link :to="{'name': 'schedule.list'}" class="btn-a">
                <img src="/static/images/btn-finalist02.png" alt="" />
                <h2>日程安排</h2>
              </router-link>
            </li>
            <!-- <li>
              <router-link :to="{'name': 'site.guide'}" class="btn-a">
                <img src="/static/images/btn-finalist07.png" alt="" />
                <h2>球场指南</h2>
              </router-link>
            </li> -->
            <li>
              <router-link :to="{'name': 'activity.menu'}" class="btn-a">
                <img src="/static/images/btn-finalist08.png" alt="" />
                <h2>活动信息</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'map.hotel'}" class="btn-a">
                <img src="/static/images/btn-finalist04.png" alt="" />
                <h2>酒店地图</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'forecast.weather'}" class="btn-a">
                <img src="/static/images/btn-finalist05.png" alt="" />
                <h2>天气预报</h2>
              </router-link>
            </li>
            <!-- <li>
              <router-link :to="{'name': 'col.videospics'}" class="btn-a">
                <img src="/static/images/btn-finalist06.png" alt="" />
                <h2>影像集锦</h2>
              </router-link>
            </li> -->
          </ul>
        </section>
      </div>
    </div>
    
    <a @click="back" class="back-btn" v-bottom_back><img src="/static/images/ic-back.jpg"/></a>
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
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>



// WEBPACK FOOTER //
// src/views/player/menu.vue
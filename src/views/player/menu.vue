<template>
  <div id="player-menu" class="bg-attach-ment">
    <section class="bf-tit fen-b">
      <img src="https://d.devnow.cn/golf2021/white-title.png" style="width: 76vmin;">
    </section>
    <div class="bf-main old pr">
      <!-- <img src="https://d.devnow.cn/golf2019/images/bg-finalist-main.png" class="pa-bg"/> -->
      <div class="pa table bfm-body" style="height: 124vmin;">
        <section class="fb-btns">
          <ul>
            <li>
              <router-link :to="{'name': 'event.menu'}" class="btn-a">
                <img src="https://d.devnow.cn/golf2021/ics/ic56-030.png"/>
                <h2>赛事信息</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'schedule.list'}" class="btn-a">
                <img src="https://d.devnow.cn/golf2019/images/btn-finalist02.png" alt="" />
                <h2>赛程安排</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'site.guide'}" class="btn-a">
                <img src="https://d.devnow.cn/golf2019/images/btn-finalist07.png" alt="" />
                <h2>球场指南</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'activity.menu'}" class="btn-a">
                <img src="https://d.devnow.cn/golf2019/images/btn-finalist01.png" alt="" />
                <h2>活动信息</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'map.hotel'}" class="btn-a">
                <img src="https://d.devnow.cn/golf2019/images/btn-finalist04.png" alt="" />
                <h2>酒店地图</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'forecast.weather'}" class="btn-a">
                <img src="https://d.devnow.cn/golf2019/images/btn-finalist05.png" alt="" />
                <h2>天气预报</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'col.videospics'}" class="btn-a">
                <img src="https://d.devnow.cn/golf2019/images/btn-finalist06.png" alt="" />
                <h2>影像集锦</h2>
              </router-link>
            </li>
          </ul>
          <p class="desc">注意：接收 2021 保时捷高尔夫中国总决赛的邀请，即视为授权同意保时捷将您与同行伙伴的姓名与肖像权使用与公共宣传目的。</p>
        </section>
        
      </div>
    </div>
    
    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/golf2019/images/ic-back.jpg"/></a>
  </div>
</template>

<style scoped>
  p.desc{
    padding: 0 13vmin;
    font-size: 2.5vmin;
    color: #fff;
    line-height: 3.75vmin;
    text-align: justify
  }
</style>>

</style>

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
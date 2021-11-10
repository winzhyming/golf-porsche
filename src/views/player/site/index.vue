<template>
  <div id="schedule-index">
    <div class="top-ban pr">
      <img src="https://d.devnow.cn/golf2021/top-banners/qczn.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1><img src="https://d.devnow.cn/golf2019/images/btn-finalist07.png" class="ic"/>球场指南</h1>
      </div>
    </div>
    <div class="pr">
    	<transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view></router-view>
      </transition>
    </div>

    <img src="https://d.devnow.cn/golf2021/bottom2021.jpg" alt="" class="img-bot">
    
    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/golf2019/images/ic-back.jpg"/></a>
    <a @click="index" class="index-btn"><img src="https://d.devnow.cn/golf2019/images/ic-index.jpg"/></a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {}
    },
    methods: {
      index() {
        this.$router.push({'name': 'dashboard'});
      },
      back() {
        this.$router.go(-1);
      }
    },
    computed:{
      ...mapState({
        direction: state => state.mutations.direction,
      })
    }
  }
</script>



// WEBPACK FOOTER //
// src/views/player/site/index.vue
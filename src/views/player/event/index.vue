<template>
  <div id="player-parent">
    <div class="top-ban pr">
      <img src="/static/images/2020/top-banners/ssxx.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1><img src="/static/images/2020/ics/ic56-030.png" class="ic"/>赛事信息</h1>
      </div>
    </div>
    <div class="pr">
    	<transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view></router-view>
      </transition>
    </div>
    
    <img src="/static/images/2020/bottom2021.jpg" alt="" class="img-bot">
    
    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/golf2019/images/ic-back.jpg"/></a>
    <a @click="index" class="index-btn"><img src="https://d.devnow.cn/golf2019/images/ic-index.jpg"/></a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    data() {
      return {
        transitionName: ''
      }
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
// src/views/player/event/index.vue
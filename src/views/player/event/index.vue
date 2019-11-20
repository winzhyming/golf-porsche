<template>
  <div id="player-parent">
    <div class="top-ban pr">
      <img src="https://d.devnow.cn/travelclub2019/images/bg-top01.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <!-- <img src="https://d.devnow.cn/travelclub2019/images/top-tit.png" class="pa-img"/> -->
        <h1><img src="https://d.devnow.cn/travelclub2019/images/btn-finalist01.png" class="ic"/>赛事信息</h1>
      </div>
    </div>
    <div class="pr">
    	<transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view></router-view>
      </transition>
    </div>
    
    <img src="https://d.devnow.cn/travelclub2019/images/bg-bottom.jpg" alt="" class="img-bot">
    <!-- <div class="ei-bot" v-bottom_img>
      <img src="https://d.devnow.cn/travelclub2019/images/bot-img.png"/>
    </div> -->
    
    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/travelclub2019/images/ic-back.jpg"/></a>
    <a @click="index" class="index-btn"><img src="https://d.devnow.cn/travelclub2019/images/ic-index.jpg"/></a>
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
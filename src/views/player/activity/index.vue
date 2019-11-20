<template>
  <div id="activity-index">
    <div class="top-ban pr">
      <img src="https://d.devnow.cn/golf2019/images/2019/top/top-huodongxinxi.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <!-- <img src="https://d.devnow.cn/golf2019/images/top-tit.png" class="pa-img"/> -->
        <h1><img src="https://d.devnow.cn/golf2019/images/btn-finalist08.png" class="ic"/>活动信息</h1>
      </div>
    </div>
    
    
    <div class="pr">
      <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view></router-view>
      </transition>
    </div>
    
    <img src="https://d.devnow.cn/golf2019/images/2019/bottom2019.jpg" alt="" class="img-bot">
    <!-- <div class="ei-bot" v-bottom_img>
      <img src="https://d.devnow.cn/golf2019/images/bot-img.png"/>
    </div> -->
    
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
// src/views/player/activity/index.vue
<template>
  <div id="sub-index">
    <div class="top-ban pr">
      <img :src="img_path" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="pr">
      <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view></router-view>
      </transition>
    </div>
    
    <!-- <img src="/static/images/2019/bot.png" alt="" class="img-bot"> -->
    <!-- <div class="ei-bot" v-bottom_img>
      <img src="/static/images/bot-img.png"/>
    </div> -->
    
    <a @click="back" class="back-btn"  v-bottom_back><img src="/static/images/ic-back.jpg"/></a>
    <a @click="index" class="index-btn"><img src="/static/images/ic-index.jpg"/></a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  
  export default {
    data() {
      return {
        img_path: '/static/images/2019/top-jiabinyuyue.jpg',
        title: '嘉宾预约',
      }
    },
    mounted() {
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
    },
     watch: {
      '$route' ($route) {
        if($route.name === 'subscribe.menu') {
          this.title = '嘉宾预约'
        }
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/index.vue
<template>
  <div id="form-index">
    <div class="top-ban pr" style="min-height: 38.75vmin;">
      <img src="https://d.devnow.cn/travelclub2019/images/2019/top-jiabinyuyue.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1>预约试驾</h1>
      </div>
    </div>
    <div class="pr">
      <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view></router-view>
      </transition>
    </div>
    
    <!-- <img src="https://d.devnow.cn/travelclub2019/images/2019/bot.png" alt="" class="img-bot"> -->
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
        img_path: '',
        form_data: {}
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
    },
    beforeDestroy() {
      if(this.form_data) this.form_data = null;
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/form/index.vue
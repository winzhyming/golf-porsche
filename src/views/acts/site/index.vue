<template>
  <div id="schedule-index">
    <div class="top-ban pr">
      <img src="/static/images/2021/bg-hw-qczn.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1>球场指南</h1>
      </div>
    </div>
    <div class="pr">
    	<router-view></router-view>
    </div>
    

    <img src="https://d.devnow.cn/travelclub2019/images/bg-bottom.jpg" alt="" class="img-bot">
    
    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/travelclub2019/images/ic-back.jpg"/></a>
    <a @click="index" class="index-btn"><img src="/static/images/2020/ic-index.png"/></a>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
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
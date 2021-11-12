<template>
  <div id="sub-index">
    <div class="top-ban pr">
      <img :src="img_path" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1>班车时刻表</h1>
      </div>
    </div>
    <router-view></router-view>
    
    
    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/travelclub2019/images/ic-back.jpg"/></a>
    <a @click="index" class="index-btn"><img src="/static/images/2020/ic-index.png"/></a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        img_path: ''
      }
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
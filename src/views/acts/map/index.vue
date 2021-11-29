<template>
  <div id="map-index">
    <div class="top-ban pr">
      <img src="https://d.devnow.cn/pcc/2021/bg-hw-jddt.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1>酒店地图</h1>
      </div>
    </div>

    <div class="pr">
    	<router-view></router-view>
    </div>


    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/travelclub2019/images/ic-back.jpg"/></a>
    <a @click="index" class="index-btn"><img src="/static/images/2020/ic-index.png"/></a>
  </div>
</template>

<script>
  export default {
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


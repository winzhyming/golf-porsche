<template>
  <div class="ei-main" style="padding-bottom: 36vmin;">
    <div class="group-info-table">
      <h1 class="git-tit no-bb">
        球场介绍 <img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic"/>
      </h1>
    </div>
    <div class="site-image">
      <img :src="img" v-for="(img, index) in imgs5" :key="index" alt="">
      <br><br>
    </div>
  </div>
</template>

<style scoped>
  .ds-list ul li p img{max-width: 100%;}
  .site-image {padding: 10px; text-align: center;}
  .site-image img{max-width: 100%; margin-bottom: 2vmin;}
</style>


<script>
  export default {
    data() {
      return {
        imgs5: []
      }
    },
    created() {
      for(let i = 1; i < 19; i++) {
        this.imgs5.push('https://d.devnow.cn/golf2021/holes/5/' + i + '.jpg')
      }
    }
  }
</script>



// WEBPACK FOOTER //
// src/views/player/site/site-guide.vue
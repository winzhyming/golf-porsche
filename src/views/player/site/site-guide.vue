<template>
  <div class="ei-main" style="padding-bottom: 36vmin;">
    <div class="group-info-table">
      <h1 class="git-tit no-bb">
        球场介绍 <img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic"/>
      </h1>
      <section class="ds-list">
        <ul>
          <li>
            <p>
神州半岛高尔夫球场是一个由东、西场以及锦标级场地三部分组成的 36 洞球场，另设有五个练习球洞。 <br><br>
该球场由国际著名的高尔夫球大师汤姆韦斯科夫精心设计，将神州半岛从起伏的海岸沙丘到嶙峋的山间巨石独特地理环境及迷人景致出神入化般融入设计中。<br><br>
球场亦拥有风格独特的天然沙坑，与周围环境完美融合，看起来似乎已经在此存在了多个世纪。这个优美的典范式海滨设计将会赋予各层次的高尔夫爱好者灵感，同时也考验他们的技术。<br><br>
这种设计采纳传统的高尔夫球场设计，令人联想到皇家墨尔本球场、柏树点球场、松谷球场等球场的经典设计。无论您在开球前停下来呼吸一口新鲜空气，还是在群峰连绵的天际线背景下挥杆，又或者纯粹享受会所尊贵的盛情款待，神州高尔夫球场提供了一个世界一流的场所，让每个人都能真正享受传统的高尔夫运动。
            </p>
          </li>
        </ul>
      </section>
    </div>
    <div class="site-image">
      <h2 style="font-size: 5vmin; color: #f00; text-align: left; font-weight: 600; margin-bottom: 3.125vmin;">12月4日</h2>
      <img :src="img" v-for="(img, index) in imgs4" :key="index" alt="">
      <br>
      <br>
      <h2 style="font-size: 5vmin; color: #f00; text-align: left; font-weight: 600; margin-bottom: 3.125vmin;">12月5日</h2>
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
        imgs4: [],
        imgs5: []
      }
    },
    created() {
      for(let i = 1; i < 19; i++) {
        this.imgs4.push('https://d.devnow.cn/golf2020/images/holes/4/' + i + '.jpg')
      }
      for(let i = 1; i < 19; i++) {
        this.imgs5.push('https://d.devnow.cn/golf2020/images/holes/5/' + i + '.jpg')
      }
    }
  }
</script>



// WEBPACK FOOTER //
// src/views/player/site/site-guide.vue
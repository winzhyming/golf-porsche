<template>
  <div class="ei-main">
    <section class="ei-btns gais-btns">
      <ul>
        <li>
          <router-link :to="{'name': 'subscribe.water'}" class="clearfix">
            亚特兰蒂斯水上世界<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.yanuoda'}" class="clearfix">
            呀诺达雨林文化旅游区<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.pinjiu'}" class="clearfix">
            威士忌品鉴<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.yoga'}" class="clearfix">
            海滨瑜伽<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.golf'}" class="clearfix">
            高尔夫<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <!-- <li>
          <router-link :to="{'name': 'subscribe.porsche'}" class="clearfix">
            保时捷友谊赛<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.movie'}" class="clearfix">
            分界洲岛自由行<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.volcano'}" class="clearfix">
            分界洲岛试驾体验<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li> -->
      </ul>
      
      <div class="tips-bot">
        *请注意，出于时间安排，您只能在亚特兰蒂斯水上世界、呀诺达雨林文化旅游区、威士忌品鉴、海滨瑜伽、高尔夫五项活动中选择一项参与，名额有限，先到先得，确认后将无法更改，请谨慎勾选。
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-jiabinyuyue.jpg';
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-menu.vue
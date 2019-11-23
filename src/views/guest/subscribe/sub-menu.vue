<template>
  <div class="ei-main">
    <p class="title" style="position: absolute; top: -3.75vmin; left: 3.75vmin; font-size: 3.75vmin; color: #000;">12 月 2 日 活动</p>
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
        * 受限于每项活动的进行时间，您仅能在亚特兰蒂斯水上世界、呀诺达雨林文化旅游区、试驾、高尔夫 4 项活动中选其一，酒店内进行的威士忌品鉴、海滨瑜伽可同时报名。活动名额有限，先到先得，一旦确认提交无法更改，请谨慎勾选。<br>（“试驾预约”可通过主页面报名）
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
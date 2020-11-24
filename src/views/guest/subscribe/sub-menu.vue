<template>
  <div class="ei-main">
    <section class="ei-btns gais-btns" style="padding-bottom: 39vmin;">
      <ul>
        <!-- <li>
          <router-link :to="{'name': 'subscribe.porsche'}" class="clearfix f2020">
            ⾼尔夫体验：神州半岛⾼尔夫球会<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li> -->
        <li>
          <router-link :to="{'name': 'subscribe.menu.volcano'}" class="clearfix f2020">
            ⾼尔夫体验：神州半岛⾼尔夫球会<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.menu.movie'}" class="clearfix f2020">
            ⽔上活动体验：⽯梅湾威斯汀酒店<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        
      </ul>
      
      <div class="tips-bot">
        * 请注意，由于时间安排，您只能在⾼尔夫体验和⽔上活动体验两个活动中选择⼀项参加。名额有限，先到先得。
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
      this.$parent.img_path = 'https://d.devnow.cn/golf2020/images/top-banners/jbyy.jpg';
    }
  }
</script>

<style>
  .f2020{font-size: 3.4375vmin !important;}
</style>

// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-menu.vue
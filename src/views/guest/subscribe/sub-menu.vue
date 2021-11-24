<template>
  <div class="ei-main">
    <section class="ei-btns gais-btns" style="padding-bottom: 39vmin;">
      <ul>
        <li>
          <router-link :to="{'name': 'subscribe.porsche2'}" class="clearfix">
            保时捷友谊赛<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>

        <li>
          <router-link :to="{'name': 'subscribe.haian2'}" class="clearfix">
            最美海岸试驾体验<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>

        <li>
          <router-link :to="{'name': 'subscribe.mianshui'}" class="clearfix">
            三亚免税店<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>

        <li>
          <router-link :to="{'name': 'subscribe.chonglang'}" class="clearfix">
            水上冲浪体验<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        
      </ul>
      
      <div class="tips-bot">
        * 请注意，由于时间安排，您只能在上面四个活动中选择一项参加，名额有限，先到先得。
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
      this.$parent.img_path = 'https://d.devnow.cn/golf2021/top-banners/jbyy.jpg';
    }
  }
</script>

<style>
  .f2020{font-size: 3.4375vmin !important;}
</style>

// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-menu.vue
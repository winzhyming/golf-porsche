<template>
  <div class="ei-main">
    <section class="ei-btns gais-btns" style="padding-bottom: 39vmin;">
      <ul>
        <li>
          <router-link :to="{'name': 'subscribe.porsche'}" class="clearfix">
            保时捷友谊赛<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.haian'}" class="clearfix">
            最美海岸试驾体验<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.water'}" class="clearfix">
            ⽔上桨板体验<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.coffee'}" class="clearfix">
            咖啡庄园体验<img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic fr"/>
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
      this.$parent.img_path = '/static/images/2020/top-banners/jbyy.jpg';
    }
  }
</script>

<style>
  .f2020{font-size: 3.4375vmin !important;}
</style>

// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-menu.vue
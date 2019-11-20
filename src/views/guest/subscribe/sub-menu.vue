<template>
  <div class="ei-main">
    <section class="ei-btns gais-btns">
      <ul>
        <li>
          <router-link :to="{'name': 'subscribe.porsche'}" class="clearfix">
            保时捷友谊赛<img src="/static/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.movie'}" class="clearfix">
            分界洲岛自由行<img src="/static/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.volcano'}" class="clearfix">
            分界洲岛试驾体验<img src="/static/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
      </ul>
      
      <div class="tips-bot">
        *请注意，出于时间安排，您只能在保时捷友谊赛、分界洲岛自由行和试驾体验三个活动中选择一项参与，名额有限，先到先得。
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
      this.$parent.img_path = '/static/images/2019/top/top-jiabinyuyue.jpg';
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-menu.vue
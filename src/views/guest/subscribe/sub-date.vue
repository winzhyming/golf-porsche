<template>
  <div class="ei-main">
    <section class="ei-btns dates-btns" style="padding-bottom: 39vmin;">
      <ul>
        <li>
          <router-link :to="{'name': 'subscribe.four'}" class="clearfix f2020">
            12 月 3 日
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.three'}" class="clearfix f2020">
            12 月 4 日
          </router-link>
        </li>
      </ul>
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

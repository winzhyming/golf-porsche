<template>
  <div class="ei-main">
    <section class="ei-btns">
      <ul>
        <li>
          <router-link :to="{ name: 'huwai.appoints.subs.event' }" class="clearfix">
            赛事信息<img src="/static/images/2020/ic-next-darkblue.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'huwai.appoints.subs.site' }"  class="clearfix">
            球会指南<img src="/static/images/2020/ic-next-darkblue.png" class="ic fr"/>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/pcc/2021/bg-hw-ssxx.jpg';
      this.$parent.title = '高尔夫友谊赛'
    }
  }
</script>
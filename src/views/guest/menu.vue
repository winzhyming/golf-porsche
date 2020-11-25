<template>
  <div id="guest-index" class="bg-attach-ment">
    <section class="bf-tit fen-b">
      <h1 class="chi">2020 保时捷中国车主俱乐部年度晚宴</h1>
      <h1 class="en">Porsche Club China Annual Gala 2020</h1>
    </section>
    <div class="bf-main pr">
      <!-- <img src="https://d.devnow.cn/travelclub2019/images/bg-finalist-main.png" class="pa-bg"/> -->
      <div class="pa table bfm-body">
        <section class="fb-btns fg-btns">
          <ul>
            <li>
              <router-link :to="{'name': 'subscribe.menu'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/ic-final-guest01.png" alt="" />
                <h2>嘉宾预约</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'schedule.bus'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/ic-final-guest02.png" alt="" />
                <h2>班车信息</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'contact.emergency'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/ic-final-guest03.png" alt="" />
                <h2>紧急联络</h2>
              </router-link>
            </li>
          </ul>
        </section>
      </div>
    </div>
    
    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/travelclub2019/images/ic-back.jpg"/></a>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/menu.vue
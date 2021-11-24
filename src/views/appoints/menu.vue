<template>
  <div id="guest-index" class="bg-attach-ment">
    <section class="bf-tit fen-b">
      <img src="/static/images/2021/landing-title2.png" style="width: 70.46875vmin;">
    </section>
    <div class="bf-main pr">
      <!-- <img src="https://d.devnow.cn/travelclub2019/images/bg-finalist-main.png" class="pa-bg"/> -->
      <div class="pa table bfm-body">
        <section class="fb-btns fg-btns">
          <ul>
            <li>
              <router-link :to="{'name': 'huwai.appoints.subs'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/ic-final-guest01.png" alt="" />
                <h2>活动简介</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'huwai.appoints.bus'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/ic-final-guest02.png" alt="" />
                <h2>班车信息</h2>
              </router-link>
            </li>
            <li>
              <router-link :to="{'name': 'huwai.appoints.contact'}" class="btn-a">
                <img src="https://d.devnow.cn/travelclub2019/images/ic-final-guest03.png" alt="" />
                <h2>紧急联络</h2>
              </router-link>
            </li>
          </ul>
        </section>
      </div>
    </div>
    
    <a @click="index" class="index-btn"><img src="/static/images/2020/ic-index.png"/></a>

    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/travelclub2019/images/ic-back.jpg"/></a>
  </div>
</template>

<script>
  export default {
    methods: {
      index() {
        this.$router.push({'name': 'index'});
      },
      back() {
        this.$router.go(-1);
      }
    }
  }
</script>

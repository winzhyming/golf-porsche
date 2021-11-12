<template>
  <div id="activity-index">
    <div class="top-ban pr">
      <img src="/static/images/2021/bg-hw-hdxx.jpg" class="pa-img"/>
      <div class="tbt-tit pa">
        <h1>{{ title }}</h1>
      </div>
    </div>


    <div class="pr">
      <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view></router-view>
      </transition>
    </div>


    <a @click="back" class="back-btn" v-bottom_back><img src="https://d.devnow.cn/travelclub2019/images/ic-back.jpg"/></a>
    <a @click="index" class="index-btn"><img src="/static/images/2020/ic-index.png"/></a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        title: '活动信息'
      }
    },
    methods: {
      index() {
        this.$router.push({'name': 'index'});
      },
      back() {
        this.$router.go(-1);
      }
    },
    computed:{
      ...mapState({
        direction: state => state.mutations.direction,
      })
    }
  }
</script>

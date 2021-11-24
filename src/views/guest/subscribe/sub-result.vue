<template>
  <div class="ei-main">
    <div class="ef-main">
      <article class="ef-art pc-art mct-art">
        <div class="result-tips" style="margin: 10vmin 0;">
              恭喜您已完成
              <strong v-if="type === '6'">水上冲浪体验: 神州半岛海滩</strong>
              <strong v-if="type === '5'">三亚免税店：三亚海棠湾免税购物中心</strong>
              <strong v-if="type === '4'">最美海岸试驾体验</strong>
              <strong v-if="type === '3'">咖啡庄园体验</strong>
              <strong v-if="type === '2'">水上桨板体验</strong>
              <strong v-if="type === '1'">最美海岸试驾体验</strong>
              的预约，稍后会有工作人员与您核对相关信息，并确认是否预约成功。
        </div>
        <div class="btn-form">
          <a @click="index" class="btn-order ib">返回首页</a>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      let _params = this.$route.params;
      return {
        type: _params.type || '1'
      }
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/golf2019/images/bg-top11.jpg';
    },
    methods: {
      index() {
        this.$router.push({'name': 'dashboard'});
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-result.vue
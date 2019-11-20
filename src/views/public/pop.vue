<template>
  <div class="dimmer-pop" id="dimmer-pop" style="display: none;">
    <div class="dp-table">
      <div class="table-cell">
        <div class="dp-box pr">
          <p v-html="tips"></p>
          
          <a @click="close" class="pa dp-close"><img src="https://d.devnow.cn/golf2019/images/ic-pop-close.png"/></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tips: '请输入验证码<br>并勾选阅读隐私条款'
      }
    },
    methods: {
      pop(_tips) {
        this.tips = _tips;
        this.jquery_el.show();
      },
      close() {
        this.jquery_el.hide();
      }
    },
    mounted() {
      this.jquery_el = $('#dimmer-pop');
      this.$root.pop = this.pop.bind(this);
    }
  }
</script>



// WEBPACK FOOTER //
// src/views/public/pop.vue
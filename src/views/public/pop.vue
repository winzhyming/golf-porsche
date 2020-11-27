<template>
  <div class="dimmer-pop" id="dimmer-pop" style="display: none;">
    <div class="dp-table">
      <div class="table-cell">
        <div class="dp-box pr" style="border-color: #080b1a;">
          <p v-html="tips" style="color: #080b1a;"></p>
          
          <a @click="close" class="pa dp-close"><img src="/static/images/2020/ic-pop-close.png"/></a>
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

<style scoped>
  .dp-box{
    padding: 3vmin 8vmin;
    width: 62.5vmin;
  }
</style>



// WEBPACK FOOTER //
// src/views/public/pop.vue
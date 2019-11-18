<template>
  <div class="confirm-dimmer" style="display: none;">
    <div class="cd-box">
      <div class="cd-title">尊敬的保时捷车主俱乐部会员！</div>
      <div class="cd-desc" v-if="type === 'water'">
        <p>您确定预约 12 月 2 日 10:00 - 16:00 亚特兰蒂斯水上世界活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-desc" v-if="type === 'yanuoda'">
        <p>您确定预约 12 月 2 日 12:00 - 16:00 呀诺达雨林文化旅游区活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-desc" v-if="type === 'pinjiu'">
        <p>您确定预约 12 月 2 日（场次）威士忌品鉴活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-desc" v-if="type === 'yoga'">
        <p>您确定预约 12 月 2 日（场次）户外瑜伽活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-desc" v-if="type === 'golf'">
        <p>您确定预约 12 月 2 日 09:30 - 16:30 高尔夫活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-btns">
        <a @click="sure" href="javascript:;">确认</a>
        <a @click="dismiss" href="javascript:;">再想想</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        modal: null,
        next: null,
        type: 'water'
      }
    },
    mounted() {
      this.modal = $(this.$el)
      this.$root.$on('confirm', this.modal_trigger.bind(this))
    },
    methods: {
      modal_trigger(next, type) {
        this.next = next || null
        this.type = type || 'water'
        this.modal.show()
      },
      sure() {
        this.modal.hide()
        this.next && this.next()
      },
      dismiss() {
        this.modal.hide()
      }
    }
  }
</script>
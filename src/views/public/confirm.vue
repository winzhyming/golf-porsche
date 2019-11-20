<template>
  <div class="confirm-dimmer" style="display: none;">
    <div class="cd-box">
      <div class="cd-title">尊敬的保时捷车主俱乐部会员！</div>
      <div class="cd-desc" v-if="type === '1'">
        <p>您确定预约 12 月 2 日 10:00 - 16:00 亚特兰蒂斯水上世界活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-desc" v-if="type === '2'">
        <p>您确定预约 12 月 2 日 12:00 - 16:00 呀诺达雨林文化旅游区活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-desc" v-if="type === '3'">
        <p>您确定预约 12 月 2 日（14:30 - 15:30）威士忌品鉴活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-desc" v-if="type === '4'">
        <p>您确定预约 12 月 2 日（16:00 - 17:00）威士忌品鉴活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-desc" v-if="type === '5'">
        <p>您确定预约 12 月 2 日（08:00 - 09:00）海滨瑜伽活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-desc" v-if="type === '6'">
        <p>您确定预约 12 月 2 日（09:30 - 10:30）海滨瑜伽活动吗？</p>
        <p>预约一经确认不可更改，请谨慎预约。</p>
      </div>
      <div class="cd-desc" v-if="type === '7'">
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
        type: '1',
      }
    },
    mounted() {
      this.modal = $(this.$el)
      this.$root.$on('confirm', this.modal_trigger.bind(this))
    },
    methods: {
      modal_trigger(next, type) {
        this.next = next || null
        this.type = type || '1'
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
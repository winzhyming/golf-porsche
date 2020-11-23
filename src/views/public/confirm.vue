<template>
  <div class="confirm-dimmer" style="display: none;">
    <div class="cd-box" style="padding-top: 4vmin;">
      <div class="cd-title">尊敬的保时捷车主俱乐部会员!</div>
      <div class="cd-desc" v-if="type === '1'">
        <p>您确定预约 12 月 5 日 12:00 - 15:00 <br>三亚角海钓活动吗？</p>
        <p>预约一经确认不可更改，敬请谅解。</p>
      </div>
      <div class="cd-desc" v-if="type === '2'">
        <p>您确定预约 12 月 5 日 10:00 - 16:15<br>亚特兰蒂斯水族馆&CDF免税店吗？</p>
        <p>预约一经确认不可更改，敬请谅解。</p>
      </div>
      <div class="cd-desc" v-if="type === '3'">
        <p>您确定预约 12 月 5 日 10:30 - 15:30 <br>呀诺达雨林文化旅游区活动吗？</p>
        <p>预约一经确认不可更改，敬请谅解。</p>
      </div>
      <div class="cd-desc" v-if="type === '4'">
        <p>您确定预约 12 月 5 日 10:00 - 15:00 <br>亚特兰蒂斯水世界活动吗？</p>
        <p>预约一经确认不可更改，敬请谅解。</p>
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
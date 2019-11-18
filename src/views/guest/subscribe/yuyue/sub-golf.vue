<template>
  <!-- 高尔夫 -->
  <div class="ei-main">
    <div class="yuyue2019">
      <div class="desc">
        <p><strong>高尔夫（09:30 - 16:30）</strong></p>
        <br>
        <p>全球最成功的一位高尔夫球手 Phil Mickelson 曾经说过:“高尔夫的目标不仅仅是赢得比赛，而是要像绅士一样，有风度地取得胜利。”保时捷中国车主俱乐部邀请您前来挥杆，18 洞比赛，新新贝利亚规则，以总杆成绩评定冠亚季军。</p>
        <br>
        <p>出发集合地点：2F 酒店大堂</p>
        <p>出发时间：09:15 集合班车发车前往鉴湖蓝湾高尔夫球场</p>
        <p>返返回时间：16:15 集合班车发车返回酒店</p>
        <br>
        <p>*特别提醒：需自带球包球具等装备。</p>
      </div>
      <div class="yuyue-btns">
        <a @click="confirm" href="javascript:;">确认预约</a>
        <a @click="back" href="javascript:;">返回上一页</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$parent.img_path = '/static/images/2019/top-golf.jpg';
      this.$parent.title = '高尔夫'
    },
    methods: {
      confirm() {
        this.$root.$emit('confirm', () => {
          this.$router.replace({'name': 'subscribe.result'})
        }, 'golf')
      },
      back() {
        this.$router.go(-1);
      }
    }

  }
</script>
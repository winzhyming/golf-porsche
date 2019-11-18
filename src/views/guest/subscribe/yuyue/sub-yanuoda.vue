<template>
  <!-- 呀诺达雨林文化旅游区 -->
  <div class="ei-main">
    <div class="yuyue2019">
      <div class="desc">
        <p>呀诺达雨林文化旅游区位于三亚市北偏东方向的保亭黎族自治县三道农场，距离三亚市中心 35 公里。是中国唯一地处北纬 18 度的热带雨林，是海南岛五大热带雨林精品的浓缩，是最具观赏价值的热带雨林资源博览馆，堪称中国钻石级雨林景区。保时捷中国车主俱乐部邀请您一同享受热带雨林带来的荫凉和绿意盎然。</p>
        <br>
        <br>
        <p>出发集合地点：2F 酒店大堂</p>
        <p>出发时间：11:45 集合班车发车前往呀诺达雨林文化旅游区</p>
        <p>返回集合地点：呀诺达雨林文化旅游区正门</p>
        <p>返回时间：15:45 集合班车发车返回酒店</p>
        <br>
        <p>*特别提醒：需好身份证件。</p>
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
      this.$parent.img_path = '/static/images/2019/top-yanuoda.jpg';
      this.$parent.title = '呀诺达雨林文化旅游区'
    },
    methods: {
      confirm() {
        this.$root.$emit('confirm', () => {
          this.$router.replace({'name': 'subscribe.result'})
        }, 'yanuoda')
      },
      back() {
        this.$router.go(-1);
      }
    }

  }
</script>
<template>
  <!-- 瑜伽 -->
  <div class="ei-main">
    <div class="yuyue2019">
      <div class="desc">
        <p>保时捷中国车主俱乐部协同威斯汀酒店一起安排的户外瑜伽，让大家都有机会在美丽独特的海边美景中释放压力,舒缓身心,希望海边的日光和海风可以为您提供一种健康放松的方式打开新的一天。</p>
        <br>
        <p><strong>场次: </strong></p>
        <p><input type="radio" name="changci" /><label for="">08:00 - 09:00</label></p>
        <p><input type="radio" name="changci" /><label for="">09:30 - 10:30</label></p>
        <br>
        <p>地址: 酒店海滨草坪</p>
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
      this.$parent.img_path = '/static/images/2019/top-yoga.jpg';
      this.$parent.title = '瑜伽'
    },
    methods: {
      confirm() {
        this.$root.$emit('confirm', () => {
          this.$router.replace({'name': 'subscribe.result'})
        }, 'yoga')
      },
      back() {
        this.$router.go(-1);
      }
    }

  }
</script>
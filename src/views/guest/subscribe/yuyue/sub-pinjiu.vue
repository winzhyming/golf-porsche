<template>
  <!-- 酒店品酒 -->
  <div class="ei-main">
    <div class="yuyue2019">
      <div class="desc">
        <p>保时捷中国车主俱乐部特邀前巴黎水中国品牌形象大使，世界排名第十三位 London Detroit Bar 吧台经理 - Eddy Yang 为大家带来精彩的威士忌品鉴之旅。Eddy 旅英 10 年，回国后先后担任兰会所酒水总监，新加坡莱福士酒店酒吧顾问。敬请期待 Eddy 带您领略威士忌的不同风味。</p>
        <br>
        <p><strong>场次: </strong></p>
        <p><input type="radio" name="changci" /><label for="">15:00 - 16:00</label></p>
        <p><input type="radio" name="changci" /><label for="">16:00 - 17:00</label></p>
        <br>
        <p>地址: 酒店海滨草坪</p>
      </div>
      <div class="ar-box" style="margin-top: 3.125vmin;">
        <div class="ar-form">
          <div class="af-group"><input type="text" placeholder="电话" class="form-control"></div>
          <div class="af-group code-group"><input type="text" placeholder="验证码" class="form-control"><a href="javascript:;" class="btn-get-code">获取验证码</a></div>
        </div>
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
      this.$parent.img_path = '/static/images/2019/top-pinjiu.jpg';
      this.$parent.title = '品酒'
    },
    methods: {
      confirm() {
        this.$root.$emit('confirm', () => {
          this.$router.replace({'name': 'subscribe.result'})
        }, 'pinjiu')
      },
      back() {
        this.$router.go(-1);
      }
    }

  }
</script>
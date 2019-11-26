<template>
  <div class="ei-main em2018_bot">
    <div class="es-data">
      <h1 class="git-tit no-bb">
        班车时刻 <img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic"/>
      </h1>
      <section class="event-schedule">
        <h2 class="es-tit">12 月 1 日 星期日 上车地点：三亚凤凰国际机场</h2>
        <ul class="fen">
          <li class="clearfix li-tit">
            <span class="fl lable-left ellipsis">机场 – 酒店</span>
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">13:00 - 18:00</span>
            <span class="fr text-right">班车接机</span>
          </li>
        </ul>
      </section>
      <br>
      <section class="event-schedule">
        <h2 class="es-tit">12 月 2 日 星期一</h2>
        <ul class="fen">
          <li class="clearfix li-tit">
            <span class="fl lable-left" style="width: 100%;">酒店正门 – 亚特兰蒂斯水上世界</span>
            <!-- <span class="fr text-right">上车地点：酒店正门口</span> -->
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">09:30</span>
            <span class="fr text-right">班车去程</span>
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">16:00</span>
            <span class="fr text-right">班车返程</span>
          </li>
          <li class="clearfix li-tit">
            <span class="fl lable-left" style="width: 100%;">酒店正门 – 呀诺达雨林文化旅游区</span>
            <!-- <span class="fr text-right">上车地点：酒店正门口</span> -->
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">12:30</span>
            <span class="fr text-right">班车去程</span>
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">16:30</span>
            <span class="fr text-right">班车返程</span>
          </li>
          <li class="clearfix li-tit">
            <span class="fl lable-left" style="width: 100%;">酒店正门 – 鉴湖蓝湾高尔夫球场</span>
            <!-- <span class="fr text-right">上车地点：酒店正门口</span> -->
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">09:15</span>
            <span class="fr text-right">班车去程</span>
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">14:30</span>
            <span class="fr text-right">班车返程</span>
          </li>
        </ul>
      </section>
      <br>
      <section class="event-schedule">
        <h2 class="es-tit">12 月 3 日 星期二 上车地点：酒店正门</h2>
        <ul class="fen">
          <li class="clearfix">
            <span class="fl lable-left ellipsis">08:00 - 18:00</span>
            <span class="fr text-right">班车送机<br>请至少于飞机起飞前 2.5 小时出发</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-banchexinxi.jpg';
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/schedule/bus.vue
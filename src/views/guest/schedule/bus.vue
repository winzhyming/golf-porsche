<template>
  <div class="ei-main em2018_bot">
    <div class="es-data">
      <h1 class="git-tit no-bb">
        班车时刻 <img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic"/>
      </h1>
      <section class="event-schedule">
        <h2 class="es-tit">12 月 1 日 星期日 上车地点：机场</h2>
        <ul class="fen">
          <li class="clearfix li-tit">
            <span class="fl lable-left ellipsis">机场 – 酒店</span>
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">13:00 - 18:00</span>
            <span class="fr text-right">根据实际班车情况安排车辆接机</span>
          </li>
        </ul>
      </section>
      <br>
      <section class="event-schedule">
        <h2 class="es-tit">12 月 2 日 星期一 <br>上车地点：酒店正门口/活动地点正门口</h2>
        <ul class="fen">
          <li class="clearfix li-tit">
            <span class="fl lable-left" style="width: 100%;">酒店 – 亚特兰蒂斯水上世界</span>
            <!-- <span class="fr text-right">上车地点：酒店正门口</span> -->
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">09:45 - 10:00</span>
            <span class="fr text-right">班车出发</span>
          </li>
          <li class="clearfix li-tit">
            <span class="fl lable-left" style="width: 100%;">酒店 – 呀诺达雨林文化旅游区</span>
            <!-- <span class="fr text-right">上车地点：酒店正门口</span> -->
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">11:45 - 12:00</span>
            <span class="fr text-right">班车出发</span>
          </li>
          <li class="clearfix li-tit">
            <span class="fl lable-left" style="width: 100%;">酒店 – 鉴湖蓝湾高尔夫球场</span>
            <!-- <span class="fr text-right">上车地点：酒店正门口</span> -->
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">09:15 - 09:30</span>
            <span class="fr text-right">班车出发</span>
          </li>
          <li class="clearfix li-tit">
            <span class="fl lable-left" style="width: 100%;">亚特兰蒂斯水上世界 – 酒店</span>
            <!-- <span class="fr text-right">上车地点：亚特兰蒂斯水上世界正门口</span> -->
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">15:45 - 16:00</span>
            <span class="fr text-right">班车出发</span>
          </li>
          <li class="clearfix li-tit">
            <span class="fl lable-left" style="width: 100%;">呀诺达雨林文化旅游区 – 酒店</span>
            <!-- <span class="fr text-right">上车地点：呀诺达雨林文化旅游区正门口</span> -->
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">15:45 - 16:00</span>
            <span class="fr text-right">班车出发</span>
          </li>
          <li class="clearfix li-tit">
            <span class="fl lable-left" style="width: 100%;">鉴湖蓝湾高尔夫球场 – 酒店</span>
            <!-- <span class="fr text-right">上车地点：呀诺达雨林文化旅游区正门口</span> -->
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">14:30</span>
            <span class="fr text-right">班车出发</span>
          </li>
        </ul>
      </section>
      <br>
      <section class="event-schedule">
        <h2 class="es-tit">12 月 3 日 星期二 上车地点：酒店正门口</h2>
        <ul class="fen">
          <li class="clearfix">
            <span class="fl lable-left ellipsis">08:00 - 18:00</span>
            <span class="fr text-right">预约发车<br>请至少于飞机起飞前 2.5 小时出发</span>
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
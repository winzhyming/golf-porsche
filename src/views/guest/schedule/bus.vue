<template>
  <div class="ei-main em2018_bot">
    <div class="es-data">
      <h1 class="git-tit no-bb">
        班车时刻 <img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic"/>
      </h1>
      <section class="event-schedule">
        <h2 class="es-tit">2019 年 11 月 30 日 - 保时捷友谊赛班车信息</h2>
        <ul class="fen">
          <li class="clearfix li-tit">
            <span class="fl lable-left ellipsis">酒店 – 球会</span>
            <span class="fr text-right">上车地点：酒店正门口</span>
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">07:45 - 10:30</span>
            <span class="fr text-right">每 05 分钟一班</span>
          </li>
          <li class="clearfix li-tit">
            <span class="fl lable-left ellipsis">球会 – 酒店</span>
            <span class="fr text-right">
              <label class="fl">上车地点：</label>
              <span class="fl">球会正门口</span>
            </span>
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">14:00 - 17:30</span>
            <span class="fr text-right">每 05 分钟一班</span>
          </li>
        </ul>
      </section>
      <br>
      <section class="event-schedule">
        <h2 class="es-tit">2019 年 11 月 30 日 - 分界洲岛自由行班车信息</h2>
        <ul class="fen">
          <li class="clearfix li-tit">
            <span class="fl lable-left ellipsis">酒店 – 分界洲岛</span>
            <span class="fr text-right">上车地点：酒店正门口</span>
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">09:30</span>
            <span class="fr text-right"></span>
          </li>
          <li class="clearfix li-tit">
            <span class="fl lable-left ellipsis">分界洲岛 – 酒店</span>
            <span class="fr text-right">
              <label class="fl">上车地点：</label>
              <span class="fl">码头售票处边停车场</span>
            </span>
          </li>
          <li class="clearfix">
            <span class="fl lable-left ellipsis">16:00</span>
            <span class="fr text-right"></span>
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
      this.$parent.img_path = 'https://d.devnow.cn/golf2019/images/bg-top12.jpg';
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/schedule/bus.vue
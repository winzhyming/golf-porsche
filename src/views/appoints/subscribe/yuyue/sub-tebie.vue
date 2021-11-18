<template>
  <div>
    <div class="ei-main">
      <div class="yuyue2019">
        <div class="desc">
          <p style="text-indent: 0em;">活动项目：高尔夫</p>
          <p style="text-indent: 0em;">活动日期：2021 年 12 月 5 日</p>
          <p style="text-indent: 0em;">活动地点：三亚海中海高尔夫球会</p>
          <br>
          <p style="text-indent: 0em;">* 如我们为您提供的预约活动您都不想选择，保时捷中国车主俱乐部可为您安排高尔夫活动，请于 11 月 30 日 18:00 前告知会务组。</p>
          <p style="text-indent: 0em;">* 需自备球包。</p>
        </div>
      </div>
    </div>
    <div class="top-ban pr" style="margin-top: 10vmin;">
      <img src="/static/images/2020/top-banners/top-yoga.jpg" class="pa-img">
      <div class="tbt-tit pa">
        <h1>瑜伽</h1>
      </div>
    </div>
    <div class="ei-main">
      <div class="yuyue2019" style="padding-bottom: 39vmin;">
        <div class="desc">
          <p style="text-indent: 0em;">活动项目：瑜伽</p>
          <p style="text-indent: 0em;">活动日期：2021 年 12 月 5 日</p>
          <p style="text-indent: 0em;">活动时间：07:00 - 08:00</p>
          <p style="text-indent: 5em;">10:00 - 11:00</p>
          <p style="text-indent: 5em;">16:00 - 17:00</p>
          <p style="text-indent: 0em;">活动地点：酒店一楼泳池边</p>
          <br>
          <p style="text-indent: 0em;">* 每个时段至多容纳 6 位客人，如有需求请尽快告知会务组预约。</p>
          <p style="text-indent: 0em;">* 需自备瑜伽服。</p>
          <br>
          <br>
          <p style="text-indent: 0em;">如您对此活动感兴趣，请与我们工作人员联络<br>（活动专线：131 6110 5513 ）</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    this.$parent.img_path = '/static/images/2020/top-banners/top-golf.jpg';
    this.$parent.title = '高尔夫活动'

    this.$root.pop(
      '我们另为您提供了特别预约活动，如您对此感兴趣请与我们的工作人员联系了解报名相关事项（联系方式：131 6110 5513）。'
    );
  },
}
</script>
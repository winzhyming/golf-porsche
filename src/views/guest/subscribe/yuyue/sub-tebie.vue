<template>
  <div>
    <div class="ei-main">
      <div class="yuyue2019">
        <div class="desc">
          <p style="text-indent: 0em;">活动项目：高尔夫</p>
          <p style="text-indent: 0em;">活动日期：2020 年 12 月 5 日</p>
          <p style="text-indent: 0em;">活动时间：</p>
          <p style="text-indent: 0em;">活动地点：三亚海中海高尔夫球会 </p>
          <p style="text-indent: 3em;">（地址：三亚市海棠区林旺镇青田村海中海高尔夫球会）</p>
          <p style="text-indent: 0em;">出发时间：</p>
          <p style="text-indent: 0em;">集合地点：</p>
          <p style="text-indent: 0em;">返程时间：</p>
          <br>
          <p style="text-indent: 0em;">* 请注意！活动一经确认将无法更改，敬请准时出席。</p>
          <p style="text-indent: 0em;">* 请自行携带高尔夫球具参与。</p>
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
          <p style="text-indent: 0em;">活动日期：2020 年 12 月 5 日</p>
          <p style="text-indent: 0em;">活动时间：xxxxx</p>
          <p style="text-indent: 0em;">活动地点：酒店泳池边</p>
          <br>
          <p style="text-indent: 0em;">* 请自行着瑜伽相关服装参与。</p>
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
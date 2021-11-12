<template>
  <div class="ei-main em2018_bot">
    <div class="es-data" style="padding-bottom: 20vmin;">
      <h1 class="git-tit no-bb">
        班车时刻 <img src="/static/images/2020/ic-next-darkblue.png" class="ic"/>
      </h1>
      <table class="es-table">
        <tr>
          <th colspan="3">2021 年 12 月 8 日 星期三</th>
        </tr>
        <tr>
          <td>活动名称</td>
          <td style="width:24%;">发车时间</td>
          <td>上车地点</td>
        </tr>
        <tr>
          <td rowspan="4">儿童高尔夫训练课程<br>（少年英雄组）</td>
          <td colspan="2">酒店 - 球会</td>
        </tr>
        <tr>
          <td>9:45</td>
          <td>酒店正门口</td>
        </tr>
        <tr>
          <td colspan="2">球会 - 酒店</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>球会会所正门口</td>
        </tr>
        <tr>
          <td>儿童游乐体验项目<br>（少年英雄组）</td>
          <td>14:00</td>
          <td>酒店二层大堂<br>保时捷签到处</td>
        </tr>
        <tr>
          <td>儿童游乐体验项目<br>（少年竞速组）</td>
          <td>10:00</td>
          <td>酒店二层大堂<br>保时捷签到处</td>
        </tr>
        <tr>
          <td rowspan="4">儿童高尔夫训练课程<br>（少年竞速组）</td>
          <td colspan="2">酒店 - 球会</td>
        </tr>
        <tr>
          <td>13:45</td>
          <td>酒店正门口</td>
        </tr>
        <tr>
          <td colspan="2">球会 - 酒店</td>
        </tr>
        <tr>
          <td>16:00</td>
          <td>球会会所正门口</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      this.$parent.img_path = '/static/images/2021/bg-hw-bcsk.jpg';
    }
  }
</script>

<style scoped>
  .es-table{
    width: 100%;
  }
  .es-table tr td, .es-table tr th{
    padding: 1.25vmin 0.25vmin;
    border: 1px solid #aaa;
    font-family: pn-regular;
    font-size: 2.5vmin;
    line-height: 3.125vmin;
    text-align: center;
  }
  .es-table tr th{
    color: #fff;
    background-color: #403f45;
  }
</style>
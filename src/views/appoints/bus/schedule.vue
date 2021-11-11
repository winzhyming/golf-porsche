<template>
  <div class="ei-main em2018_bot">
    <div class="es-data" style="padding-bottom: 20vmin;">
      <h1 class="git-tit no-bb">
        班车时刻 <img src="/static/images/2020/ic-next-darkblue.png" class="ic"/>
      </h1>
      <table class="es-table">
        <tr>
          <th colspan="3">2021 年 12 月 6 日 星期一</th>
        </tr>
        <tr>
          <td>活动名称</td>
          <td style="width:24%;">发车时间</td>
          <td>上车地点</td>
        </tr>
        <tr>
          <td rowspan="4">专业组正式赛<br>业余组友谊赛</td>
          <td colspan="2">酒店 - 球会</td>
        </tr>
        <tr>
          <td>07:30 - 09:45<br>每 10 分钟一班</td>
          <td>酒店正门口</td>
        </tr>
        <tr>
          <td colspan="2">球会 - 酒店</td>
        </tr>
        <tr>
          <td>15:30 - 16:30<br>每 10 分钟一班</td>
          <td>球会会所正门口</td>
        </tr>
        <tr>
          <td rowspan="4">冲浪体验</td>
          <td colspan="2">酒店 - 冲浪俱乐部</td>
        </tr>
        <tr>
          <td>10:30</td>
          <td>酒店二层大堂</td>
        </tr>
        <tr>
          <td colspan="2">冲浪俱乐部 - 酒店</td>
        </tr>
        <tr>
          <td>15:30</td>
          <td>俱乐部门口</td>
        </tr>
        <tr>
          <td rowspan="4">水上摩托艇<br>豪华游艇出海体验</td>
          <td colspan="2">酒店 - 石梅湾游艇会</td>
        </tr>
        <tr>
          <td>12:45</td>
          <td>酒店二层大堂</td>
        </tr>
        <tr>
          <td colspan="2">石梅湾游艇会 - 酒店</td>
        </tr>
        <tr>
          <td>16:00</td>
          <td>游艇会门口</td>
        </tr>
        <tr>
          <td rowspan="4">咖啡庄园参观</td>
          <td colspan="2">酒店 - 兴隆咖啡庄园</td>
        </tr>
        <tr>
          <td>11:30</td>
          <td>酒店二层大堂</td>
        </tr>
        <tr>
          <td colspan="2">兴隆咖啡庄园 - 酒店</td>
        </tr>
        <tr>
          <td>15:00</td>
          <td>咖啡庄园正门口</td>
        </tr>
        <tr>
          <td rowspan="2">最美海岸线试驾</td>
          <td>11:00 - 15:00</td>
          <td>酒店二层大堂</td>
        </tr>
        <tr>
          <td colspan="2">试驾体验时间：45分钟</td>
        </tr>
      </table>

      <!-- <p class="tips-bot" style="margin-top: 3.15vmin;">* 前往亚特兰蒂斯水世界游玩的客人，也可以继续去免税店购物，请注意亚特兰蒂斯水世界回程的2个不同上车地点及时间。</p>
      
      <table class="es-table" style="margin-top: 10vmin;">
        <tr>
          <th colspan="3">12 月 6 日 星期天</th>
        </tr>
        <tr>
          <td>班车时间</td>
          <td>上车地点</td>
        </tr>
        <tr>
          <td>04:30<br>
05:30<br>
09:00<br>
10:00<br>
12:00<br>
14:00<br>
16:00<br>
18:00<br>
20:00</td>
          <td>酒店大堂门口</td>
        </tr>
      </table>
      <p class="tips-bot" style="margin-top: 3.15vmin;">* 从瑰丽酒店到三亚凤凰国际机场。</p> -->
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
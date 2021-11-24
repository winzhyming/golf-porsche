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
          <td style="width: 46%;">活动名称</td>
          <td style="width:24%;">发车时间</td>
          <td>上车地点</td>
        </tr>

        <tr>
          <td rowspan="4">2021 保时捷中国车主俱乐部高尔夫友谊赛</td>
          <td colspan="2">酒店 - 球会</td>
        </tr>
        <tr>
          <td>09:30</td>
          <td>酒店正门口</td>
        </tr>
        <tr>
          <td colspan="2">球会 - 酒店</td>
        </tr>
        <tr>
          <td>15:30</td>
          <td>球会会所正门口</td>
        </tr>

        <tr>
          <td rowspan="4">2021 保时捷中国车主俱乐部<br>玩水踏浪日（第一组）</td>
          <td colspan="2">酒店 - 石梅湾游艇会</td>
        </tr>
        <tr>
          <td>09:00</td>
          <td>酒店二层大堂</td>
        </tr>
        <tr>
          <td colspan="2">石梅湾游艇会 - 酒店</td>
        </tr>
        <tr>
          <td>11:15</td>
          <td>游艇会门口</td>
        </tr>

        <tr>
          <td rowspan="4">2021 保时捷中国车主俱乐部<br>玩水踏浪日（第二组）</td>
          <td colspan="2">酒店 - 石梅湾游艇会</td>
        </tr>
        <tr>
          <td>10:00</td>
          <td>酒店二层大堂</td>
        </tr>
        <tr>
          <td colspan="2">石梅湾游艇会 - 酒店</td>
        </tr>
        <tr>
          <td>12:15</td>
          <td>游艇会门口</td>
        </tr>

        <tr>
          <td rowspan="4">2021 保时捷中国车主俱乐部<br>玩水踏浪日（第三组）</td>
          <td colspan="2">酒店 - 石梅湾游艇会</td>
        </tr>
        <tr>
          <td>12:00</td>
          <td>酒店二层大堂</td>
        </tr>
        <tr>
          <td colspan="2">石梅湾游艇会 - 酒店</td>
        </tr>
        <tr>
          <td>14:15</td>
          <td>游艇会门口</td>
        </tr>

        <tr>
          <td rowspan="4">2021 保时捷中国车主俱乐部<br>玩水踏浪日（第四组）</td>
          <td colspan="2">酒店 - 石梅湾游艇会</td>
        </tr>
        <tr>
          <td>13:00</td>
          <td>酒店二层大堂</td>
        </tr>
        <tr>
          <td colspan="2">石梅湾游艇会 - 酒店</td>
        </tr>
        <tr>
          <td>15:15</td>
          <td>游艇会门口</td>
        </tr>

        <tr>
          <td rowspan="4">2021 保时捷中国车主俱乐部<br>玩水踏浪日（第五组）</td>
          <td colspan="2">酒店 - 石梅湾游艇会</td>
        </tr>
        <tr>
          <td>14:00</td>
          <td>酒店二层大堂</td>
        </tr>
        <tr>
          <td colspan="2">石梅湾游艇会 - 酒店</td>
        </tr>
        <tr>
          <td>16:15</td>
          <td>游艇会门口</td>
        </tr>

        <tr>
          <td rowspan="2">最美海岸试驾体验</td>
          <td>10:00 - 15:00</td>
          <td>酒店二层大堂<br>保时捷体验中心柜台</td>
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
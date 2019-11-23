<template>
  <div class="ei-main">
    <div class="group-info-table">
      <h1 class="git-tit no-bb">
        着装建议
        <img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic" />
      </h1>
      <section class="ds-list">
        <ul>
          <li>
            <h2>2019 年 12 月 1 日 星期日</h2>
            <p class="flex">
              <span>19:30</span>
              <span>欢迎晚宴 - 雅致休闲</span>
            </p>
          </li>
          <li>
            <h2>2019 年 12 月 2 日 星期一</h2>
            <p class="flex">
              <span>09:00</span>
              <span>亚特兰蒂斯 - 自带泳衣</span>
            </p>
            <p class="flex">
              <span>12:30</span>
              <span>呀诺达雨林文化旅游区 - 运动休闲</span>
            </p>
            <p class="flex">
              <span>14:30 - 16:00</span>
              <span>威士忌品鉴 - 雅致休闲</span>
            </p>
            <p class="flex">
              <span>08:00 - 09:30</span>
              <span>海滨瑜伽 - 运动休闲</span>
            </p>
            <p class="flex">
              <span>09:15</span>
              <span>高尔夫 - 高尔夫 Polo 衫、休闲裤</span>
            </p>
            <p class="flex">
              <span>10:00-15:15</span>
              <span>试驾- 运动休闲</span>
            </p>
            <p class="flex">
              <span>19:00</span>
              <span>晚宴 <br>保时捷首款纯电动车 Taycan 会抵达晚宴现场，请秀出最契合这款车的个性晚礼服，现场将评选出最佳着装大奖！<br>tips：龙胆蓝，冰晶蓝，闪亮银等</span>
            </p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$parent.title = '着装建议'
    } 
  }
</script>

<style scoped>
  p.flex{
    display: flex;
  }
  p.flex span:nth-child(1){
    width: 18vmin;
  }
  p.flex span:nth-child(2){
    margin-left: 00.625vmin;
    flex: 1;
  }
</style>

<template>
  <div class="ei-main">
    <div class="group-info-table">
      <h1 class="git-tit no-bb">
        着装建议
        <img src="/static/images/2020/ic-next-darkblue.png" class="ic" />
      </h1>
      <section class="ds-list">
        <ul>
          <li>
            <h2>2020 年 12 月 4 日, 星期五</h2>
            <p>
              <span>欢迎晚宴 – 时尚休闲（白色）</span>
            </p>
            <div class="imgs">
              <img src="https://d.devnow.cn/travelclub2020/images/dress1.jpg" alt="">
              <img src="https://d.devnow.cn/travelclub2020/images/dress2.jpg" alt="">
            </div>
          </li>
          <li>
            <h2>2020 年 12 月 5 日, 星期六</h2>
            <p class="flex">
              <span>活动 - 运动休闲</span>
            </p>
            <p class="flex">
              <!-- <span>晚宴 - 晚礼服, 黑色加金色小配件</span> -->
              <span>晚宴 - 黑色礼服及金色配饰</span>
            </p>
            <div class="imgs">
              <img src="https://d.devnow.cn/travelclub2020/images/dress4.jpg" alt="">
              <img src="https://d.devnow.cn/travelclub2020/images/dress3.jpg" alt="">
            </div>
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
  .imgs{
    margin-top: 2vmin;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .imgs img{
    width: 47%;
  }
  p.flex{
    display: flex;
  }
  p.flex span:nth-child(1){
    /* width: 18vmin; */
  }
  p.flex span:nth-child(2){
    /* margin-left: 00.625vmin; */
    flex: 1;
  }
</style>

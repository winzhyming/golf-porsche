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
            <h2>2020 年 12 月 4 日, 星期五</h2>
            <p>
              <span>欢迎晚宴 – 時尚休闲, 白色</span>
            </p>
          </li>
          <li>
            <h2>2020 年 12 月 5日, 星期六</h2>
            <p class="flex">
              <span>活动 - 运动休闲</span>
            </p>
            <p class="flex">
              <span>晚宴 - 晚禮服, 黑色加金色小配件</span>
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
    /* width: 18vmin; */
  }
  p.flex span:nth-child(2){
    /* margin-left: 00.625vmin; */
    flex: 1;
  }
</style>

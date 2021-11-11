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
            <h2>2021 年 12 月 7 日，星期二</h2>
            <p><span>欢迎晚宴主题：绮梦花园</span></p>
            <p><span>着装要求：时尚休闲 - 斑斓印花，动物条纹 </span></p>
            <div class="imgs">
              <img src="/static/images/2021/dress01.png" alt="">
            </div>
          </li>
          <li>
            <h2>2021 年 12 月 8 日，星期三</h2>
            <p class="flex"><span>年度晚宴主题：星空下的宇宙湾</span></p>
            <p class="flex"><span>着装要求：晚礼服 - 时尚亮片，闪耀金属</span></p>
            <div class="imgs">
              <img src="/static/images/2021/dress02.png" alt="">
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
    width: 100%;
  }
  p.flex{
    display: flex;
  }
  p.flex span:nth-child(2){
    /* margin-left: 00.625vmin; */
    flex: 1;
  }
</style>

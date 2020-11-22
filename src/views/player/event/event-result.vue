<template>
  <div class="ei-main">
    <div class="group-info-table" style="padding-bottom: 39vmin">
      <h1 class="git-tit">
        比赛结果信息 <img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic"/>
      </h1>
      <table class="gi-table grade">
        <thead>
          <th>奖项</th>
          <th>获奖人</th>
        </thead>
        <tbody>
          <tr v-for="(da, index) in list" :key="index">
            <td v-html="da.cate"></td>
            <td>{{ da.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .gi-table.grade tr td{font-size: 1.875vmin; font-family: simHei;}
</style>

<script>
  export default {
    data() {
      return {
        list: [
          {
            cate: '总杆冠军',
            name: '',
          },
          {
            cate: '总杆亚军 ',
            name: '',
          },
          {
            cate: '总杆季军',
            name: '',
          },
          {
            cate: '男⼦净杆 A 组冠军（差点 0 – 14.4）',
            name: '',
          },
          {
            cate: '男⼦净杆 B 组冠军（差点 14.5 – 28.4）',
            name: '',
          },
          {
            cate: '⼥⼦净杆冠军（差点 0 – 28.4）',
            name: '',
          },
          {
            cate: '男⼦最远距离奖',
            name: '',
          },
          {
            cate: '⼥⼦最远距离奖',
            name: '',
          },
          {
            cate: '男⼦距线最近奖',
            name: '',
          },
          {
            cate: '⼥⼦距线最近奖',
            name: '',
          },
          {
            cate: '距洞最近奖',
            name: '',
          },
          {
            cate: '两杆最近洞奖',
            name: '',
          },
          {
            cate: '最佳团队奖',
            name: '',
          },
        ],
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/event/event-result.vue
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
            name: '夏丹女',
          },
          {
            cate: '总杆亚军 ',
            name: '白淙元',
          },
          {
            cate: '总杆季军',
            name: '赵琪',
          },
          {
            cate: '男子净杆 <span class="fen">A</span> 组冠军<span class="fen">（</span>差点 <span class="fen">0 - 14.4）</span>',
            name: '韩镇权',
          },
          {
            cate: '男子净杆 <span class="fen">B</span> 组冠军<span class="fen">（差点 <span class="fen">14.5 - 28.4）</span>',
            name: '郑会平',
          },
          {
            cate: '女子净杆冠军<span class="fen">（</span>差点 <span class="fen">0 - 28.4）</span>',
            name: '姜粉善',
          },
          {
            cate: '男⼦最远距离奖',
            name: '胡利康',
          },
          {
            cate: '⼥⼦最远距离奖',
            name: '杨松',
          },
          {
            cate: '男⼦距线最近奖',
            name: '薛浩',
          },
          {
            cate: '⼥⼦距线最近奖',
            name: '王雨鑫',
          },
          {
            cate: '距洞最近奖',
            name: '沈亚超',
          },
          {
            cate: '两杆最近洞奖',
            name: '杨松',
          },
          {
            cate: '最佳团队奖',
            name: '姜粉善、白淙元、薛浩',
          },
          {
            cate: '保时捷俱乐部最佳表现奖',
            name: '韩镇权'
          },
        ],
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/event/event-result.vue
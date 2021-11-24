<template>
  <div class="ei-main">
    <div class="group-info-table">
      <h1 class="git-tit">
        比赛结果信息 <img src="/static/images/2020/ic-next-darkblue.png" class="ic"/>
      </h1>
      <table class="gi-table grade">
        <thead>
          <th>奖项</th>
          <th>姓名</th>
          <th>码数/分数</th>
        </thead>
        <tbody>
          <tr v-for="(da, index) in list" :key="index">
            <td v-html="da.cate"></td>
            <td>{{ da.name }}</td>
            <td>{{ da.ys}}</td>
            <td>{{ da.domain }}</td>
          </tr>
          <!-- <tr>
            <td>{{ team.cate }}</td>
            <td colspan="2">{{ team.name }}</td>
            <td>{{ team.domain }}</td>
          </tr> -->
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
    mounted() {
      $('.img-bot').hide()
    },
    data() {
      return {
        list: [
          {
            cate: '总杆冠军',
            name: '',
            score: ''
          },
          {
            cate: '净杆冠军',
            name: '',
            score: ''
          },
          {
            cate: '男子最远距离奖',
            name: '',
            score: ''
          },
          {
            cate: '女子最远距离奖',
            name: '',
            score: ''
          },
          {
            cate: '男子距线最近奖',
            name: '',
            score: ''
          },
          {
            cate: '女子距线最近奖',
            name: '',
            score: ''
          },
          {
            cate: '一杆进洞奖',
            name: '',
            score: ''
          }
        ],
        team: {
          cate: '最佳团队',
          group: '',
          name: '吕世双、郭金龙、单继红',
          ys: '两个最高得分之和 76 分',
          domain: '北京金港保时捷中心'
        }
      }
    }
  }
</script>

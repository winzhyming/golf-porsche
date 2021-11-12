<template>
  <div class="ei-main">
    <div class="group-info-table">
      <h1 class="git-tit">
        比赛结果信息 <img src="/static/images/2020/ic-next-darkblue.png" class="ic"/>
      </h1>
      <table class="gi-table grade">
        <thead>
          <th>奖项</th>
          <th>组别</th>
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
            cate: '男子距线最近奖',
            group: '男子组',
            name: '',
            score: ''
          },
          {
            cate: '女子最远距离奖',
            group: '女子组',
            name: '',
            score: ''
          },
          {
            cate: '男子距线最近奖',
            group: '男子组',
            name: '',
            score: ''
          },
          {
            cate: '女子距线最近奖',
            group: '女子组',
            name: '',
            score: ''
          },
          {
            cate: '距洞最近奖',
            group: '',
            name: '',
            score: ''
          },
          {
            cate: '两杆最近洞奖',
            group: '',
            name: '',
            score: ''
          },
          {
            cate: '一杆进洞',
            group: '',
            name: '',
            score: ''
          },
          {
            cate: '最佳团队',
            group: '',
            name: '',
            score: ''
          },
          {
            cate: '保时捷俱乐部最佳表现奖',
            group: '',
            name: '',
            score: ''
          },
          {
            cate: '净杆 <span class="fen">C</span> 组冠军',
            group: '',
            name: '',
            score: ''
          },
          {
            cate: '净杆 <span class="fen">B</span> 组冠军',
            group: '',
            name: '',
            score: ''
          },
          {
            cate: '净杆 <span class="fen">A</span> 组冠军',
            group: '',
            name: '',
            score: ''
          },
          {
            cate: '总杆季军',
            group: '',
            name: '',
            score: ''
          },
          {
            cate: '总杆亚军',
            group: '',
            name: '',
            score: ''
          },
          {
            cate: '总杆冠军',
            group: '',
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

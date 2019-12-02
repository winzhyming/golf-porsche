<template>
  <div class="ei-main">
    <div class="group-info-table">
      <h1 class="git-tit">
        比赛结果信息 <img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic"/>
      </h1>
      <table class="gi-table grade">
        <thead>
          <th>奖项</th>
          <th>组别</th>
          <th>姓名</th>
          <th>所属经销商</th>
        </thead>
        <tbody>
          <tr v-for="(da, index) in list" :key="index">
            <td v-html="da.cate"></td>
            <!-- <td>{{ da.name }}</td>
            <td>{{ da.ys}}</td>
            <td>{{ da.domain }}</td> -->
            <td>{{ da.group }}</td>
            <td>{{ da.name }}</td>
            <td>{{ da.score }}</td>
          </tr>
          <tr>
            <td>{{ team.cate }}</td>
            <td colspan="2">{{ team.name }}</td>
            <td>{{ team.score }}</td>
          </tr>
          <tr>
            <td colspan="2">{{ best.cate }}</td>
            <td>{{ best.name }}</td>
            <td>{{ best.score }}</td>
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
            cate: '女子最远距离奖',
            group: '女子组',
            name: '武晓庆',
            score: '215 码',
            domain: '深圳南山 &  宝安保时捷中心'
          },
          {
            cate: '女子距线最近奖',
            group: '女子组',
            name: '李淑萍',
            score: '2 码',
            domain: '佛山顺德保时捷中心'
          },
          {
            cate: '男子最远距离奖',
            group: '男子组',
            name: '赵光明',
            score: '300 码',
            domain: '太原保时捷中心'
          },
          {
            cate: '男子距线最近奖',
            group: '男子组',
            name: '沈亮',
            score: '0.1 码',
            domain: '上海闵行保时捷中心'
          },

          {
            cate: '距洞最近奖',
            group: '',
            name: '廖志辉',
            score: '5 码',
            domain: '佛山顺德保时捷中心'
          },
          {
            cate: '两杆最近洞奖',
            group: '',
            name: '谭键明',
            score: '16 码',
            domain: '佛山南海保时捷中心'
          },

          {
            cate: '净杆 <span class="fen">C</span> 组冠军',
            group: '',
            name: '杨关进',
            score: '27 分',
            domain: '惠州保时捷中心'
          },
          {
            cate: '净杆 <span class="fen">B</span> 组冠军   ',
            group: '',
            name: '曾子鹏',
            score: '35 分',
            domain: '佛山顺德保时捷中心'
          },
          {
            cate: '净杆 <span class="fen">A</span> 组冠军',
            group: '',
            name: '孙开',
            score: '36 分',
            domain: '北京金港保时捷中心'
          },

          {
            cate: '总杆季军',
            group: '',
            name: '谭键明',
            score: '83 杆',
            domain: '佛山南海保时捷中心'
          },
          {
            cate: '总杆亚军',
            group: '',
            name: '任泳潮',
            score: '81（后九 42 杆）',
            domain: '深圳龙岗 & 福田保时捷中心'
          },
          {
            cate: '总杆冠军',
            group: '',
            name: '叶伟欣',
            score: '81杆（后九 40 杆）',
            domain: '深圳龙岗 & 福田保时捷中心'
          }
        ],
        team: {
          cate: '最佳团队',
          group: '',
          name: '孙开、吴雨东、黄鹏',
          score: '68分',
          domain: '北京金港保时捷中心'
        },
        best: {
          cate: '保时捷俱乐部最佳表现奖',
          group: '',
          name: '沈亮',
          score: '6杆',
          domain: '上海闵行保时捷中心'
        }
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/event/event-result.vue
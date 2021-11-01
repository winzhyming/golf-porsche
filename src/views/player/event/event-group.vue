<template>
  <div class="ei-main">
    <div class="group-info-table" style="padding-bottom: 39vmin;">
      <h1 class="git-tit">
        分组信息 <img src="https://d.devnow.cn/golf2019/images/ic-next-red.png" class="ic"/>
      </h1>
      <table class="gi-table">
        <thead>
          <th style="text-align: center;">出发洞</th>
          <td style="text-align: center;">编号</td>
          <th style="text-align: center;">姓名</th>
          <th style="text-align: center;">性别</th>
          <th style="text-align: center;">类型</th>
        </thead>
        <tbody style="text-align: center;">
          <tr v-for="(user, index) in users" :key="index">
            <td><span>{{ user.hole }}</span></td>
            <td style="text-align: center;">{{ user.num }}</td>
            <td>{{ user.name || '' }}</td>
            <td style="text-align: center;">{{ user.sex || ' ' }}</td>
            <td>{{ user.type || ' '}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .gi-table th{font-family: simHei;}
</style>


<script>
  export default {
    data() {
      return {
        users: [
          // { hole: '1号洞', num: 3, name: '萧达', sex: 'M', type: '友谊赛'},
        ]
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/event/event-group.vue
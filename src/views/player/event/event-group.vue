<template>
  <div class="ei-main">
    <div class="group-info-table">
      <h1 class="git-tit">
        分组信息 <img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic"/>
      </h1>
      <table class="gi-table">
        <thead>
          <th width="50%">姓名 <span class="fen">Name</span></th>
          <th width="50%">出发洞 <span class="fen">Hole</span></th>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.hole }}</td>
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
          // {name: '赵野', hole: '1号洞-1'},
          // {name: '朱燕敏', hole: '1号洞-1'},
          // {name: '闫晓敬', hole: '1号洞-1'},
          
          // {name: '万伏初', hole: '1号洞-2'},
          // {name: '陈颖', hole: '1号洞-2'},
          // {name: '李云兰', hole: '1号洞-2'},
          // {name: '刘萍', hole: '1号洞-2'},
          
          // {name: '杨新宇', hole: '2号洞-1'},
          // {name: '陈高联', hole: '2号洞-1'},
          // {name: '邢伏生', hole: '2号洞-1'},
          // {name: '李红军', hole: '2号洞-1'},
          
          // {name: '刘昂', hole: '2号洞-2'},
          // {name: '顾世辉', hole: '2号洞-2'},
          // {name: '黄涛', hole: '2号洞-2'},
          // {name: '杜海涛', hole: '2号洞-2'},
          
          // {name: '施丁希', hole: '3号洞'},
          // {name: '陈冠媚', hole: '3号洞'},
          // {name: '丘群英', hole: '3号洞'},
          
          // {name: '江朵', hole: '4号洞-1'},
          // {name: '李淑', hole: '4号洞-1'},
          // {name: '张亚伶', hole: '4号洞-1'},
          // {name: '单继红', hole: '4号洞-1'},
          
          // {name: '宁娟', hole: '4号洞-2'},
          // {name: '李天航', hole: '4号洞-2'},
          // {name: '刘裕环', hole: '4号洞-2'},
          // {name: '胡冉希', hole: '4号洞-2'},
          
          // {name: '林辉', hole: '5号洞'},
          // {name: '李焕记', hole: '5号洞'},
          // {name: '姜爱红', hole: '5号洞'},
          // {name: '姜柳', hole: '5号洞'},
          
          // {name: '朱立芳', hole: '6号洞-1'},
          // {name: '陈敏', hole: '6号洞-1'},
          // {name: '杨戈', hole: '6号洞-1'},
          // {name: '杨鑫', hole: '6号洞-1'},
          
          // {name: '邹育宏', hole: '6号洞-2'},
          // {name: '王昌辉', hole: '6号洞-2'},
          // {name: '袁万骅', hole: '6号洞-2'},
          // {name: '陈贵才', hole: '6号洞-2'},
          
          // {name: '李玉林', hole: '7号洞-1'},
          // {name: '杨涛', hole: '7号洞-1'},
          // {name: '林辉塔', hole: '7号洞-1'},
          // {name: '邵立青', hole: '7号洞-1'},
          
          // {name: '周霓', hole: '7号洞-2'},
          // {name: '廖永坤', hole: '7号洞-2'},
          // {name: '郭金龙', hole: '7号洞-2'},
          // {name: '蔡辉', hole: '7号洞-2'},
          
          // {name: '许敬', hole: '8号洞'},
          // {name: '薛延军', hole: '8号洞'},
          // {name: '吕世双', hole: '8号洞'},
          // {name: '彭翔', hole: '8号洞'},
          
          // {name: '简次强', hole: '9号洞-2'},
          // {name: '张克坚', hole: '9号洞-2'},
          // {name: '刘晓峰', hole: '9号洞-2'},
          // {name: '何亚衡', hole: '9号洞-2'},
          
          // {name: '高令奇', hole: '9号洞-1'},
          // {name: '金光', hole: '9号洞-1'},
          // {name: '章圣仙', hole: '9号洞-1'},
          // {name: '鲁尧', hole: '9号洞-1'}
        ]
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/event/event-group.vue
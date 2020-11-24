<template>
  <div class="ei-main">
    <p class="title" style="position: absolute; top: -3.75vmin; left: 3.75vmin; font-size: 3.75vmin; color: #000;">预约活动</p>
    <section class="ei-btns gais-btns">
      <ul>
        <li v-for="(link, index) in links" :key="index">
          <router-link :to="{'name': link.router }" class="clearfix" v-if="link.status == '0'">
            {{ link.name }}<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
          <a href="javascript:;" class="clearfix disabled" v-else style="color: #aaa;">
            {{ link.name }}<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </a>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.tebie'}" class="clearfix">
            特别预约活动<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
      </ul>
      
      <!-- <div class="tips-bot" style="text-align: justify;">
        <p>1. 如以上四项活动您都不想选择，保时捷中国车主俱乐部也可为您安排高尔夫活动，请于 11 月 30 日 18:00 前告知会务组（需自备球包）</p>
        <p>2. 保时捷中国车主俱乐部还在 12 月 5 日当天安排了瑜伽活动，地点位于酒店一楼的泳池边。时间段：07:00 - 08:00/10:00 - 11:00/16:00 - 17:00，每个时间段至多容纳 6 位客人同时进行瑜伽，如有需求请尽快告知会务组预约，先到先得。（需自备瑜伽服）</p>
      </div> -->
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          { type: '1', name: '三亚角游艇海钓', router: 'subscribe.water', num: 0, status: '0' },
          { type: '2', name: '亚特兰蒂斯水族馆&CDF免税店', router: 'subscribe.yanuoda', num: 0, status: '0' },
          { type: '3', name: '呀诺达雨林文化旅游区', router: 'subscribe.pinjiu', num: 0, status: '0' },
          { type: '4', name: '亚特兰蒂斯水世界', router: 'subscribe.yoga', num: 0, status: '0' }
        ]
      }
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-jiabinyuyue.jpg';
      this.checkStatus()
    },
    methods: {
      checkStatus: function() {
        $.ajax({
          type: "GET",
          // url: "http://travelclub.devnow.cn/2020/data/checkStatus.php",
          url: "/2020/data/checkStatus.php",
          datatype: 'jsonp',
          jsonp: 'jsonp_callback',
          success: (data) => {
            console.log(JSON.parse(data))
            let datas = JSON.parse(data || '[]'), index = 0
            datas.length && datas.forEach((cou) => {
              this.links[index].num = cou.num
              this.links[index].status = cou.status
              index++
            })
          },
          error: (_error) => {
            this.$root.pop(_error);
//          this.$router.push({'name': 'subscribe.result', 'params': {'type': this.activity_select.val}});  
          }         
        });
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/guest/subscribe/sub-menu.vue
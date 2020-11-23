<template>
  <div class="ei-main">
    <p class="title" style="position: absolute; top: -3.75vmin; left: 3.75vmin; font-size: 3.75vmin; color: #000;">预约活动</p>
    <section class="ei-btns gais-btns">
      <ul>
        <li>
          <router-link :to="{'name': 'subscribe.water'}" class="clearfix">
            三亚角游艇海钓<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.yanuoda'}" class="clearfix">
            亚特兰蒂斯水族馆&CDF免税店<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.pinjiu'}" class="clearfix">
            呀诺达雨林文化旅游区<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'subscribe.yoga'}" class="clearfix">
            亚特兰蒂斯水世界<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr"/>
          </router-link>
        </li>
      </ul>
      
      <div class="tips-bot" style="text-align: justify;">
        <p>1. 如以上四项活动您都不想选择，保时捷中国车主俱乐部也可为您安排高尔夫活动，请于 11 月 30 日 18:00 前告知会务组（需自备球包）</p>
        <p>2. 保时捷中国车主俱乐部还在 12 月 5 日当天安排了瑜伽活动，地点位于酒店一楼的泳池边。时间段：07:00 - 08:00/10:00 - 11:00/16:00 - 17:00，每个时间段至多容纳 6 位客人同时进行瑜伽，如有需求请尽快告知会务组预约，先到先得。（需自备瑜伽服）</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-jiabinyuyue.jpg';
      this.checkStatus()
    },
    methods: {
      checkStatus: function() {
        $.ajax({
          type: "GET",
          url: "http://travelclub.devnow.cn/2020/data/checkStatus.php",
          // url: "/data/checkStatus.php",
          datatype: 'jsonp',
          jsonp: 'jsonp_callback',
          success: (data) => {
            console.log(data)
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
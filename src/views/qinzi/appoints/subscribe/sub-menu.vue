<template>
  <div class="ei-main">
    <!-- <p class="title" style="position: absolute; top: -3.75vmin; left: 3.75vmin; font-size: 3.75vmin; color: #000;">预约活动</p> -->
    <section class="ei-btns gais-btns">
      <ul>
        <li v-for="(link, index) in links" :key="index" :class="link.type">
          <router-link :to="{'name': link.router }" class="clearfix" v-if="link.status == '0' && link.type !=='title'">
            {{ link.name }}<img src="/static/images/2020/ic-next-darkblue.png" class="ic fr"/>
          </router-link>
          <a href="javascript:;" class="clearfix disabled" v-if="link.status !== '0' && link.type !=='title'" style="color: #aaa;">
            {{ link.name }}<img src="/static/images/2020/ic-next-darkblue.png" class="ic fr"/>
          </a>
          <p v-if="link.type == 'title'">{{ link.name }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          { type: 'title', name: '12 月 8 日 少年英雄组'},
          { type: '4', name: '上午 儿童高尔夫训练课程', router: 'huwai.appoints.subs.act1', num: 0, status: '0' },
          { type: '5', name: '下午 儿童游乐体验项目', router: 'huwai.appoints.subs.act2', num: 0, status: '0' },
          { type: 'title', name: '12 月 8 日 少年竞速组'},
          { type: '6', name: '上午 儿童游乐体验项目', router: 'huwai.appoints.subs.act3', num: 0, status: '0' },
          { type: '7', name: '下午 儿童高尔夫训练课程', router: 'huwai.appoints.subs.act4', num: 0, status: '0' },
          // { type: '4', name: '亚特兰蒂斯水世界', router: 'subscribe.yoga', num: 0, status: '0' }
        ]
      }
    },
    mounted() {
      this.$parent.img_path = 'https://d.devnow.cn/travelclub2019/images/2019/top-jiabinyuyue.jpg';
      this.$parent.title = '活动预约'
      this.checkStatus()
    },
    methods: {
      checkStatus: function() {
        $.ajax({
          type: "GET",
          // url: "http://travelclub.devnow.cn/2021/data/checkStatus.php",
          url: "/2021/data/checkStatus.php",
          datatype: 'jsonp',
          jsonp: 'jsonp_callback',
          success: (data) => {
            console.log(JSON.parse(data))
            let datas = JSON.parse(data || '[]'), index = 0
            if (datas.length) for(var i = 3; i < 7; i++) {
              this.links[index - 3].num = cou.num
              this.links[index - 3].status = cou.status
            }
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
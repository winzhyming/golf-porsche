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
          { hole: '1号洞', num: 3, name: '萧达', sex: 'M', type: '友谊赛'},
          { hole: '1号洞', num: 2, name: '杨建德', sex: 'M', type: '友谊赛'},
          { hole: '1号洞', num: 4, name: '徐志刚', sex: 'M', type: '友谊赛'},
          { hole: '1号洞', num: 1, name: '张维维', sex: 'F', type: '友谊赛'},

          { hole: '2号洞', num: 5, name: '叶涛', sex: 'M', type: '友谊赛'},
          { hole: '2号洞', num: 6, name: '张穗明', sex: 'M', type: '友谊赛'},
          { hole: '2号洞', num: 7, name: '张恽', sex: 'M', type: '友谊赛'},
          
          { hole: '3号洞', num: 8, name: '李缘', sex: 'M', type: '友谊赛'},
          { hole: '3号洞', num: 9, name: '沈蓓', sex: 'F', type: '友谊赛'},
          { hole: '3号洞', num: 10, name: '周才宜', sex: 'M', type: '友谊赛'},

          { hole: '4号洞', num: 11, name: '张嘉盈', sex: 'F', type: '友谊赛'},
          { hole: '4号洞', num: 12, name: '邵莹莹', sex: 'F', type: '友谊赛'},
          { hole: '4号洞', num: 13, name: '杨小芳', sex: 'F', type: '友谊赛'},

          { hole: '5号洞', num: 18, name: '崔滢', sex: 'M', type: '总决赛'},
          { hole: '5号洞', num: 19, name: '沈宇光', sex: 'M', type: '总决赛'},
          { hole: '5号洞', num: 20, name: '刘泽民', sex: 'M', type: '总决赛'},
          { hole: '5号洞', num: 21, name: '周治河', sex: 'M', type: '总决赛'},

          { hole: '6号洞', num: 22, name: '曹炜阳', sex: 'M', type: '总决赛'},
          { hole: '6号洞', num: 23, name: '卢伟明', sex: 'M', type: '总决赛'},
          { hole: '6号洞', num: 24, name: '胡利康', sex: 'M', type: '总决赛'},
          { hole: '6号洞', num: 25, name: '陈安东', sex: 'M', type: '总决赛'},

          { hole: '7号洞', num: 26, name: '黄浦生', sex: 'M', type: '总决赛'},
          { hole: '7号洞', num: 27, name: '韩镇权', sex: 'M', type: '总决赛'},
          { hole: '7号洞', num: 28, name: '佟林', sex: 'M', type: '总决赛'},
          { hole: '7号洞', num: 29, name: '王勇', sex: 'M', type: '总决赛'},

          { hole: '8号洞', num: 30, name: '吴恒锋', sex: 'M', type: '总决赛'},
          { hole: '8号洞', num: 31, name: '石方勇', sex: 'M', type: '总决赛'},
          { hole: '8号洞', num: 32, name: '曾远灵', sex: 'M', type: '总决赛'},
          { hole: '8号洞', num: 33, name: '张以军', sex: 'M', type: '总决赛'},

          { hole: '9号洞', num: 34, name: '白淙元', sex: 'M', type: '总决赛'},
          { hole: '9号洞', num: 35, name: '崔立新', sex: 'M', type: '总决赛'},
          { hole: '9号洞', num: 36, name: '龚水清', sex: 'M', type: '总决赛'},
          { hole: '9号洞', num: 37, name: '阮旭升', sex: 'M', type: '总决赛'},

          { hole: '10号洞', num: 38, name: '钟伟峰', sex: 'M', type: '总决赛'},
          { hole: '10号洞', num: 39, name: '付东', sex: 'M', type: '总决赛'},
          { hole: '10号洞', num: 40, name: '郑会平', sex: 'M', type: '总决赛'},
          { hole: '10号洞', num: 41, name: '钱小乐', sex: 'M', type: '总决赛'},

          { hole: '11号洞', num: 42, name: '庞进杰', sex: 'M', type: '总决赛'},
          { hole: '11号洞', num: 43, name: '顾红健', sex: 'M', type: '总决赛'},
          { hole: '11号洞', num: 44, name: '沈亚超', sex: 'M', type: '总决赛'},
          { hole: '11号洞', num: 45, name: '宁富强', sex: 'M', type: '总决赛'},

          { hole: '12号洞', num: 46, name: '张科', sex: 'M', type: '总决赛'},
          { hole: '12号洞', num: 47, name: '秦巍华', sex: 'M', type: '总决赛'},
          { hole: '12号洞', num: 48, name: '马明涛', sex: 'M', type: '总决赛'},
          { hole: '12号洞', num: 49, name: '薛浩', sex: 'M', type: '总决赛'},

          { hole: '13号洞', num: 50, name: '梁森祥', sex: 'M', type: '总决赛'},
          { hole: '13号洞', num: 51, name: '何观桂', sex: 'M', type: '总决赛'},
          { hole: '13号洞', num: 52, name: '董灿辉', sex: 'M', type: '总决赛'},
          { hole: '13号洞', num: 53, name: '鲍建生', sex: 'M', type: '总决赛'},

          { hole: '14号洞', num: 54, name: '杨松', sex: 'F', type: '总决赛'},
          { hole: '14号洞', num: 55, name: '夏丹女', sex: 'F', type: '总决赛'},
          { hole: '14号洞', num: 56, name: '赵琪', sex: 'F', type: '总决赛'},
          { hole: '14号洞', num: 57, name: '何琼芬', sex: 'F', type: '总决赛'},

          { hole: '15号洞', num: 58, name: '谢楚慧', sex: 'F', type: '总决赛'},
          { hole: '15号洞', num: 59, name: '姜粉善', sex: 'F', type: '总决赛'},
          { hole: '15号洞', num: 61, name: '刘卫兵', sex: 'F', type: '总决赛'},
          
          { hole: '16号洞', num: 62, name: '罗银好', sex: 'F', type: '总决赛'},
          { hole: '16号洞', num: 63, name: '王雨鑫', sex: 'F', type: '总决赛'},
          { hole: '16号洞', num: 64, name: '李燕玲', sex: 'F', type: '总决赛'},
          { hole: '16号洞', num: 65, name: '周妮', sex: 'F', type: '总决赛'},

          { hole: '17号洞', num: 66, name: '于倩', sex: 'F', type: '总决赛'},
          { hole: '17号洞', num: 67, name: '张文', sex: 'F', type: '总决赛'},
          { hole: '17号洞', num: 68, name: '戴娟', sex: 'F', type: '总决赛'},
          { hole: '17号洞', num: 69, name: '杨小环', sex: 'F', type: '总决赛'},

          { hole: '18号洞', num: 14, name: '张雪松', sex: 'M', type: '友谊赛'},
          { hole: '18号洞', num: 15, name: '陆庆宜', sex: 'M', type: '友谊赛'},
          { hole: '18号洞', num: 16, name: '董凤南', sex: 'M', type: '友谊赛'},
          { hole: '18号洞', num: 17, name: '左琳', sex: 'M', type: '友谊赛'},
          
           {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
          // {"hole":"1号洞-1","num":"1","jxs":"PCN","name_ch":"萧达","name_en":"David Xiao","sex":"男子","type":"友谊赛"},
          // {"hole":"1号洞-1","num":"2","jxs":"雄峰集团","name_ch":"徐志刚","name_en":"Tiger Xu","sex":"男子","type":"友谊赛"},
          // {"hole":"1号洞-1","num":"3","jxs":"TaylorMade","name_ch":"杨建德","name_en":"Ken Yeo","sex":"男子","type":"友谊赛"},
          // {"hole":"1号洞-1","num":"4","jxs":"演员","name_ch":"","name_en":"David Edwards","sex":"男子","type":"不评奖"},
          // {"hole":"1号洞-2","num":"69","jxs":"TaylorMade","name_ch":"李缘","name_en":"Peter Li","sex":"男子","type":"友谊赛"},
          // {"hole":"1号洞-2","num":"7","jxs":"Bose","name_ch":"马莉","name_en":"Mary Ma","sex":"女子","type":"友谊赛"},
          // {"hole":"1号洞-2","num":"8","jxs":"富甲天下","name_ch":"宋也滔","name_en":"Song yetao","sex":"女子","type":"友谊赛"},
          // {"hole":"1号洞-2","num":"68","jxs":"捷成集团","name_ch":"葛凌","name_en":"嘉宾","sex":"男子","type":"友谊赛"},
          // {"hole":"2号洞","num":"9","jxs":"成都锦江保时捷中心","name_ch":"曾德春","name_en":"84","sex":"男子","type":"总决赛"},
          // {"hole":"2号洞","num":"10","jxs":"佛山顺德保时捷中心","name_ch":"廖志辉","name_en":"82","sex":"男子","type":"总决赛"},
          // {"hole":"2号洞","num":"11","jxs":"太原保时捷中心","name_ch":"赵光明","name_en":"84","sex":"男子","type":"总决赛"},
          // {"hole":"2号洞","num":"12","jxs":"东莞南城保时捷中心","name_ch":"周嘉伟","name_en":"82","sex":"男子","type":"总决赛"},
          // {"hole":"3号洞","num":"13","jxs":"上海浦西保时捷中心","name_ch":"崔兴虎","name_en":"80","sex":"男子","type":"总决赛"},
          // {"hole":"3号洞","num":"14","jxs":"佛山南海保时捷中心","name_ch":"谭键明","name_en":"82","sex":"男子","type":"总决赛"},
          // {"hole":"3号洞","num":"15","jxs":"广州番禺保时捷中心","name_ch":"张庆贤","name_en":"79","sex":"男子","type":"总决赛"},
          // {"hole":"3号洞","num":"16","jxs":"嘉兴保时捷中心","name_ch":"张土荣","name_en":"80","sex":"男子","type":"总决赛"},
          // {"hole":"4号洞","num":"17","jxs":"上海外高桥保时捷中心","name_ch":"章二民","name_en":"81","sex":"男子","type":"总决赛"},
          // {"hole":"4号洞","num":"18","jxs":"佛山顺德保时捷中心","name_ch":"曾子鹏","name_en":"80","sex":"男子","type":"总决赛"},
          // {"hole":"4号洞","num":"19","jxs":"深圳南山 &  宝安保时捷中心","name_ch":"武晓庆","name_en":"78","sex":"女子","type":"总决赛"},
          // {"hole":"4号洞","num":"20","jxs":"深圳南山 &  宝安保时捷中心","name_ch":"肖燕玲","name_en":"88","sex":"女子","type":"总决赛"},
          // {"hole":"5号洞","num":"21","jxs":"广州天河保时捷中心","name_ch":"江绍镜","name_en":"80","sex":"男子","type":"总决赛"},
          // {"hole":"5号洞","num":"22","jxs":"广州番禺保时捷中心","name_ch":"梁崇庆","name_en":"79","sex":"男子","type":"总决赛"},
          // {"hole":"5号洞","num":"23","jxs":"北京金港保时捷中心","name_ch":"孙开","name_en":"78","sex":"男子","type":"总决赛"},
          // {"hole":"5号洞","num":"24","jxs":"上海浦东保时捷中心","name_ch":"王森","name_en":"77","sex":"男子","type":"总决赛"},
          // {"hole":"6号洞","num":"25","jxs":"东莞寮步保时捷中心","name_ch":"邓永斌","name_en":"76","sex":"男子","type":"总决赛"},
          // {"hole":"6号洞","num":"26","jxs":"金华保时捷中心","name_ch":"潘炜","name_en":"75","sex":"男子","type":"总决赛"},
          // {"hole":"6号洞","num":"27","jxs":"上海外高桥保时捷中心","name_ch":"孙延友","name_en":"73","sex":"男子","type":"总决赛"},
          // {"hole":"6号洞","num":"28","jxs":"深圳龙岗 & 福田保时捷中心","name_ch":"叶伟欣","name_en":"75","sex":"男子","type":"总决赛"},
          // {"hole":"7号洞","num":"29","jxs":"上海闵行保时捷中心","name_ch":"方柏翔","name_en":"87","sex":"男子","type":"总决赛"},
          // {"hole":"7号洞","num":"30","jxs":"合肥包河保时捷中心","name_ch":"刘振","name_en":"89","sex":"男子","type":"总决赛"},
          // {"hole":"7号洞","num":"31","jxs":"广州天河保时捷中心","name_ch":"石朝晖","name_en":"91","sex":"男子","type":"总决赛"},
          // {"hole":"7号洞","num":"32","jxs":"上海浦东保时捷中心","name_ch":"朱国林","name_en":"88","sex":"男子","type":"总决赛"},
          // {"hole":"8号洞","num":"33","jxs":"上海浦西保时捷中心","name_ch":"顾军","name_en":"87","sex":"男子","type":"总决赛"},
          // {"hole":"8号洞","num":"34","jxs":"郑州郑开保时捷中心","name_ch":"王堃","name_en":"87","sex":"男子","type":"总决赛"},
          // {"hole":"8号洞","num":"35","jxs":"东莞南城保时捷中心","name_ch":"杨张平","name_en":"87","sex":"男子","type":"总决赛"},
          // {"hole":"8号洞","num":"36","jxs":"嘉兴保时捷中心","name_ch":"朱良华","name_en":"86","sex":"男子","type":"总决赛"},
          // {"hole":"9号洞","num":"37","jxs":"合肥包河保时捷中心","name_ch":"杜雨南","name_en":"85","sex":"男子","type":"总决赛"},
          // {"hole":"9号洞","num":"38","jxs":"北京金港保时捷中心","name_ch":"黄鹏","name_en":"86","sex":"男子","type":"总决赛"},
          // {"hole":"9号洞","num":"39","jxs":"东莞寮步保时捷中心","name_ch":"任今南","name_en":"85","sex":"男子","type":"总决赛"},
          // {"hole":"9号洞","num":"40","jxs":"深圳龙岗 & 福田保时捷中心","name_ch":"任泳潮","name_en":"86","sex":"男子","type":"总决赛"},
          // {"hole":"10号洞","num":"41","jxs":"广州天河保时捷中心","name_ch":"关伟民","name_en":"97","sex":"男子","type":"总决赛"},
          // {"hole":"10号洞","num":"42","jxs":"深圳龙岗 & 福田保时捷中心","name_ch":"宁权","name_en":"97","sex":"男子","type":"总决赛"},
          // {"hole":"10号洞","num":"43","jxs":"东莞南城保时捷中心","name_ch":"彭钰彬","name_en":"97","sex":"男子","type":"总决赛"},
          // {"hole":"10号洞","num":"44","jxs":"惠州保时捷中心","name_ch":"杨家雄","name_en":"92","sex":"男子","type":"总决赛"},
          // {"hole":"11号洞","num":"45","jxs":"北京金港保时捷中心","name_ch":"吴雨东","name_en":"98","sex":"男子","type":"总决赛"},
          // {"hole":"11号洞","num":"46","jxs":"佛山南海保时捷中心","name_ch":"曾德棠","name_en":"94","sex":"男子","type":"总决赛"},
          // {"hole":"11号洞","num":"47","jxs":"宁波保时捷中心","name_ch":"方伟","name_en":"91","sex":"男子","type":"总决赛"},
          // {"hole":"11号洞","num":"48","jxs":"惠州保时捷中心","name_ch":"杨关进","name_en":"91","sex":"男子","type":"总决赛"},
          // {"hole":"12号洞","num":"49","jxs":"广州番禺保时捷中心","name_ch":"萧军","name_en":"100","sex":"男子","type":"总决赛"},
          // {"hole":"12号洞","num":"50","jxs":"惠州保时捷中心","name_ch":"张伟零","name_en":"100","sex":"男子","type":"总决赛"},
          // {"hole":"12号洞","num":"51","jxs":"深圳南山 &  宝安保时捷中心","name_ch":"Zhao Zhenhao","name_en":"109","sex":"男子","type":"总决赛"},
          // {"hole":"13号洞","num":"52","jxs":"佛山南海保时捷中心","name_ch":"丁斌","name_en":"110","sex":"男子","type":"总决赛"},
          // {"hole":"13号洞","num":"53","jxs":"慈溪保时捷中心","name_ch":"施永庆","name_en":"103","sex":"男子","type":"总决赛"},
          // {"hole":"13号洞","num":"54","jxs":"上海外高桥保时捷中心","name_ch":"施智伟","name_en":"101","sex":"男子","type":"总决赛"},
          // {"hole":"14号洞","num":"55","jxs":"苏州相城保时捷中心","name_ch":"向延海","name_en":"107","sex":"男子","type":"总决赛"},
          // {"hole":"14号洞","num":"56","jxs":"东莞寮步保时捷中心","name_ch":"廖爱国","name_en":"101","sex":"男子","type":"总决赛"},
          // {"hole":"14号洞","num":"57","jxs":"上海浦东保时捷中心","name_ch":"倪聪","name_en":"102","sex":"男子","type":"总决赛"},
          // {"hole":"14号洞","num":"58","jxs":"上海闵行保时捷中心","name_ch":"沈亮","name_en":"102","sex":"男子","type":"总决赛"},
          // {"hole":"15号洞","num":"59","jxs":"佛山顺德保时捷中心","name_ch":"李淑萍","name_en":"106","sex":"女子","type":"总决赛"},
          // {"hole":"15号洞","num":"60","jxs":"郑州郑开保时捷中心","name_ch":"王君丽","name_en":"111","sex":"女子","type":"总决赛"},
          // {"hole":"15号洞","num":"61","jxs":"上海浦西保时捷中心","name_ch":"钟蔚","name_en":"110","sex":"女子","type":"总决赛"},
          // {"hole":"16号洞","num":"62","jxs":"直营","name_ch":"左琳","name_en":"","sex":"男子","type":"友谊赛"},
          // {"hole":"16号洞","num":"63","jxs":"雄峰集团","name_ch":"关治平","name_en":"Edward Kwan","sex":"男子","type":"友谊赛"},
          // {"hole":"16号洞","num":"64","jxs":"雄峰集团","name_ch":"陆庆宜","name_en":"Wilson Lu","sex":"男子","type":"友谊赛"},
          // {"hole":"16号洞","num":"65","jxs":"汽车杂志","name_ch":"陈政义","name_en":"Chen zhengyi","sex":"男子","type":"友谊赛"},
          // {"hole":"17号洞","num":"66","jxs":"辽沈晚报","name_ch":"武乃文","name_en":"Wu naiwen","sex":"男子","type":"友谊赛"},
          // {"hole":"17号洞","num":"70","jxs":"新闻晨报","name_ch":"郑晓星","name_en":"Zheng xiaoxing","sex":"男子","type":"友谊赛"},
          // {"hole":"17号洞","num":"71","jxs":"高尔夫峰荟","name_ch":"江明","name_en":"Jiang ming","sex":"男子","type":"友谊赛"},
          // {"hole":"17号洞","num":"72","jxs":"高尔夫旅行","name_ch":"盛艳","name_en":"Sheng yan","sex":"男子","type":"友谊赛"},
          // {"hole":"18号洞","num":"5","jxs":"正通集团","name_ch":"尹涛","name_en":"Terry Wan","sex":"男子","type":"友谊赛"},
          // {"hole":"18号洞","num":"6","jxs":"广东庆丰集团","name_ch":"张穗明","name_en":"Shuiming Zhang","sex":"男子","type":"友谊赛"},
          // {"hole":"18号洞","num":"67","jxs":"正通集团","name_ch":"邓远涛","name_en":"嘉宾","sex":"男子","type":"友谊赛"},
        ]
      }
    }
  }
</script>


// WEBPACK FOOTER //
// src/views/player/event/event-group.vue
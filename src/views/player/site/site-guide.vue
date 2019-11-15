<template>
  <div class="ei-main">
    <div class="group-info-table">
      <h1 class="git-tit no-bb">
        球场介绍 <img src="/static/images/ic-next-red.png" class="ic"/>
      </h1>
      <section class="ds-list">
        <ul>
          <li>
            <p>
              鉴湖蓝湾高尔夫球会<br><br>
              鉴湖蓝湾位于海南三亚清水湾, 清水湾海岸线长达12公里, 海水可见度达11米, 这里波平浪缓, 沙滩松软细白, 是不可多得的四季天然浴场。<br><br>
鉴湖蓝湾高尔夫球场是中国排名最高的高尔夫俱乐部之一。由著名设计马克 • 霍林格担纲设计, 占地 1,300 亩, 球道长度 7, 555 码, 标准杆 72 杆。穿梭于由高大树群、茂密丛林以及大片的湖泊湿地等组成的壮阔景观当中。<br><br>
鉴湖蓝湾高尔夫球场是在清水湾畔的滨海沙滩上, 球场保留自然沙丘的动感地势, 遍植三角梅、爱情草、巧妙将林克斯球场元素与热带海滨景观融为一体。<br><br>
鉴湖蓝湾高尔夫球场是一个低碳、生态、环保型的球场。现在剪下来的每一片草屑、树上掉下来的树叶、树枝、将全部返回去做肥料。一系列的低碳、环保、循环利用的做法都融合进了该球场的营造过程中, 而后就会形成一种低碳文化。<br><br>
            </p>
          </li>
        </ul>
      </section>
    </div>
    <div class="site-image">
      <img :src="img" v-for="(img, index) in imgs" :key="index" alt="">
      <br><br>
    </div>
  </div>
</template>

<style scoped>
  .ds-list ul li p img{max-width: 100%;}
  .site-image {padding: 10px; text-align: center;}
  .site-image img{max-width: 100%; margin-bottom: 2vmin;}
</style>


<script>
  export default {
    data() {
      return {
        imgs: []
      }
    },
    created() {
      for(let i = 1; i < 19; i++) {
        if(i < 10) i = '0' + i
        this.imgs.push('/static/images/guide/site' + i + '.jpg')
      }
    }
  }
</script>



// WEBPACK FOOTER //
// src/views/player/site/site-guide.vue
<template>
  <div id="index-view" style="height: 100vh;">
  <!-- <div id="index-view" class="bg-attach-ment" style="background: url(/static/images/2020/dt2020.png) bottom center no-repeat; background-size: 100% auto; background-color: #070304;"> -->
  <!-- <div id="index-view" style="background: url(/static/images/2020/dt2020.png) bottom center norepeat;"> -->
    <div class="body-index pr" style="padding-bottom: 39vmin;">
      <section class="bi-tit fen-b">
        <img class="img-logo" src="/static/images/2019/logo.png" alt="Porsche">
        <img class="img-word" src="/static/images/2021/landing-title.png" alt="2021 保时捷中国车主俱乐部年度晚宴 2021 Porsche Club China Annual Gala">
      </section>
      <section class="bi-btns">
        <ul>
          <li>
            <router-link :to="{'name': 'huwai.acts'}" class="btn-index">活动详情</router-link>
          </li>
          <li>
            <router-link :to="{'name': 'huwai.appoints'}" class="btn-index">活动简介</router-link>
          </li>
          <li><a href="javascript:;" @click="goOtherMini()" class="btn-index">影像集锦</a></li>
        </ul>
      </section>
    </div>
    <img src="/static/images/2021/bot2021.jpg" alt="" class="img-bot" style="bottom: 0%;">

    <!-- 协议弹框 -->
    <div class="xieyi-dimmer" v-if="!isAgree">
      <div class="xd-box">
        <div class="content">
          <h5>肖像使用同意函</h5>
          <pre>

本人同意参加保时捷（中国）汽车销售有限公司组织的 2021 保时捷中国车主俱乐部年度晚宴活动，并同意参与活动期间的视觉拍摄活动，活动地点为：中国海南万宁，活动期间为：2021 年 12 月 5 日 – 2021 年 12 月 7 日。

本人同意保时捷（中国）汽车销售有限公司及其关联公司（以下统称为“保时捷”）使用和复制在活动2021保时捷中国车主俱乐部年度晚宴期间生成的所有图像、照片、文字、音视频和其他资料（以下称“影音资料”），包括但不限于本人参与保时捷相关活动时的图像、照片、声音、影像、图片说明、报告和文章。本人同意该等使用和复制可以用于推广或其他宣传目的，包括将本人的影音资料用于市场营销资料、印刷广告、媒体资料、商业广告、推广视频、电视节目、网络传播（包括现场直播），以及其他任何推广或信息材料中，并于保时捷网站、移动应用程序和社交媒体平台（包括但不限于微信公众号（WeChat）及微信小程序或其他衍生或附属程序）公开发布。

本人同意保时捷对由其代表所拍摄的本人的拍摄资料享有独家所有权并有权在本同意函的授权范围内转授权第三方进行同等使用。本人不对该等资料享有除人格权外的其它法律权利。本人不会以任何形式就保时捷对本同意函中所指的图片和其他资料的合法使用追究法律责任。本人同意本人的名字及由本人提供给保时捷的其他个人信息可以和本人的资料一同显示。

本人同意保时捷可以根据适用的法律法规及本同意函所述目的对所有资料及由本人向其提供的任何个人信息进行保存、使用或加工处理，包括对本人的影音资料进行裁剪、更改或修饰，并将其与其他图像、文本、音频和图形进行组合。

本人了解，除非与保时捷在合同中事先约定，本人不会因本人的影音资料被使用而得到任何金钱或非金钱的补偿。同时，本人在同意函中的授权和同意不受任何时间、地域或形式的限制。
          </pre>
        </div>
        <a @click="setAgree" href="javascript:;" class="btn-gree">我同意</a>
      </div>
    </div>

    <!-- 合算检测弹框 -->
    <!-- <div class="xieyi-dimmer" v-if="!hsAgree && isAgree">
      <div class="xd-box">
        <div class="content">
          <pre>
因政府相关疫情防控措施更新，为严守防疫，确保宾客安全，由疫情高风险及中风险地区抵店的客人，须持抵店前 7 日内有效核酸检测阴性证明；通过测温及采取个人防护措施后可正常入住酒店。

疫情低风险地区的客人抵店时需出示健康吗“绿码”，测温正常且做好个人防护后，即可入住酒店。

敬请留意以上信息会根据疫情防控政策动态调整，若政府相关部门临时增加或采取其他防控措施（如高、中风险地区客人抵琼后，需于指定地点进行二次核酸检测或隔离），则以政府相关部门规定为准。
          </pre>
        </div>
        <a @click="setHsAgree" href="javascript:;" class="btn-gree">我同意</a>
      </div>
    </div> -->
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    methods: {
      goOtherMini() {
        wx.miniProgram.navigateTo({
          url: '/pages/test/test',
  　　  })
      },
      setAgree() {
        this.$store.commit('UPDATE_AGREE', true)
      },
      setHsAgree() {
        this.$store.commit('UPDATE_HS_AGREE', true)
      }
    },
    computed:{
      ...mapState({
        isAgree: state => state.mutations.isAgree,
        hsAgree: state => state.mutations.hsAgree
      })
    },
  }
</script>

<style scoped>
.body-index .bi-btns ul li{ margin-top: 7.03125vmin; }
.body-index .bi-btns .btn-index{ padding: 0; line-height: 9.0625vmin; width: 47.5vmin; border-radius: 2.1875vmin;  border-color: #e21932; }
</style>
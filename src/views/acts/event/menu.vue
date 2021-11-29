<template>
  <div>
    <div class="ei-main" style="padding-bottom: 59.0625vmin;">
      <section class="ei-btns">
        <ul>
          <li>
            <router-link :to="{name: 'huwai.acts.event.form'}" class="clearfix">
              比赛形式<img src="/static/images/2020/ic-next-darkblue.png" class="ic fr" />
            </router-link>
          </li>
          <li>
            <router-link :to="{'name': 'huwai.acts.event.rules'}" class="clearfix">
              赛事规则<img src="/static/images/2020/ic-next-darkblue.png" class="ic fr" />
            </router-link>
          </li>
          <li>
            <router-link :to="{'name': 'huwai.acts.event.group'}" class="clearfix">
              分组信息<img src="/static/images/2020/ic-next-darkblue.png" class="ic fr" />
            </router-link>
          </li>
          <li>
            <router-link :to="{'name': 'huwai.acts.event.result'}" class="clearfix">
              比赛结果信息<img src="/static/images/2020/ic-next-darkblue.png" class="ic fr" />
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </div>


</template>

<script>
export default {
  mounted() {
    $('.img-bot').show()
  }
}
</script>

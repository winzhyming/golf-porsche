<template>
  <div class="ei-main">
    <section class="ei-btns">
      <ul>
        <li>
          <router-link :to="{name: 'event.form'}" class="clearfix">
            比赛形式<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr" />
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'event.rule'}" class="clearfix">
            赛事规则<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr" />
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'event.group'}" class="clearfix">
            分组信息<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr" />
          </router-link>
        </li>
        <li>
          <router-link :to="{'name': 'event.result'}" class="clearfix">
            比赛结果信息<img src="https://d.devnow.cn/travelclub2019/images/ic-next-red.png" class="ic fr" />
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>
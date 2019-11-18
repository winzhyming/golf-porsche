<template>
  <div class="ei-main" style="padding-bottom: 50vmin;">
    <section class="ei-btns">
      <ul>
        <li>
          <router-link :to="{'name': 'activity.buschedule'}">班车时刻<img src="/static/images/ic-next-red.png" class="ic fr" /></router-link>
        </li>
        <li>
          <router-link :to="{'name': 'activity.dressugestion'}">着装建议<img src="/static/images/ic-next-red.png" class="ic fr" /></router-link>
        </li>
        <li>
          <router-link :to="{'name': 'activity.emergcontact'}">紧急联络<img src="/static/images/ic-next-red.png" class="ic fr" /></router-link>
        </li>
        <!-- <li>
          <router-link :to="{'name': 'activity.sponsor'}">活动赞助商<img src="/static/images/ic-next-red.png" class="ic fr" /></router-link>
        </li> -->
      </ul>
    </section>
  </div>
</template>
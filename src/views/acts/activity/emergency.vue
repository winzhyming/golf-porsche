<template>
  <div class="ei-main" style="position: initial;">
    <div class="group-info-table">
      <h1 class="git-tit no-bb">
        紧急联络
        <img src="/static/images/2020/ic-next-darkblue.png" class="ic" />
      </h1>
      <section class="ds-list">
        <ul>
          <li>
            <p>活动热线</p>
            <p class="fen">
              <a href="tel:18521013809">185-2101-3809</a>
            </p>
            <p class="fen">周一至周日 09:00 - 18:00</p>
            <p class="fen">活动日期间 09:00 - 22:00</p>
          </li>
        </ul>
      </section>
    </div>


  </div>
</template>

<script>
  export default {
    mounted() {
      this.$parent.title = '紧急联络'
    } 
  }
</script>
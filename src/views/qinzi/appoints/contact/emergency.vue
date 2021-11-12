<template>
  <div class="ei-main">
    <div class="group-info-table">
      <h1 class="git-tit no-bb">
        紧急联络 <img src="/static/images/2020/ic-next-darkblue.png" class="ic"/>
      </h1>
      <section class="ds-list">
        <ul>
          <li>
            <p>紧急联络</p>
            <p class="fen"><a href="tel:13167219112">131-6721-9112</a></p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$parent.img_path = '/static/images/2021/bg-hw-jjll.jpg';
    }
  }
</script>
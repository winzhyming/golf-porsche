<template>
  <div class="test" style="padding: 10vmin;">
    <a href="javascript:;" @click="goOther">跳转</a>
  </div>
</template>

<script>
export default {
  methods: {
    goOther() {
      wx.miniProgram.navigateTo({
　　　　path: 'pages/demo/demo',
　　  })
    }
    
  }
}
</script>
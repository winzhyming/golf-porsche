<template>
  <div class="ei-main">
    <div class="map-tep" style="margin-top: 17.1875vmin;">
      <div class="dimmer-top"></div>
      <h1 class="mt-tit fen">万宁</h1>
      <div class="weather-box">
        <div id="tp-weather-widget" style="text-align: center;">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  (function(a,h,g,f,e,d,c,b){b=function(){d=h.createElement(g);c=h.getElementsByTagName(g)[0];d.src=e;d.charset="utf-8";d.async=1;c.parentNode.insertBefore(d,c)};a["SeniverseWeatherWidgetObject"]=f;a[f]||(a[f]=function(){(a[f].q=a[f].q||[]).push(arguments)});a[f].l=+new Date();if(a.attachEvent){a.attachEvent("onload",b)}else{a.addEventListener("load",b,false)}}(window,document,"script","SeniverseWeatherWidget","//cdn.sencdn.com/widget2/static/js/bundle.js?t="+parseInt((new Date().getTime() / 100000000).toString(),10)));
  
  export default {
    data() {
      return {}
    },
    mounted() {
      window.SeniverseWeatherWidget('show', {
        flavor: "slim",
        location: "W7QDBNQVFQN8",
        geolocation: false,
        language: "zh-Hans",
        unit: "c",
        theme: "auto",
        token: "173c79cc-a51c-4062-ad31-fd0be12e4ed9",
        hover: "enabled",
        container: "tp-weather-widget"
      })
    }
  }
</script>

<style scoped>
  .weather-box{text-align: center; padding-top: 10vmin;}
</style>
<template>
  <div class="ei-main">
    <div class="map-tep" style="margin-top: 17.1875vmin;">
      <div class="dimmer-top"></div>
      <h1 class="mt-tit fen">陵水</h1>
      <div class="weather-box">
        <div id="tp-weather-widget" style="text-align: center;">
          <iframe allowtransparency="true" frameborder="0" width="255" height="64" scrolling="no" src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=3&t=1&v=2&d=1&bd=0&k=&f=&ltf=009944&htf=cc0000&q=0&e=0&a=0&c=59954&w=255&h=64&align=center"></iframe>
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
        location: "W7Q1PZC6KCFW",
        geolocation: false,
        language: "zh-Hans",
        unit: "c",
        theme: "auto",
        token: "173c79cc-a51c-4062-ad31-fd0be12e4ed9",
        hover: "enabled",
        container: "tp-weather-widget"
      })
      // tpwidget("init", {
      //   "flavor": "slim",
      //   "location": "WX4FBXXFKE4F",
      //   "geolocation": "disabled",
      //   "language": "zh-chs",
      //   "unit": "c",
      //   "theme": "chameleon",
      //   "container": "tp-weather-widget",
      //   "bubble": "enabled",
      //   "alarmType": "circle",
      //   "uid": "U4CABD1B23",
      //   "hash": "da4ad2fca74fcf9c53d61d0f6b3dbaaa"
      // });
      // tpwidget("show");
    }
  }
</script>

<style scoped>
  .weather-box{text-align: center; padding-top: 10vmin;}
</style>


// WEBPACK FOOTER //
// src/views/player/forecast/forecast-weather.vue
<template>
  <div class="ei-main">
    <div class="map-tep" style="margin-top: 17.1875vmin;">
      <div class="dimmer-top"></div>
      <h1 class="mt-tit fen">陵水</h1>
      <div class="weather-box">
        <div id="tp-weather-widget"></div>
      </div>
    </div>
  </div>
</template>

<script>
  (function(T,h,i,n,k,P,a,g,e){g=function(){P=h.createElement(i);a=h.getElementsByTagName(i)[0];P.src=k;P.charset="utf-8";P.async=1;a.parentNode.insertBefore(P,a)};T["ThinkPageWeatherWidgetObject"]=n;T[n]||(T[n]=function(){(T[n].q=T[n].q||[]).push(arguments)});T[n].l=+new Date();if(T.attachEvent){T.attachEvent("onload",g)}else{T.addEventListener("load",g,false)}}(window,document,"script","tpwidget","//widget.seniverse.com/widget/chameleon.js"))
  
  export default {
    data() {
      return {}
    },
    mounted() {
      tpwidget("init", {
        "flavor": "slim",
        "location": "WX4FBXXFKE4F",
        "geolocation": "disabled",
        "language": "zh-chs",
        "unit": "c",
        "theme": "chameleon",
        "container": "tp-weather-widget",
        "bubble": "enabled",
        "alarmType": "circle",
        "uid": "U4CABD1B23",
        "hash": "da4ad2fca74fcf9c53d61d0f6b3dbaaa"
      });
      tpwidget("show");
    }
  }
</script>

<style scoped>
  .weather-box{text-align: center; padding-top: 10vmin;}
</style>


// WEBPACK FOOTER //
// src/views/player/forecast/forecast-weather.vue
<template>
  <div id="app">
    <router-view/>
    <pop_comp></pop_comp>

    <!-- 弹框 -->
    <confirm></confirm>
    
    <!-- 地图大图预览 -->
    <div id="gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <button style="display: none;" class="pswp__button pswp__button--share" title="Share"></button>
            <button style="display: none;" class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button style="display: none;" class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip">
            </div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import pop_comp from './views/public/pop'
import confirm from './views/public/confirm'

export default {
  name: 'app',
  components: {
    pop_comp,
    confirm
  }
}
</script>




// WEBPACK FOOTER //
// src/App.vue
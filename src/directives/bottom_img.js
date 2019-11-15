export default {
  inserted(el, binding) {
//  alert($('body').height());
    let _setTop = function() {
      let _top = $(window).height();
      $(el).css('top', _top - (69 * $(window).width() / 640) + 'px');
    };
    
    $(window).resize(function() {
      setTimeout(_setTop);
    });
    
    $(window).scroll(function() {
      console.log('scroll trigger');
      setTimeout(_setTop);
    });
    
    setTimeout(_setTop);
  },
  unbind(el) {
    $(window).resize(function() {});
  }
}


// WEBPACK FOOTER //
// ./src/directives/bottom_img.js
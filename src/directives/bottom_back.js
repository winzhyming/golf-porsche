export default {
    inserted(el, binding) {
        //  alert($('body').height());
        let _setTop = function() {
            let _top = $(window).height() - 100;
            $(el).css('top', _top + 'px');
        };

        $(window).resize(function() {
            setTimeout(_setTop);
        });

        setTimeout(_setTop);
    },
    unbind(el) {
        $(window).resize(function() {});
    }
}


// WEBPACK FOOTER //
// ./src/directives/bottom_back.js
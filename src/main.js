// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Promise from 'promise'
window.Promise = Promise;

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'

import $ from 'jquery'
import _ from 'lodash'

window.$ = window.jQuery = $;
window._ = _;

import photoswipe from './directives/photoswipe'
import bottom_img from './directives/bottom_img'
import bottom_back from './directives/bottom_back'

Vue.directive('photoswipe', photoswipe);
Vue.directive('bottom_img', bottom_img);
Vue.directive('bottom_back', bottom_back);

Vue.config.productionTip = false

router.beforeEach(function(to, from, next) {
    let _to = _.uniq(to.path.split('/'));
    let _from = _.uniq(from.path.split('/'));
    //console.log('toIndex :', _to);
    //console.log('fromIndex :', _from);
    if (_to.length < _from.length) {
        store.commit('UPDATE_DIRECTION', { direction: 'reverse' })
    } else {
        store.commit('UPDATE_DIRECTION', { direction: 'forward' })
    }
    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1];
        window.location.href = `http${url}`
    } else {
        next()
    }
});

// const history = window.sessionStorage;
// history.clear()
// let historyCount = history.getItem('count') * 1 || 0;
// history.setItem('/', 0);

// router.beforeEach(function(to, from, next) {

//     const toIndex = history.getItem(to.path);
//     const fromIndex = history.getItem(from.path);

//     if (toIndex) {
//         if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
//             store.commit('UPDATE_DIRECTION', { direction: 'forward' })
//         } else {
//             store.commit('UPDATE_DIRECTION', { direction: 'reverse' })
//         }
//     } else {
//         ++historyCount;
//         history.setItem('count', historyCount);
//         to.path !== '/' && history.setItem(to.path, historyCount);
//         store.commit('UPDATE_DIRECTION', { direction: 'forward' })
//     }
//     next()
// });


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});


// WEBPACK FOOTER //
// ./src/main.js
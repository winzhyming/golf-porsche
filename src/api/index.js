import Vue from 'vue';
import VueResource from 'vue-resource'
import From from './form'

Vue.use(VueResource);

Vue.http.options.crossOrigin = true;
Vue.http.options.emulateJSON = false;
Vue.http.options.emulateHTTP = false;

export default {
  form: From.init()
}


// WEBPACK FOOTER //
// ./src/api/index.js
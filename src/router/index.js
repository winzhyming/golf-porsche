import Vue from 'vue'
import Router from 'vue-router'

import public_r from './routes/public'
import player_r from './routes/player'
import guest_r from './routes/guest'
import form_r from './routes/form'

Vue.use(Router)


let _routes = [
  public_r,
  player_r,
  guest_r,
  form_r
];

let router = new Router({
  root: '/',
  mode: 'history',
  routes: _routes
});

export default router;



// WEBPACK FOOTER //
// ./src/router/index.js
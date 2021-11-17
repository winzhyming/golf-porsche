import Vue from 'vue'
import Router from 'vue-router'

import HuWai from './routes/huwai'
import Qinzi from './routes/qinzi'
import Pub from './routes/public'

Vue.use(Router)


let _routes = [ HuWai, Qinzi, Pub ];

let router = new Router({ root: '/', mode: 'history', routes: _routes });

export default router;
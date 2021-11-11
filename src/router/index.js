import Vue from 'vue'
import Router from 'vue-router'

import Pub from './routes/public'
import HuWai from './routes/huwai'
import Qinzi from './routes/qinzi'
// import player_r from './routes/player'
// import guest_r from './routes/guest'
// import form_r from './routes/form'
// import my_r from './routes/my'

Vue.use(Router)


let _routes = [ Pub, HuWai, Qinzi ];

let router = new Router({ root: '/', mode: 'history', routes: _routes });

export default router;
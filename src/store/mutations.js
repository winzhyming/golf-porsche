/**
 * Created by Administrator on 2017/6/5.
 */
import * as types from './types'
import getters from './getters'
const state = {
  direction: 'forward',
  isAgree: false,
  hsAgree: false
};

const mutations = {
  [types.UPDATE_DIRECTION](state,payload) {
    state.direction = payload.direction
  },
  [types.UPDATE_AGREE](state, agree) {
    state.isAgree = agree
  },
  [types.UPDATE_HS_AGREE](state, agree) {
    state.hsAgree = agree
  }
};

export default {
  state,
  mutations,
  getters
}



// WEBPACK FOOTER //
// ./src/store/mutations.js
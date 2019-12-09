import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    rootCount: 0
  },
  mutations: {
    increment (state) {
      state.rootCount++
    }
  }
})
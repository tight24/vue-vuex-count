import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:5
  },
  mutations: {
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    },

  },
  actions: {
    //mutaitionsの処理を呼び出し、5秒後に実行される
    increment({commit}){
      setTimeout(
        commit('increment')
        ,50000)
    }
  },
  modules: {
  }
})

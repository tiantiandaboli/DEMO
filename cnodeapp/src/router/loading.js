import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userstore = new Vuex.Store({}) 

userstore.registerModule('vux', {
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})
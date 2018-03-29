import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    api:"140.82.4.24",
    port:7001,
    protocol:'http'
  },
  getters:{
    urlGetter: state => {
      return state.protocol + "://" + state.api + ":" + state.port
    }
  },
  mutations: {}
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     unmensaje:'Hola a todos',
     unosdatos: ['fernanda', 'galia', 'juan', 'lorenzo'],
  },
  getters: {
  },
  mutations: {
    changemensaje(state, nuevovalor){
        state.unmensaje = nuevovalor;
    },
  },
  actions: {
        cambiarmensaje({commit}, nuevovalor){
          console.log('invocando el action cambiarmensaje');
          commit('changemensaje', nuevovalor);
        },
  },
  modules: {
  }
})

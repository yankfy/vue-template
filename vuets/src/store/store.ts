import Vue from 'vue';
import Vuex from 'vuex';
import Demo from './demo/index';

Vue.use(Vuex);
// vuex
const store = new Vuex.Store({
  state: {
    names: 'linkFly',
  },
  modules: {
    demo: Demo,
  },
});

export default store;

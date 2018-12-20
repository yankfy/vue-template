import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store'; // 引用ts文件时，需文件到基础文件

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

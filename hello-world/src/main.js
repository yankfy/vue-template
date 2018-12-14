import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import server from './providers/http-service' //定义全局变量
Vue.prototype.$server = server;

Vue.config.productionTip = false

// 将公共配置抽离
// axios.defaults.baseURL = '/api'
// 设置默认请求头
// axios.defaults.headers = {
//     'X-Requested-With': 'XMLHttpRequest'
// }
// axios.defaults.timeout = 10000


new Vue({
  render: h => h(App),
}).$mount('#app')

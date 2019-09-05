import Vue from "vue";
import App from "./App.vue";


import  router  from  './router'
import VueResource from 'vue-resource'
// import Axios from 'axios'

// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }

Vue.use(VueResource)
export const bus=new Vue()

new Vue({
  router,
  el:'#app',
  render: h => h(App),
  
})

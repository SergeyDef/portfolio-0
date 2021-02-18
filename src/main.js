import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueYandexMetrika from 'vue-yandex-metrika' 
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery/dist/jquery.min'                              
 
Vue.use(VueYandexMetrika, {
    id: 72354526,
    router: router,
    env: process.env.NODE_ENV
    // other options
})

Vue.prototype.axios = axios
Vue.config.productionTip = false

// Vue.prototype.$http = axios;
// const token = localStorage.getltem('token')
// 	if(token) {
// 		Vue.prototype.$http.defaults.heacders.common['Authorization'] = token		
// 	}

new Vue({
  router,
  store,
  VueYandexMetrika, 
  render: h => h(App)
}).$mount('#app')

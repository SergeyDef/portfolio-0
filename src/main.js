import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueMeta from 'vue-meta'
import VueYandexMetrika from 'vue-yandex-metrika' 
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery/dist/jquery.min'                              


Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueMeta,
  VueYandexMetrika, 
  render: h => h(App)
}).$mount('#app')

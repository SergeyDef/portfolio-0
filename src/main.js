import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import 'popperjs/core/dist/popper'
import 'bootstrap/dist/js/bootstrap.min'
import 'jquery/dist/jquery.min'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

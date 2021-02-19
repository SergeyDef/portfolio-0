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
})

// <!-- Yandex.Metrika counter -->
// <script type="text/javascript" >
//    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
//    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

//    ym(72354526, "init", {
//         clickmap:true,
//         trackLinks:true,
//         accurateTrackBounce:true,
//         webvisor:true
//    });
// </script>
// <noscript><div><img src="https://mc.yandex.ru/watch/72354526" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
// <!-- /Yandex.Metrika counter -->

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

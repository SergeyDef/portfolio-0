import Vue from 'vue'
import VueRouter from 'vue-router'
import VueYandexMetrika from 'vue-yandex-metrika'
import Home from '../views/Home.vue'
// import PrivacyPolicy from '../views/PrivacyPolicy.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/privacy_policy',
		name: 'PrivacyPolicy',
		component: () => import('../views/PrivacyPolicy.vue') 
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior (to, from, savedPosition){
		if (to.hash) {
			return { selector: to.hash }
		} else if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 }
		}
	},
	routes
})


Vue.use(VueYandexMetrika, {
    id: 72354526,
    router: router,
    env: process.env.NODE_ENV
    // other options
})


export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import VueYandexMetrika from 'vue-yandex-metrika'
import Home from '../views/Home.vue'
// import firebase from 'firebase/app'

Vue.use(Meta, {
	keyName: 'metaInfo',
	attribute: 'data-vue-meta',
	ssrAttribute: 'data-vue-meta-server-rendered',
	tagIDKeyName: 'vmid',
	refreshOnceOnNavigation: true
}) 

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: {page: 'home'},
		component: Home,
	},
	{
		path: '/privacy_policy',
		name: 'PrivacyPolicy',
		meta: {page: 'policy'},
		component: () => import('../views/PrivacyPolicy.vue') 
	},
	{
		path: '/personal_account',
		name: 'PersonalAccount',
		meta: {auth: true, page: 'account'},
		component: () => import('../views/PersonalAccount.vue'),
		children: [
			{
				path: '/',
				name: 'course',
				component: () => import('../components/account/CourseCourse.vue'),
			},
			{
				path: 'video',
				name: 'video',
				component: () => import('../components/account/CourseVideo.vue'),
			}
		]
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
			return { x: 50, y: 0 }
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

// router.beforeEach((to, from, next)=>{
// 	const correntUser = firebase.auth().currentUser;
// 	const requireAuth = to.matched.some(recored => record.meta.auth);

// 	if (requireAuth && !currentUser) {
// 		next('/login?massage=login');
// 	} else {
// 		next()
// 	}
// })

export default router

import Vue from 'vue'
import Vuex from 'vuex'
import homeModule from '@/store/homeModule'
import futterModule from '@/store/futterModule'
import courseModule from '@/store/courseModule'
import headerModule from '@/store/headerModule'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		homeModule,
		futterModule,
		courseModule,
		headerModule
	}
})

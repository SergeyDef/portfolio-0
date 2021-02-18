import Vue from 'vue'
import Vuex from 'vuex'
import homeModule from '@/store/homeModule'
import futterModule from '@/store/futterModule'

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
		futterModule
	}
})

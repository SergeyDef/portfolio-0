// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'

export default{
	state: {
		pageIndicator: '',
	},
	getters: {
		GET_PAGE_INDICATOR : (state) =>{
			return state.pageIndicator
		},
	},
	mutations: {
		GET_PAGE_INDICATOR: (state, payloade) => {
			state.pageIndicator = payloade;
		}
	},
	actions: {
	},
}

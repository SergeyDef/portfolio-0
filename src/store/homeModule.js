// import axios from 'axios'

export default{
	state: {
		loginModal: false,
		test: "Helou",
	},
	mutations: {
		// OPEN_LOGIN_MODAL (state){
		// 	state.loginModal = true;
		// },
		CLOSE_LOGIN_MODAL (state){
			state.loginModal = false;
		}
	},
	getters: {
		conditionLoginModal (state){
			return state.loginModal
		},
		OPEN_LOGIN_MODAL (state){
			state.loginModal = true;
		}
	},
	actions: {
	},
}

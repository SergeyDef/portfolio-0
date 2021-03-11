// import axios from 'axios'

export default{
	state: {
		loginModal: false,
		regulationModal: false,
	},
	mutations: {
		LOGIN_MODAL: (state, payloade) => {
			state.loginModal = payloade;
		},
		REGISTRATION: (state, payloade) =>{
			state.regulationModal = payloade;
		}
	},
	getters: {
		LOGIN_MODAL: (state) =>{
			return state.loginModal;
		},
		REGISTRATION: (state) =>{
			return state.regulationModal;
		}
	},
	actions: {
	},
}

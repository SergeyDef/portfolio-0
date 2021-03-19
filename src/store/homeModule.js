// import axios from 'axios'

export default{
	state: {
		loginModal: false,
		regulationModal: false,
		paymentWindow: false,
		regulationData: [],
		loginData: [],
	},
	mutations: {
		LOGIN_MODAL: (state, payloade) => {
			state.loginModal = payloade;
		},
		REGISTRATION_WINDOW: (state, payloade) =>{
			state.regulationModal = payloade;
		},
		REGISTRATION_DATA: (state, payloade) =>{
			state.regulationData = payloade
		},
		PAYMENT_WINDOW: (state, payloade) =>{
			state.paymentWindow = payloade;
		}
	},
	getters: {
		LOGIN_MODAL: (state) =>{
			return state.loginModal;
		},
		REGISTRATION_WINDOW: (state) =>{
			return state.regulationModal;
		},
		PAYMENT_WINDOW: (state) =>{
			return state.paymentWindow
		}
	},
	actions: {
	},
}

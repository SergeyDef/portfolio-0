// import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'

export default{
	state: {
		SendByMail: { name: "Cira", eg: 78 },

	},
	mutations: {
		GET_BYMAIl: (state, payloade) => {
			state.name = payloade;
		}
	},
	getters: {
		SEND_BYMAIl: state => {
			return state.SendByMail
		}
	},
	actions: {
		SET_FORM: (context, submit) => {
			console.log(submit);
			let {data} = axios.post('php/mail.php', {
				'name_form':submit.name,
				'surname_form':submit.surname,
				'contact_form':submit.contact,
				'message_form':submit.message, });
			
			if (data.status) {
				context.commit('SET_FORM', submit)
			}
		}
	},
}

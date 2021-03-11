// import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'

export default{
	state: {
		SendByMail: { name: "Cira", eg: 78 },
		responseServer: "",

	},
	getters: {
		SEND_BYMAIl: state => {
			return state.SendByMail
		},
		RESPONSE_SERVER: state => {
			return state.responseServer
		}
	},
	mutations: {
		GET_BYMAIl: (state, payloade) => {
			state.name = payloade;
		},
		RESPONSE_SERVER: (state, payloade) => {
			state.responseServer = payloade;
		}
	},
	actions: {

		SET_FORM: (context, submit) => {

		axios.post('https://adept-course.ru/php/mail.php', {
				'name_form': submit.name,
				'surname_form': submit.surname,
				'contact_form': submit.contact,
				'message_form': submit.message, 
			})
			.then(function (response) {
					console.log(response);
					context.commit('RESPONSE_SERVER', true);
			})
			.catch(function (error) {
				console.log(error);
				context.commit('RESPONSE_SERVER', false);
			})
			
		}
	},
}

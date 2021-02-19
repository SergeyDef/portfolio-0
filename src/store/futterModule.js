// import Vue from 'vue'
// import Vuex from 'vuex'
import axios from 'axios'

export default{
	state: {
		SendByMail: { name: "Cira", eg: 78 },
		sendingMessage: true,

	},
	mutations: {
		GET_BYMAIl: (state, payloade) => {
			state.name = payloade;
		}
	},
	getters: {
		SEND_BYMAIl: state => {
			return state.SendByMail
		},
		ANSWER: state => {
			return state.sendingMessage;
		},


	},
	actions: {
		SET_FORM: (context, submit) => {

			axios.post('http://adept-course.ru/php/mail.php', {
				'name_form': submit.name,
				'surname_form': submit.surname,
				'contact_form': submit.contact,
				'message_form': submit.message, 
			})
			.then(function (response) {
					console.log(response);

			})
			.catch(function (error) {
				console.log(error);
			});
			
		}
	},
}

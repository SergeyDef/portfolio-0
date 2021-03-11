// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'

export default{
	state: {
		courseVideo: [
			{ 
				id: 1,
				title: "Заголовок",
				lessons: [
					{ id:1, titleVideo: "Заголовок видео", text: "Описание видео", video: "https://youtu.be/iRGHYrF40sI?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" },
					{ id:2, titleVideo: "Заголовок видео", text: "Описание видео", video: "https://youtu.be/Kafz87w_S6E?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" },
					{ id:3, titleVideo: "Заголовок видео", text: "Описание видео", video: "https://youtu.be/GD5y3WQBKH4?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" }
				]
			},
			{ 
				id: 2,
				title: "Заголовок",
				lessons: [
					{ id:4, titleVideo: "Заголовок видео", text: "Описание видео", video: "https://youtu.be/YGH9wOIcrSA?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" },
					{ id:5, titleVideo: "Заголовок видео", text: "Описание видео", video: "https://youtu.be/dfdBv7G5X_Y?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" },
					{ id:6, titleVideo: "Заголовок видео", text: "Описание видео", video: "https://youtu.be/AfkUu4TDBK8?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" }
				]
			},
			{ 
				id: 3,
				title: "Заголовок",
				lessons: [
					{ id:7, titleVideo: "Заголовок видео", text: "Описание видео", video: "https://youtu.be/MfeXtcSBijI?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" },
					{ id:8, titleVideo: "Заголовок видео", text: "Описание видео", video: "https://youtu.be/m4egjPbciXY?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" },
					{ id:9, titleVideo: "Заголовок видео", text: "Описание видео", video: "https://youtu.be/jQz3--oPVBA?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" }
				]
			}
		],
	},
	getters: {
		GET_COURSE: (state) =>{
			return state.courseVideo
		}
	},
	mutations: {
		GET_COURSE: (state, payloade) => {
			state.courseVideo = payloade;
		}
	},
	actions: {
		// GET_COURSE: (context, submit) => {

		// axios.post('', {
		// 	})
		// 	.then(function (response) {
		// 			console.log(response);

		// 			context.commit('GET_COURSE', true);
		// 	})
		// 	.catch(function (error) {
		// 		console.log(error);
		// 		context.commit('GET_COURSE', false);

		// 	});
			
		// }
	},
}

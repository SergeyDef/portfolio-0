// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'

export default{
	state: {
		courseVideo: [
			{ 
				id: 1,
				title: "С чего начать",
				lessons: [
					{ 
						id:1, 
						titleVideo:"Урок 1. Репититор - кто это?", 
						images: "https://c.wallhere.com/photos/3c/3c/1708x1668_px_Dark_fantasy_occult_religion_wicca_Wiccan_witch-1600921.jpg!d", 
						text: "Описание видео", 
						video: "https://youtu.be/iRGHYrF40sI?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", 
						material: "" 
					},
					{ 
						id:2, 
						titleVideo:"Урок 2.", 
						text: "Описание видео", 
						images: "https://img2.freepng.ru/20190620/ozb/kisspng-sigil-chaos-magic-magic-circle-occult-shroud-of-the-avatar-ico-media-5d0c374bc4da98.5727876115610816758063.jpg", 
						video: "https://youtu.be/Kafz87w_S6E?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", 
						material: "" 
					},
					{ id:3, titleVideo: "Урок 3", text: "Описание видео", images: "https://i.pinimg.com/originals/68/45/4c/68454c5ad34a4c93e9365d505fbafd8e.jpg", video: "https://youtu.be/GD5y3WQBKH4?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" }
				]
			},
			{ 
				id: 2,
				title: "Заголовок",
				lessons: [
					{ id:4, titleVideo: "Заголовок видео", images: "@/assets/personal/course.png", text: "Описание видео", video: "https://youtu.be/YGH9wOIcrSA?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" },
					{ id:5, titleVideo: "Заголовок видео", images: "@/assets/personal/course.png", text: "Описание видео", video: "https://youtu.be/dfdBv7G5X_Y?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" },
					{ id:6, titleVideo: "Заголовок видео", images: "@/assets/personal/course.png", text: "Описание видео", video: "https://youtu.be/AfkUu4TDBK8?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" }
				]
			},
			{ 
				id: 3,
				title: "Заголовок",
				lessons: [
					{ id:7, titleVideo: "Заголовок видео", images: "@/assets/personal/course.png", text: "Описание видео", video: "https://youtu.be/MfeXtcSBijI?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" },
					{ id:8, titleVideo: "Заголовок видео", images: "@/assets/personal/course.png", text: "Описание видео", video: "https://youtu.be/m4egjPbciXY?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" },
					{ id:9, titleVideo: "Заголовок видео", images: "@/assets/personal/course.png", text: "Описание видео", video: "https://youtu.be/jQz3--oPVBA?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", material: "" }
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

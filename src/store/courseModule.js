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
					},
					{ 
						id:2, 
						titleVideo:"Урок 2.", 
						text: "Описание видео", 
						images: "https://img2.freepng.ru/20190620/ozb/kisspng-sigil-chaos-magic-magic-circle-occult-shroud-of-the-avatar-ico-media-5d0c374bc4da98.5727876115610816758063.jpg", 
						video: "https://youtu.be/Kafz87w_S6E?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", 
					},
					{ 
						id:3, 
						titleVideo: "Урок 3", 
						text: "Описание видео", 
						images: "https://i.pinimg.com/originals/68/45/4c/68454c5ad34a4c93e9365d505fbafd8e.jpg", 
						video: "https://youtu.be/GD5y3WQBKH4?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj",
					}
				]
			},
			{ 
				id: 2,
				title: "Заголовок",
				lessons: [
					{ 
						id:4, 
						titleVideo: "Заголовок видео", 
						images: "@/assets/personal/course.png", 
						text: "Описание видео", video: "https://youtu.be/YGH9wOIcrSA?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", 
					},
					{ 
						id:5, 
						titleVideo: "Заголовок видео", 
						images: "@/assets/personal/course.png", 
						video: "https://youtu.be/dfdBv7G5X_Y?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", 
					},
					{ 
						id:6, 
						titleVideo: "Заголовок видео", 
						images: "@/assets/personal/course.png", 
						text: "Описание видео", 
						video: "https://youtu.be/AfkUu4TDBK8?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj",
						}
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
		video: [
			{ 
				id:1, 
				titleVideo:"Урок 1. Репититор - кто это?", 
				images: "https://c.wallhere.com/photos/3c/3c/1708x1668_px_Dark_fantasy_occult_religion_wicca_Wiccan_witch-1600921.jpg!d", 
				text: "Описание видео", 
				video: "https://youtu.be/iRGHYrF40sI?list=PLpHpo8xoicnVQzjL9lIC1YLmgE7QvMGSj", 
				discription: [
					{ id:1, text: "Кто такой репетитор и зачем его приглашают?"},
					{ id:2, text: "Как классифицировать репетиторов и их аудиторию и зачем это нужно?"},
					{ id:3, text: "Как найти своё место на рынке труда?"},
					{ id:4, text: "Чем репетитор отличается от учителя и как он может взаимодействовать с учениками?"},
					],
				bonuses: [
					{ id:1, textBonus: "Памятка к уроку", link: "" },
					{ id:2, textBonus: "Бонус! Официальное оформление репетиторской деятельности", link: "" },
				]
			}
		],
		users: [
			{
				id:1,
				images:"https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/5a34379e54404bddb1b202e87303666c.jpg",
				name:"Александр",
				surname:"Петров",
				date:"11.12.2021",
			},
			{
				id:2,
				images:"https://yt3.ggpht.com/a/AATXAJx6K2nV0LBLOj2irO7gmHn5IvpKP7iL865TuyIZYQ=s900-c-k-c0xffffffff-no-rj-mo",
				name:"Иван",
				surname:"Кислов",
				date:"01.08.2030",
			},
			{
				id:3,
				images:"https://i.pinimg.com/736x/6a/42/ab/6a42ab3b9dbd03f9a55d9bf9481680ef--kancolle-kantai.jpg",
				name:"Карина",
				surname:"Краюшкина",
				date:"11.12.2021",
			},
			{
				id:4,
				images:"https://ip1.anime-pictures.net/direct-images/23c/23c08941a062b0a5cb964951475143f3.jpg?if=ANIME-PICTURES.NET_-_640625-758x1060-original-hasuno-single-tall+image-looking+at+viewer-short+hair.jpg",
				name:"Павел",
				surname:"Мамонов",
				date:"10.07.2021",
			},
			{
				id:5,
				images:"http://img10.reactor.cc/pics/post/AO-Anime-Art-Anime-hasunokaeru-3903638.jpeg",
				name:"Татьяна",
				surname:"Магомедова",
				date:"11.12.2021",
			},
		]
	},
	getters: {
		GET_COURSE: (state) =>{
			return state.courseVideo
		},
		GET_VIDEO: (state) =>{
			return state.video
		},
		GET_USERS: (state) =>{
			return state.users
		}
	},
	mutations: {
		GET_COURSE: (state, payloade) => {
			state.courseVideo = payloade;
		}
	},
	actions: {
	},
}

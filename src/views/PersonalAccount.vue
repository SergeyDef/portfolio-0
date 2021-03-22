<template>
	<div class="account">
		<div class="container-fluid">
			<div class="row account__wrapper">
				<aside class="col-2 col-sm-2 col-md-1 col-xl-2 account__menu">
					<course-menu></course-menu>
				</aside>
				<main 
					class="col-8 col-sm-8 col-md-6 col-xl-6 pt-5 account__content" >
						<section 
							class="account__block course px-2 py-3 mb-5" 
							v-for="course in courses"
							:key="course.id">
						<div class="course__title px-3">
							<h2>{{ course.title }}</h2>
						</div>
						<hr class="course__line my-1" />
							<ul  class="course__wrapper w-100 container-fluid px-1">
								<li v-for="item in course.lessons" :key="item.id"  class="course__block row my-3">
									<div class="col-sm-2 course__icon">
										<img :src="item.images">
									</div>
									<div class="col-xl-10">
										<div class="course__name">
											<h3>{{ item.titleVideo }}</h3>
										</div>
									</div>
								</li>
							</ul>
					</section>
				</main>
				<aside class="col-2 col-sm-2 col-md-5 col-xl-4 account__chat chat">
					<div class="m-auto chat__block">
						<div>
							<h3>Чат</h3>
						</div>
						<div class="chat__window p-3">
							<div class="chat__msg"></div>
							<div class="chat__form container">
								<form class="row">
									<div class="col-8 col-md-7 chat__input">
										<input type="text" name="" class="form-control m-auto w-100" />
									</div>
									<div class="col-4 col-md-5 chat__button">
										<button type="button" class="btn w-100">Отправить</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="chat__svg">
						<div class="chat__icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text" viewBox="0 0 16 16">
								<path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
								<path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
							</svg>
						</div>
					</div>
				</aside>
			</div>
		</div>
		<FooterSection />
	</div>
</template>

<script>
  import FooterSection from '@/components/FooterSection.vue'
  import CourseMenu from '@/components/account/CourseMenu.vue'

export default {
	name: 'PersonalAccount',
	components: {
		FooterSection,
		CourseMenu,
	},
	props: {
	},
	data(){
		return {
			courses: []
		}
	},
	methods: {
	},
	mounted(){
		let getCourse = this.$store.getters.GET_COURSE;
		// for (var i = 0; i < getCourse.length; ++i) {
		// 	console.log(getCourse[i].lessons);
		// }
		this.courses = getCourse;
	}
}

</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

.account{

	&__wrapper{
		background-color: #F4F7F9;
	}
	&__content{
		background-color: #F4F7F9;
	}
	&__block{
		width: 100%;
		min-height: 300px;
		background-color: #fff;
	}
	.course{

		&__title{
			@include textContent(0.7rem, 1.23, 600, #000, left, 'Gilroy-ExtraBold');
		}
		&__wrapper{
			width: 100%;
			height: auto;
		}
		&__icon{
		width: 80px;
		height: 80px;
		margin: auto;
		}
		&__icon>img{
			width: 80px;
			height: 80px;
		}
		&__name{
			height: 100%;
			display: flex;
		}
		&__name>h3{
			@include textContent(24px, 1.5, 300, #000, left, 'Gilroy-Medium');
			margin: auto 0;
		}
	}

	&__chat{
	}
	.chat{
		
		&__block{
			width: 80%;
		}
		&__window{
			height: 560px;
			border-radius: 10px;
		}
		&__msg{
			height: 490px;
			background-color: #fff;
			border: 1px solid #000;
		}
		&__form{
			height: 50px;
		}
		&__form{
			padding: 0;
			margin: 0;
		}
		&__form>form{
			padding: 0;
			margin: 0;
		}
		&__input{
			display: flex;
			padding: 0;
		}
		&__input>input{
			margin: auto;
			padding: 0;
			border-radius: 0;
			@include textContent(14px, 0.55, 300, #000, left, 'Gilroy-Medium');
		}
		&__input::-webkit-input-placeholder>input{
			@include textContent(14px, 1.55, 300, #525252, left, 'Gilroy-Light');
		}
		&__input:-moz-placeholder>input{
			@include textContent(14px, 1.55, 300, #525252, left, 'Gilroy-Light');
		}
		&__button{
			display: flex;
			padding: 0;
		}
		&__button>button{
			width: 100%;
			margin: auto;
			font-size: 0.9rem;
			@include buttonColor( 100%, #554991, #fff);
		}
		&__svg{
			display: none;
		}
	}
}
	@media (max-width: 1360px){
	.account{
			.chat{
				&__button>button{
				font-size: 0.8rem;
			}
		}
	}
}
	@media (max-width: 1200px){
	.account{

		.chat{
			
			&__block{
				width: 90%;
			}
		}
	}
	}
	@media (max-width: 967px){
		.account{
			margin-top: 35px;
		}
	}
	@media (max-width: 780px){
		.account{

			&__block{
				height: 255px;
				margin-bottom: 35px;
			}
			.chat{
				&__block{
					display: none;
				}
				&__svg{
					margin-top: 60px;
					width: 100%;
					display: flex;
				}
				&__icon{
					cursor: pointer;
					width: 76%;
					margin: auto;
				}
				&__icon>svg{
					width: 100%;
					height: 100%;
					color: #007bff;
				}
			}
		}
	}

	@media (max-width: 467px){		
		.account{

			&__block{
				height: 240px;
				margin-bottom: 30px;
			}
			&__chat{
			}
			.chat{
				&__icon{
					width: 100%;
				}
			}
		}
	}
	@media (max-width: 365px){
			.account{

				&__block{
					height: 220px;
					margin-bottom: 20px;
				}
			}
		}
</style>

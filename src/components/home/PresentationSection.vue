<template>
	<div class="presentation">
		<div class="presentation__wrapper">
			<div class="presentation__info">
				<div class="presentation__title">
					<h2>Практический курс для</h2>
					<h2>начинающих репетиторов</h2>
				</div>
				<div class="presentation__text">
					<p>adept Образование для всех</p>
				</div>
<!-- 				<div class="presentation__button">
					<button type="button" class="presentation__signUp btn">Записаться на курс</button>
					<button type="button" class="presentation__personal btn" @click="openEntrance">Личный кабинет</button>
				</div> -->
			</div>
		</div>
		<div id="carouselExampleSlidesOnly" class="carousel slide presentation__wrapper" data-ride="carousel">
			<div class="carousel-inner slide__block">
				<div class="carousel-item slide__item active">
					<img src="@/assets/presentation/slid_1.webp" class="d-block w-100" alt="">
				</div>
				<div class="carousel-item">
					<img src="@/assets/presentation/slid_2.png" class="d-block w-100" alt="">
				</div>
				<div class="carousel-item">
					<img src="@/assets/presentation/slid_3.png" class="d-block w-100" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'PresentationSection',
	components: {
	},
	data() {
		return{
		}
	},
	methods: {
		openEntrance: () =>{
			
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';


	.presentation{
		width: 80%;
		padding: 5% 0;
		display: flex;
		margin: auto;
		justify-content: space-around;

		&__wrapper{
			width: 50%;
		}
		&__info{
			width: 100%;
			height: 100%;
			padding: 100px 0 0 0;
		}
		&__title{
			text-align: left;
			width: 100%;
		}
		&__title>h2{
			@include textContent(2.5rem, 1.23, 700, #000, left, 'Gilroy-ExtraBold');

		}
		&__text{
			text-align: left;			
			padding: 20px 0 50px 0;
		}
		&__text>p{
			line-height: 1.5;
			font-weight: 400;
			opacity: 0.45;
			font-size: 1rem;
			font-family: 'Gilroy-Light';
		}
		&__button{
			display: flex;
			height: 50px;
			justify-content: space-between;
		}
		&__signUp{
			@include buttonWhite(40%);
		}
		&__personal{
			@include buttonColor(40%, #554991, #fff);
		}
		.slide{
			display: flex;

			&__block{
				width: 90%;
				margin: auto;
			}

			&__item{}
		}
	}
	@media (max-width: 1200px){
		.presentation{

			&__wrapper{
			}
			&__info{
			}
			&__title{
			}
			&__title>h2{
				font-size: 25px;
			}
			&__text{
			}
			&__text>p{
			}
			&__button{
			}
			&__button>button{
			}
			&__signUp{
			}
			&__personal{
			}
			.slide{
				&__block{
				}

				&__item{}
			}
		}
	}
	@media (max-width: 967px){}
	@media (max-width: 667px){
		.presentation{
			display: flex;
			flex-direction: column;
			width: 90%;

			&__wrapper{
				width: 100%;
			}
			&__info{
			}
			&__title{
				text-align: center;
			}
			&__title>h2{
				font-size: 32px;
			}
			&__text{
				text-align: center;
			}
			&__text>p{
				font-size: 14px;
			}
			&__button{
				width: 100%;
			}
			&__button>button{
				font-size: 0.85rem;
			}
			&__signUp{
				width: 50%;
			}
			&__personal{
				width: 50%;
			}
			.slide{
				&__block{
				}

				&__item{}
			}
		}
	}
	@media (max-width: 467px){
		.presentation{
			display: flex;
			flex-direction: column;
			width: 90%;

			&__wrapper{
				width: 100%;
			}
			&__info{
			}
			&__title{
				text-align: center;
			}
			&__title>h2{
				font-size: 22px;
			}
			&__text{
				text-align: center;
			}
			&__text>p{
				font-size: 12px;
			}
			&__button{
				width: 100%;
			}
			&__button>button{
				font-size: 0.85rem;
			}
			&__signUp{
				width: 50%;
			}
			&__personal{
				width: 50%;
			}
			.slide{
				&__block{
				}

				&__item{}
			}
		}
	}
	@media (max-width: 365px){
		.presentation{

			&__wrapper{
			}
			&__info{
			}
			&__title{
			}
			&__title>h2{
			}
			&__text{
			}
			&__text>p{
			}
			&__button{
			}
			&__signUp{
			}
			&__personal{
			}
			.slide{
				&__block{
				}

				&__item{}
			}
		}
	}
</style>

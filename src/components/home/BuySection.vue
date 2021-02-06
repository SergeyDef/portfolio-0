<template>
	<div class="buy">
		<div class="buy__title">
			<h2>Приобретая наш курс вы</h2>
			<h2>получите:</h2>
		</div>
		<div class="buy__wrapper">
			<ul class="buy__list">
				<li class="buy__item"><span>Доступ ко всем материалам курса на 90 дней!</span></li>
				<li class="buy__item"><span>Практические задания, которые помогут Вам быстро войти в профессию!</span></li>
				<li class="buy__item"><span>Памятки к каждому уроку, которые останутся у Вас навсегда!</span></li>
				<li class="buy__item"><span>Бонусный материал: официальное оформление репетиторской деятельности!</span></li>
			</ul>
		</div>
		<div class="buy__button">
			<a href="https://oplatakursov.ru/cmgqixvy">
				<span>Купить за 1490 руб.</span>
			</a>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BuySection',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

	.buy{
		width: 100%;
		height: auto;
		padding: 180px 0;
		background-color: #f0f0f0;

		&__title{
			width: 80%;
			margin: auto;
			text-align: center;
			margin-bottom: 40px;
		}
		&__title>h2{
			@include textContent(64px, 1.23, 700, #000, center, 'Gilroy-ExtraBold');
		}
		&__wrapper{
			width: 100%;
			height: auto;
		}
		&__list{
			margin: auto;
			padding: 0;
			width: 55%;
		}
		&__item{
			padding-top: 5px;
		}
		&__item>span{
			@include textContent(24px, 1.5, 500, #000, left, 'Gilroy-Bold');
		}
		&__button{
			width: 260px;
			height: 55px;
			margin: 60px auto 0 auto;
			background-color: #1f5bff;
			border-radius: 30px;
			font-family: 'Gilroy-Medium';
		}
		&__button>a{
			width: 100%;
			height: 100%;
			display: flex;
			text-decoration: none;
		}
		&__button>a>span{
			display: block;
			margin: auto;
			color: #fff;
		}
	}
	@media (max-width: 1200px){
		.buy{
			padding: 70px 0;

			&__title{
			}
			&__title>h2{
				font-size: 24px;
			}
			&__wrapper{
			}
			&__list{
				width: 76%;
			}
			&__item{
			}
			&__item>span{
				font-size: 16px;
			}
			&__button{
				width: 180px;
				height: 45px;
			}
			&__button>a{
			}
			&__button>a>span{
				font-size: 14px;

			}
		}
	}
	@media (max-width: 967px){
		.buy{
			padding: 70px 0;

			&__title{
			}
			&__title>h2{
				font-size: 24px;
			}
			&__wrapper{
			}
			&__list{
				width: 76%;
			}
			&__item{
			}
			&__item>span{
				font-size: 16px;
			}
			&__button{
				width: 180px;
				height: 45px;
			}
			&__button>a{
			}
			&__button>a>span{
				font-size: 14px;

			}
		}
	}
	@media (max-width: 667px){
		.buy{
			padding: 70px 0;

			&__title{
			}
			&__title>h2{
				font-size: 24px;
			}
			&__wrapper{
			}
			&__list{
				width: 76%;
			}
			&__item{
			}
			&__item>span{
				font-size: 16px;
			}
			&__button{
				width: 180px;
				height: 45px;
			}
			&__button>a{
			}
			&__button>a>span{
				font-size: 14px;

			}
		}
	}
	@media (max-width: 467px){
		.buy{
			padding: 70px 0;

			&__title{
			}
			&__title>h2{
				font-size: 24px;
			}
			&__wrapper{
			}
			&__list{
				width: 76%;
			}
			&__item{
			}
			&__item>span{
				font-size: 16px;
			}
			&__button{
				width: 180px;
				height: 45px;
			}
			&__button>a{
			}
			&__button>a>span{
				font-size: 14px;

			}
		}
	}
	@media (max-width: 365px){
		.buy{

			&__title{
			}
			&__title>h2{
				font-size: 18px;
			}
			&__wrapper{
			}
			&__list{
			}
			&__item{
			}
			&__item>span{
				font-size: 14px;
			}
			&__button{
			}
			&__button>a{
			}
			&__button>a>span{
			}
		}
	}
</style>

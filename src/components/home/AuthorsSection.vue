<template>
	<div class="authors">
		<div class="authors__title">
			<h2>Авторы курса</h2>
		</div>
		<div class="authors__subtitle">
			<span>Над курсом работали психологи и опытные</span>
			<span>педагоги из различных сфер, чтобы вы</span>
			<span>получили максимально разностороннее</span>
			<span>видение профессии</span>
		</div>
		<div class="authors__content">
			
			<div class="authors__block">
				<div class="authors__photo">
					<img src="@/assets/authors/photo_1.jpg" alt="photo">
				</div>
				<div class="authors__name">
					<h3>Нуржамал Каримбекова</h3>
				</div>
				<div class="authors__description">
					<p>Психолог-имиджмейкер; Специалист по психологии общения и этнопсихологии; Репетитор по русскому языку</p>
				</div>
			</div>

			<div class="authors__block">
				<div class="authors__photo">
					<img src="@/assets/authors/photo_2.jpg" alt="photo">
				</div>
				<div class="authors__name">
					<h3>Елена Торина</h3>
				</div>
				<div class="authors__description">
					<p>Спикер курса К.т.н., доцент НИУ "МЭИ"; Педагог-психолог; Репетитор по математике, физике и шахматам</p>
				</div>
			</div>

			<div class="authors__block">
				<div class="authors__photo">
					<img src="@/assets/authors/photo_3.jpg" alt="photo">
				</div>
				<div class="authors__name">
					<h3>Наталья Краюшкина</h3>
				</div>
				<div class="authors__description">
					<p>Психотерапевт; Специалист по социальной психологии; Педагог по детскому развитию; Частный инструктор по фитнесу</p>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AuthorsSection',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

	.authors{
		padding: 150px 0;

		&__title{
			width: 1200px;
			margin: auto;
			margin-bottom: 40px;
		}
		&__title>h2{
			@include textContent(42px, 1.23, 600, #000, center, 'Gilroy-ExtraBold');
		}
		&__subtitle{
			margin: auto;
			width: 560px;
		}
		&__subtitle>span{
			@include textContent(24px, 1.5, 300, #000, center, 'Gilroy-Medium');
				display: block;
				margin: auto;
		}
		&__content{
			width: 1200px;
			margin: auto;
			display: flex;
			padding: 120px 0 50px 0;
		}
		&__block{
			width: 360px;
			margin: 0 20px;
		}
		&__photo{
			width: 200px;
			max-width: 100%;
			margin: auto;
			overflow: hidden;
			border-radius: 50%;
			margin-bottom: 20px;
		}
		&__photo>img{
			width: 100%;
			height: auto;
		}
		&__name{
			width: 100%;
			height: 60px;
			margin-bottom: 4px;
		}
		&__name>h3{
			@include textContent(22px, 1.35, 600, #000, center, 'Gilroy-ExtraBold');
		}
		&__description{
			width: 90%;
			margin: auto;
		}
		&__description>p{
			@include textContent(14px, 1.55, 300, #7a7a7a, center, 'Gilroy-Light');
		}
	}
	@media (max-width: 1200px){
		.authors{

			&__title{
				width: 800px;
			}
			&__content{
				width: 800px;
			}
			&__block{
				width: 246px;
				margin: 0 10px;
			}
			&__photo{
				width: 160px;
			}
		}
	}
	@media (max-width: 967px){
		.authors{

			&__title{
				width: 660px;
			}
			&__content{
				width: 660px;
			}
			&__block{
				width: 200px;
				margin: 0 10px;
			}
			&__photo{
				width: 120px;
			}
		}
	}
	@media (max-width: 667px){
		.authors{
			padding: 60px 0;

			&__title{
				width: 560px;
			}
			&__title>h2{
				font-size: 36px;
			}
			&__content{
				width: 400px;
				padding: 60px 0 50px 0;
				flex-direction: column;
			}
			&__block{
				width: 350px;
				margin: auto;
				padding-top: 50px;
			}
			&__photo{
				width: 130px;
			}
			&__name>h3{
				font-size: 1.5rem;
			}
			&__description>p{
				font-size: 1rem;
			}
		}
	}
	@media (max-width: 467px){
		.authors{
			padding: 60px 0;

			&__title{
				width: 350px;
			}
			&__title>h2{
				font-size: 32px;
			}
			&__subtitle{
				width: 350px;
			}
			&__subtitle>span{
				font-size: 18px;
			}
			&__content{
				width: 350px;
				padding: 60px 0 50px 0;
				flex-direction: column;
			}
			&__block{
				width: 350px;
				margin: auto;
				padding-top: 50px;
			}
			&__photo{
				width: 110px;
			}
			&__name{
				height: 40px;
			}
		}
	}
	@media (max-width: 365px){
		.authors{
			padding: 50px 0;

			&__title{
				width: 320px;
				margin-bottom: 30px;
			}
			&__title>h2{
				font-size: 28px;
			}
			&__subtitle{
				width: 320px;
			}
			&__subtitle>span{
				font-size: 14px;
			}
			&__content{
				width: 320px;
				padding: 20px 0 40px 0;
			}
			&__block{
				width: 320px;
				padding-top: 40px;
			}
			&__name>h3{
				font-size: 20px;
			}
			&__description>p{
				font-size: 12px;
			}
		}
	}
</style>

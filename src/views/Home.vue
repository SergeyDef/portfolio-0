<template>
	<div class="home">
		<div class="home__wrapper">
			<div class="home__info">
				<div class="home__title">
					<h2>Практический курс для</h2>
					<h2>начинающих репетиторов</h2>
				</div>
				<div class="home__text">
					<p>adept Образование длля всех</p>
				</div>
				<div class="home__button">
					<button type="button" class="home__signUp btn">Записаться на курс</button>
					<button type="button" class="home__personal btn">Личный кабинет</button>
				</div>
			</div>
		</div>
		<div id="carouselExampleSlidesOnly" class="carousel slide home__wrapper" data-ride="carousel">
			<div class="carousel-inner slide__block">
				<div class="carousel-item slide__item active">
					<img src="@/assets/home/slid_1.webp" class="d-block w-100" alt="">
				</div>
				<div class="carousel-item">
					<img src="@/assets/home/slid_2.png" class="d-block w-100" alt="">
				</div>
				<div class="carousel-item">
					<img src="@/assets/home/slid_3.png" class="d-block w-100" alt="">
				</div>
			</div>
		</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

	.home{
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
			font-size: 2rem;
			font-weight: 500;
			color: #000000;
			font-size: 35px;
		}
		&__text{
			font-size: 1rem;
			text-align: left;
			line-height: 1.5;
			font-weight: 400;
			opacity: 0.45;
			padding: 20px 0 50px 0;
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
</style>

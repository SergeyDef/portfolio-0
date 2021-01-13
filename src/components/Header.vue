<template>
	<div class="header">
		<div class="header__logo">
			<img src="@/assets/header/logo.svg">
		</div>
		<div class="header__nav">
			<ul class="nav justify-content-center">
				<li class="nav-item">
					<span class="nav-link header__link">О нас</span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link">Наша цель</span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link">Авторы курса</span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link">Контакты</span>
				</li>
			</ul>
		</div>
		<div class="header__additionally">
			<div class="header__button">
				<button type="button" class="btn">Записаться</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		props: {
			msg: String
		}
	}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';

	.header{
		width: 80%;
		display: flex;
		margin: auto;
		justify-content: space-between;

		&__nav{
			width: 50%;
			margin: auto 0;
			height: auto;
		}

		&__link{
			cursor: pointer;
			font-size: 1rem;
		}

		&__link:hover{
			color: #1877F2;
		}

		&__logo{
			cursor: pointer;
			width: 10%;
			height: 100px;
			display: flex;
			margin: auto 0;
		}
		&__logo>img{
			width: 100%;
			margin: auto;
			height: auto;
		}
		&__additionally{
			width: 20%;
			display: flex;
		}
		&__button{
			width: 50%;
			margin: auto 0;
			display: flex;
		}
		&__button>button{
			@include buttonWhite(100%);
		}
	}
</style>

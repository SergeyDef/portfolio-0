<template>
	<div class="header">
		<div class="header__burger" @click="showMenu" v-if="hideBurger">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<div class="header__logo">
			<img src="@/assets/header/logo.svg">
		</div>
		<div class="header__nav">
			<ul class="nav justify-content-center">
				<li class="nav-item">
					<span class="nav-link header__link" href="#aboutAs"><a href="#aboutAs">О нас</a></span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link" href="#ourGoal"><a href="#ourGoal">Наша цель</a></span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link" href="#authors"><a href="#authors">Авторы курса</a></span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link" href="#cost"><a href="#cost">Приобрести курс</a></span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link" href="#contacts"><a href="#contacts">Контакты</a></span>
				</li>
			</ul>
		</div>
		<div class="header__additionally">
			<div class="header__read">
				<a href="https://zen.yandex.ru/adept"><span>Читайте нас!</span></a>
			</div>
		</div>

		<div class="nav_adaptiv" v-if="showNavAdaptiv">
			<div class="nav_adaptiv__close" @click="closeMenu">
				<div></div>
			</div>
			<ul class="nav_adaptiv__list">
				<li class="nav_adaptiv__item">
					<span class="" href="#aboutAs"><a href="#aboutAs">О нас</a></span>
				</li>
				<li class="nav_adaptiv__item">
					<span class="" href="#ourGoal"><a href="#ourGoal">Наша цель</a></span>
				</li>
				<li class="nav_adaptiv__item">
					<span class="" href="#authors"><a href="#authors">Авторы курса</a></span>
				</li>
				<li class="nav_adaptiv__item">
					<span class="" href="#cost"><a href="#cost">Приобрести курс</a></span>
				</li>
				<li class="nav_adaptiv__item">
					<span class="" href="#contacts"><a href="#contacts">Контакты</a></span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Header',
		props: {
			msg: String
		},
		data(){
			return{
				showNavAdaptiv: false,
				hideBurger: true,
			}
		},
		methods: {
			showMenu: function () {
				this.hideBurger = false;
				this.showNavAdaptiv = true;
			},
			closeMenu: function () {
				this.showNavAdaptiv = false;
				this.hideBurger = true;
			}
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

		&__burger{
			display: none;
		}

		&__nav{
			width: 70%;
			margin: auto 0;
			height: auto;
		}

		&__link{
			cursor: pointer;
			font-size: 1rem;
			cursor: pointer;
		}
		&__link>a{
			text-decoration: none;
			font-size: 1rem;
			color: #000;
			font-family: 'Gilroy-Medium';
		}
		&__link>a:hover{
			color: #0056d3;
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
		&__read{
			width: 70%;
			margin: auto 0;
			display: flex;
		}
		&__read>a{
			margin: 0;
			border: solid 3px #0056d3;
			border-radius: 0;
			width: 100%;
			display: flex;
			padding: 8px 30px;
			text-decoration: none;
			font-family: 'Gilroy-Medium';
		}
		&__read>a>span{
			margin: auto;
			color: #000000;
			font-weight: 400;
		}
		.nav_adaptiv{
			position: fixed;
			left: 0;
			top: 0;
			width: 50%;
			height: 100%;
			z-index: 9999999;
			background-color: #0056d3;
			transition: all 0.9s ease 0s;

			&__close{
				position: absolute;
				width: 40px;
				height: 40px;
				right: 10px;
				top: 20px;
			}
			&__close>div{
				width: 5px;
				height: 30px;
				position: relative;
			}
			&__close>div::before{
				content: '';
				width: 5px;
				height: 30px;
				top: 48%;
				left: 10%;
				position: absolute;
				transform: rotate(45deg);
				background-color: #fff;
				/*transition: all 0.3s ease-out;*/
			}
			&__close>div::after{
				content: '';
				width: 5px;
				height: 30px;
				top: 48%;
				left: 10%;
				position: absolute;
				background-color: #fff;
				transform: rotate(-45deg);
				/*transition: all 0.3s ease-out;*/
			}

			&__list{
				padding: 60px 0 0 100px;
				list-style-type: none;
			}
			&__item{
				margin: 15px 0;
			}
			&__item>span>a{
				color: #fff;
				font-size: 24px;
				font-weight: 700;
				text-decoration: none;
				font-family: 'Gilroy-Bold';
			}
		}
	}
	@media (max-width: 1450px){
		.header{

			&__nav{
			}

			&__link{
			}

			&__link:hover{
			}

			&__logo{
			}
			&__logo>img{
			}
			&__additionally{
			}
			&__read{
				width: 90%;
			}
			&__read>button{
			}
		}
	}
	@media (max-width: 1200px){
		.header{

			&__nav{
			}

			&__link{
			}

			&__link:hover{
			}

			&__logo{
			}
			&__logo>img{
			}
			&__additionally{
			}
			&__read{
				width: 100%;
			}
			&__read>button{
			}
		}
	}
	@media (max-width: 967px){
		.header{
			width: 90%;
			display: flex;
			flex-direction: column;

			&__nav{
				display: none;
			}
			&__burger{
				position: fixed;
				display: flex;
				width: 60px;
				height: 58px;
				top: 30px;
				left: 30px;
				padding: 4px;
				cursor: pointer;
				z-index: 9999999;
				background-color: #fff;
				border-radius: 5px;
				flex-direction: column;
			}
			&__burger>span{
				width: 40px;
				height: 8px;
				margin: 4px auto;
				display: block;
				background-color: #524c8c;
			}
			&__link{
			}

			&__link:hover{
			}

			&__logo{
				margin: auto;
				width: 20%;
			}
			&__logo>img{
			}
			&__additionally{
				width: 40%;
				margin: auto;
				padding-top: 40px;
			}
			&__read{
				margin: auto;
			}
			&__read>a>span{
				font-size: 16px;
			}
			&__read>button{
			}
			.nav_adaptiv{
				width: 54%;

				&__close{

				}
				&__close>div{
				}
				&__close>div::before{
				}
				&__close>div::after{
				}

				&__list{
				}
				&__item{
				}
				&__item>span>a{
				}
			}
		}
	}
	@media (max-width: 667px){
		.header{
			width: 90%;
			display: flex;
			flex-direction: column;

			&__nav{
				display: none;
			}

			&__burger{
				width: 50px;
				height: 48px;
				top: 25px;
				left: 25px;
				padding: 4px;
			}
			&__burger>span{
				width: 35px;
				height: 7px;
				margin: 3px auto;
				display: block;
				background-color: #524c8c;
			}

			&__link{
			}

			&__link:hover{
			}

			&__logo{
				margin: auto;
				width: 30%;
			}
			&__logo>img{
			}
			&__additionally{
				width: 50%;
				margin: auto;
				padding-top: 40px;
			}
			&__read{
				margin: auto;
			}
			&__read>button{
			}
			.nav_adaptiv{
				width: 60%;

				&__close{
					width: 30px;
					height: 30px;
					right: 5px;
					top: 5px;
				}
				&__close>div{
				}
				&__close>div::before{
				}
				&__close>div::after{
				}

				&__list{
					padding: 70px 0 0 50px;
				}
				&__item{
				}
				&__item>span>a{
					font-size: 18px;
				}
			}
		}
	}
	@media (max-width: 467px){
		.header{
			width: 90%;
			display: flex;
			flex-direction: column;

			&__nav{
				display: none;
			}

			&__link{
			}

			&__link:hover{
			}

			&__logo{
				margin: auto;
				width: 30%;
			}
			&__logo>img{
			}
			&__additionally{
				width: 50%;
				margin: auto;
				padding-top: 40px;
			}
			&__read{
				width: 100%;
				margin: auto;
			}
			&__read>button{
			}
			&__read>a{
			}
			.nav_adaptiv{

				&__close{
				}
				&__close>div{
				}
				&__close>div::before{
				}
				&__close>div::after{
				}

				&__list{
				}
				&__item{
				}
				&__item>span>a{
					font-size: 14px;
				}
			}
		}
	}
	@media (max-width: 367px){
		.header{

			&__nav{
			}

			&__link{
			}

			&__link:hover{
			}

			&__logo{
			}
			&__logo>img{
			}
			&__additionally{
				width: 60%;
			}
			&__read{
			}
			&__read>button{
			}
			&__read>a{
			}
			.nav_adaptiv{
				width: 70%;

				&__close{
				}
				&__close>div{
				}
				&__close>div::before{
				}
				&__close>div::after{
				}

				&__list{
				}
				&__item{
				}
				&__item>span>a{
				}
			}
		}
	}
</style>

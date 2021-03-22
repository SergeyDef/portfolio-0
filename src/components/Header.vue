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
					<span class="nav-link header__link" href="#aboutAs" @click="goPage">О нас</span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link" href="#ourGoal" @click="goPage">Наша цель</span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link" href="#authors" @click="goPage">Авторы курса</span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link" href="#cost" @click="goPage">Приобрести курс</span>
				</li>
				<li class="nav-item">
					<span class="nav-link header__link" href="#contacts" @click="goPage">Контакты</span>
				</li>
			</ul>
		</div>
		<normal-header class="header__additionally" v-if="pageIndicator" ></normal-header>
		<account-header class="header__additionally" v-else-if="!pageIndicator"></account-header>

		<div class="nav_adaptiv" v-if="showNavAdaptiv">
			<div class="nav_adaptiv__close" id="1" @click="closeMenu">
				<div></div>
			</div>
			<ul class="nav_adaptiv__list">
				<li class="nav_adaptiv__item">
					<span class="" href="#aboutAs" @click="goPage">О нас</span>
				</li>
				<li class="nav_adaptiv__item">
					<span class="" href="#ourGoal" @click="goPage">Наша цель</span>
				</li>
				<li class="nav_adaptiv__item">
					<span class="" href="#authors" @click="goPage">Авторы курса</span>
				</li>
				<li class="nav_adaptiv__item">
					<span class="" href="#cost" @click="goPage">Приобрести курс</span>
				</li>
				<li class="nav_adaptiv__item">
					<span class="" href="#contacts" @click="goPage">Контакты</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import NormalHeader from '@/components/header/NormalHeader.vue'
	import AccountHeader from '@/components/header/AccountHeader.vue'

	export default {
		name: 'Header',
		components: {
			NormalHeader,
			AccountHeader,
		},
		props: {
			msg: String
		},
		data(){
			return{
				showNavAdaptiv: false,
				hideBurger: true,
				pageIndicator: true,
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
			},
			goPage: function () {
				let link = event.target;
				let href = link.getAttribute('href');
				this.$router.push({name: 'Home', hash: href});
				this.showNavAdaptiv = false;
				this.hideBurger = true;
			}
		},
		computed: {
			page() {
				console.log(this.$route.meta.page);
				return this.$route.meta.page
			}
		},
		mounted(){
			if (this.page == 'account') {
				this.pageIndicator = false;
			} else if (this.page !== 'account') {
				this.pageIndicator = true;
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
			&__item>span{
				color: #fff;
				font-size: 24px;
				font-weight: 700;
				text-decoration: none;
				font-family: 'Gilroy-Bold';
			}
		}
	}
	@media (max-width: 1450px){
	}
	@media (max-width: 1200px){
		.header{
			width: 90%;
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

			&__logo{
				margin: auto;
				width: 20%;
			}
			&__additionally{
				width: 40%;
				margin: auto;
				padding-top: 40px;
			}
			.nav_adaptiv{
				width: 54%;
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

			&__logo{
				margin: auto;
				width: 30%;
			}
			&__additionally{
				width: 50%;
				margin: auto;
				padding-top: 40px;
			}
			.nav_adaptiv{
				width: 60%;

				&__close{
					width: 30px;
					height: 30px;
					right: 5px;
					top: 5px;
				}
				&__list{
					padding: 70px 0 0 50px;
				}
				&__item>span{
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
			.nav_adaptiv{
				&__item>span{
					font-size: 14px;
				}
			}
		}
	}
	@media (max-width: 367px){
		.header{

			&__additionally{
				width: 60%;
			}
			.nav_adaptiv{
				width: 70%;
			}
		}
	}
</style>

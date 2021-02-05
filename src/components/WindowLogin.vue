<template>
	<div class="login">
		<div class="login__wrapper">
			<div class="login__close">
				<div class="login__cross"></div>
			</div>
			<form class="login__form">
				<div class="login__title">
					<h3>Войти в личный кобинет</h3>
				</div>
				<div class="login__field form-group row">
				<div class="col-sm-12">
					<label for="name" class="login__label"><span>login</span></label>
					<input type="text" name="name" class="form-control login__input" placeholder="Иван" />
				</div>
				</div>
				<div class="login__field form-group row">
					<div class="col-sm-12">
						<label for="surname" class="login__label">
							<span>password</span>
						</label>
						<input type="password" name="surname" class="form-control login__input" placeholder="Иванович" />
					</div>
				</div>
				<div class="login__field form-group row">
					<div class="login__button col-sm-12">
						<button type="button" class="btn" @click='sendData' >Отправить</button>
					</div>
				</div>
			</form>
			</div>
	</div>
</template>

<script>
export default {
	name: 'WindowLogin',
	props: {
		msg: String
	},
	data() {
		return {
			loginData: { login: '', password: '' }
		}
	},
	methods: {
		sendData: () => {
			this.$store.dispatch('OPEN_LOGIN_MODAL')
		}
	},
	mounted() {}
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';
.login{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.9);
	display: flex;
	position: fixed;
	left: 0;
	top: 0;

	&__wrapper{
		width: 560px;
		height: auto;
		margin: auto;
		padding: 60px 20px;
		display: flex;
		position: relative;
		background-color: #fff;
	}
	&__form{
		width: 90%;
		margin: auto;
	}
	&__button{
		width: 100%;
		height: auto;
		text-align: center;
	}
	&__button>button{
		@include buttonColor(40%, #554991, #fff);
		/*display: block;*/
		margin: auto;
	}
	&__close{
		width: 30px;
		height: 30px;
		position: absolute;
		top: -10px;
		right: -10px;
		cursor: pointer;
		background-color: #fff;
		border: 2px solid #000;
		border-radius: 30px;
	}
	&__cross{
		width: 18px;
		height: 3px;
		transform: rotate(45deg);
		background-color: #000;
		position: relative;
		left: 5px;
		top: 11px;
	}
	&__cross::after{
		content: "";
		width: 3px;
		height: 18px;
		background-color: #000;
		position: absolute;
		left: 7px;
    top: -7px;
	}
}
</style>

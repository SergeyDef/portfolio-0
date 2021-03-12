<template>
	<div class="login">
		<div class="login__wrapper">
			<div class="login__close" @click="closeModalWindow">
				<div class="login__cross"></div>
			</div>
			<form class="login__form" @submit.prevent="sendData">
				<div class="login__title">
					<h3>Войти в личный кобинет</h3>
				</div>
				<div class="login__field form-group row">
					<div class="col-sm-12">
						<label for="name" class="login__label"><span>login</span></label>
						<input 
							type="text" 
							name="name" 
							class="form-control login__input" 
							placeholder="Иван"
							v-model.trim="loginData.login" />
					</div>
					<error-form v-if="$v.loginData.login.$dirty && !$v.loginData.login.required" :error="errorText.notificationText" :message="errorText.messageLength" />
				</div>
				<div class="login__field form-group row">
					<div class="col-sm-12">
						<label for="surname" class="login__label">
							<span>password</span>
						</label>
						<input 
							type="password" 
							name="surname" 
							class="form-control login__input" 
							placeholder=""
							v-model.trim="loginData.password" />
					</div>
					<error-form 
						v-if="$v.loginData.password.$dirty && !$v.loginData.password.required" 
						:error="errorText.notificationText" 
						:message="errorText.messageLength" />
					<error-form 
						v-if="!$v.loginData.password.minLength" 
						:error="errorText.notificationText" 
						:message="errorText.messagePassword" />
				</div>
				<div class="login__field form-group row">
					<div class="login__button col-sm-12">
						<button type="submit" class="btn" >Отправить</button>
					</div>
				</div>
			</form>
			</div>
	</div>
</template>

<script>
	import ErrorForm from '@/components/ErrorForm.vue'
	import { validationMixin } from 'vuelidate'
	import { required, minLength } from 'vuelidate/lib/validators'

export default {
	mixins: [validationMixin],
	name: 'WindowLogin',
	components: {
		ErrorForm
	},
	props: {
		msg: String
	},
	data() {
		return {
			loginData: { 
				login: null, 
				password: null 
			},
			closeModal: false,
			errorText: {
				notificationText: '*ошибка',
				messageLength: 'обязытельно для заполнение',
				messagePassword: 'недостаточно символов',
				messageError: 'неправильный логин или пароль',
			}
		}
	},
	methods: {
		closeModalWindow: function () {
			this.$store.commit('LOGIN_MODAL', this.closeModal);
		},
		sendData: function () {
			if (this.$v.$invalid) {
				this.$v.loginData.$touch();
			}
			this.$router.push('/personal_account');
		}
	},
	mounted() {
	},
	validations: {
		loginData: { 
			login: { required }, 
			password: { required, minLength: minLength(8) } 
		}
	}
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
	z-index: 99999999;

	&__wrapper{
		width: 560px;
		height: auto;
		margin: auto;
		padding: 60px 20px;
		display: flex;
		position: relative;
		z-index: 999999999;
		background-color: #fff;
	}
	&__form{
		width: 90%;
		margin: auto;
	}
	&__field{
		position: relative;
	}
	&__input{
		border-radius: 0;
		@include textContent(14px, 0.55, 300, #000, left, 'Gilroy-Medium');
	}
	&__input::-webkit-input-placeholder{
		@include textContent(14px, 1.55, 300, #525252, left, 'Gilroy-Light');
	}
	&__input:-moz-placeholder{
		@include textContent(14px, 1.55, 300, #525252, left, 'Gilroy-Light');
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
	&__error{
		@include errorInput();
	}
}
</style>

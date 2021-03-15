<template>
	<div class="modal">
		<div class="modal__wrapper">
			<div class="modal__close" @click="closeModalWindow">
				<div class="modal__cross"></div>
			</div>
			<form class="modal__form" @submit.prevent="sendData">
				<div class="modal__title">
					<h3>Войти в личный кобинет</h3>
				</div>
				<div class="modal__field form-group row">
					<div class="col-sm-12">
						<label for="name" class="modal__label"><span>Логин/почта/телефон</span></label>
						<input 
							type="text" 
							name="name" 
							class="form-control modal__input" 
							placeholder="Иван"
							v-model.trim="loginData.login" />
					</div>
					<error-form v-if="$v.loginData.login.$dirty && !$v.loginData.login.required" :error="errorText.notificationText" :message="errorText.messageLength" />
				</div>
				<div class="modal__field form-group row">
					<div class="col-sm-12">
						<label for="surname" class="modal__label">
							<span>Пароль</span>
						</label>
						<input 
							type="password" 
							name="surname" 
							class="form-control modal__input" 
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
				<div class="modal__field form-group row">
					<div class="col-sm-12">
						<label for="surname" class="modal__label">
							<span>Повторите пароль</span>
						</label>
						<input 
							type="password" 
							name="surname" 
							class="form-control modal__input" 
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
				<div class="modal__field form-group row mt-5">
					<div class="modal__button col-sm-12">
						<button type="submit" class="btn" >Войти</button>
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
				password: null,
				doublePassword: null,
			},
			closeModal: false,
			errorText: {
				notificationText: '*ошибка',
				messageLength: 'обязытельно для заполнение',
				messagePassword: 'недостаточно символов',
				messageError: 'неправильный логин или пароль',
				massageNotPassword: 'пароли не совпадают',
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

			let result = this.$v.loginData.login.required &&
			this.$v.loginData.password.required &&
			this.$v.loginData.password.minLength;

			if (result) {
				this.$router.push('/personal_account');
			}
		}
	},
	mounted() {
	},
	validations: {
		loginData: { 
			login: { required }, 
			password: { required, minLength: minLength(8) } ,
			doublePassword: { required }
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/styleForm.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>

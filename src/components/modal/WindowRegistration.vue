<template>
	<div class="modal">
		<div class="modal__wrapper registration">
			<div class="modal__close" @click="closeModalWindow">
				<div class="modal__cross"></div>
			</div>
			<form class="modal__form" @submit.prevent="sendData">
				<div class="modal__title">
					<span>Регистрация и оплата курса</span>
				</div>
				<div class="modal__field form-group row">
					<div class="col-sm-6 modal__container">
						<label for="name" class="modal__label"><span>Имя</span></label>
						<input 
							type="text" 
							name="name" 
							class="form-control modal__input" 
							placeholder="" 
							v-model.trim="userData.name"
							:class="$v.userData.name.$dirty && !$v.userData.name.required ? 'modal__error' : ''"/>
						<error-form 
							v-if="$v.userData.name.$dirty && !$v.userData.name.required" 
							:error="errorText.notificationText" 
							:message="errorText.messageLength" />
						<error-form 
							v-else-if="$v.userData.name.$dirty && !$v.userData.name.minLength" 
							:error="errorText.notificationText" 
							:message="errorText.messageName" />
						<div class="modal__login">
							<input 
								type="checkbox"
								checked="checked" 
								class="form-check-input" 
								name="name_box"
								:value="userData.phone"
								@click="test" 
								v-model="userData.login" />
						</div>
						<div class="modal__message px-2 py-1" >
							<span class="m-auto">выбор логина</span>
						</div>
					</div>
					<div class="col-sm-6 modal__container">
						<label for="surname" class="modal__label"><span>Фамилия</span></label>
						<input 
							type="text" 
							name="surname" 
							class="form-control modal__input" 
							placeholder=""
							v-model.trim="userData.surname"
							:class="$v.userData.surname.$dirty && (!$v.userData.surname.required || !$v.userData.surname.minLength) ? 'modal__error' : ''" />
						<error-form 
							v-if="$v.userData.surname.$dirty && !$v.userData.surname.required" 
							:error="errorText.notificationText" 
							:message="errorText.messageLength" />
						<error-form 
							v-else-if="$v.userData.surname.$dirty && !$v.userData.surname.minLength" 
							:error="errorText.notificationText" 
							:message="errorText.messageName" />
						<div class="modal__login">
							<input 
								type="checkbox"
								class="form-check-input" 
								name="surname_box"
								:value="userData.phone"
								@click="test" 
								v-model="userData.login" />
						</div>
						<div class="modal__message px-2 py-1" >
							<span class="m-auto">выбор логина</span>
						</div>
					</div>
				</div>
				<div class="modal__field form-group row">
					<div class="col-sm-6 modal__container">
						<label for="phone" class="modal__label"><span>Телефон</span></label>
						<input 
							type="text" 
							name="phone" 
							class="form-control modal__input" 
							placeholder="" 
							v-model.trim="userData.phone" 
							:class="$v.userData.phone.$dirty && (!$v.userData.phone.required || !$v.userData.phone.phone) ? 'modal__error' : ''" 
							/>
						<error-form 
							v-if="$v.userData.phone.$dirty && !$v.userData.phone.required" 
							:error="errorText.notificationText" 
							:message="errorText.messageLength" />
						<error-form v-else-if="$v.userData.phone.$dirty && !$v.userData.phone.phone" :error="errorText.notificationText" :message="errorText.messagePhone" />
						<div class="modal__login">
							<input 
								type="checkbox"
								checked="checked" 
								class="form-check-input" 
								name="phone_box"
								:value="userData.phone"
								@click="test" 
								v-model="userData.login" />
						</div>
						<div class="modal__message px-2 py-1" >
							<span class="m-auto">выбор логина</span>
						</div>
					</div>
					<div class="col-sm-6 modal__container">
						<label for="email" class="modal__label"><span>Email</span></label>
						<input 
							type="text" 
							name="email" 
							class="form-control modal__input" 
							placeholder="" 
							v-model.trim="userData.email" 
							:class="$v.userData.email.$dirty && (!$v.userData.email.required || !$v.userData.email.email) ? 'modal__error' : ''" />
						<error-form 
							v-if="$v.userData.email.$dirty && !$v.userData.email.required" 
							:error="errorText.notificationText" 
							:message="errorText.messageLength" />
						<error-form 
							v-else-if="$v.userData.email.$dirty && !$v.userData.email.email" 
							:error="errorText.notificationText" 
							:message="errorText.messageEmail" />
						<div class="modal__login">
							<input 
								type="checkbox"
								checked="checked" 
								class="form-check-input" 
								name="email_box"
								v-model="userData.login" />
						</div>
						<div class="modal__message px-2 py-1">
							<span class="m-auto">выбор логина</span>
						</div>
					</div>
				</div>
				<div class="modal__field form-group row">
					<div class="col-sm-12">
						<label for="password" class="modal__label">
							<span>Пароль</span>
						</label>
						<input 
							type="password" 
							name="password" 
							class="form-control modal__input" 
							placeholder="" 
							v-model.trim="userData.password" 
							:class="$v.userData.password.$dirty && (!$v.userData.password.required || !$v.userData.password.minLength) ? 'modal__error' : ''" />
						<error-form 
							v-if="$v.userData.password.$dirty && !$v.userData.password.required" 
							:error="errorText.notificationText" 
							:message="errorText.messageLength" />
						<error-form 
							v-else-if="$v.userData.password.$dirty && !$v.userData.password.minLength" 
							:error="errorText.notificationText" 
							:message="errorText.messagePassword" />
					</div>
				</div>
				<div class="modal__field form-group row">
					<div class="col-sm-12">
						<label for="repeatPassword" class="modal__label">
							<span>Повторите пароль</span>
						</label>
						<input 
							type="password" 
							name="repeatPassword" 
							class="form-control modal__input" 
							placeholder=""
							v-model.trim="userData.repeatPassword" 
							:class="$v.userData.repeatPassword.$dirty && (!$v.userData.repeatPassword.required || !$v.userData.repeatPassword.sameAsPassword) ? 'modal__error' : ''" />
						<error-form 
							v-if="$v.userData.repeatPassword.$dirty && !$v.userData.repeatPassword.required" 
							:error="errorText.notificationText" 
							:message="errorText.messageLength" />
						<error-form 
							v-else-if="$v.userData.repeatPassword.$dirty && !$v.userData.repeatPassword.sameAsPassword" 
							:error="errorText.notificationText" 
							:message="errorText.massageNotPassword" />
					</div>
				</div>
				<div class="modal__field modal__button-wrapper form-group row mt-5">
					<div class="modal__button col-sm-12">
						<button type="submit" class="btn" :disabled="!$v.userData.consent.$model">Перейти к оплате</button>
					</div>
				</div>
				<div class="form-group form-check modal__checkbox">
					<input 
						type="checkbox"
						checked="checked" 
						class="form-check-input" 
						name="check_box"
						v-model="userData.consent" />
					<label class="form-check-label" for="check_box">Согласие на обработтку данных</label>
					<error-form 
						v-if="!$v.userData.consent.$model" 
						:error="errorText.notificationText" 
						:message="errorText.messageConsent" />
				</div>
			</form>
			</div>
	</div>
</template>

<script>
	import { validationMixin } from 'vuelidate'
	import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
	import ErrorForm from '@/components/ErrorForm.vue'

export default {
	mixins: [validationMixin],
	name: 'WindowRegistration',
	components:{
		ErrorForm
	},
	props: {
		msg: String
	},
	data() {
		return {
			userData: { 
				name: null,
				surname: null,
				phone: null, 
				email: null,
				password: null,
				repeatPassword: null,
				consent: true,
				login: null,
			},
			closeModal: false,
			errorText: {
				notificationText: '*ошибка',
				messageLength: 'обязытельно для заполнение',
				messagePassword: 'недостаточно символов, не мение 8',
				messageName: 'недостаточно символов, не мение 3',
				messageError: 'неправильный логин или пароль',
				messageConsent: 'требуется Ваше согласие',
				massageNotPassword: 'пароли не совпадают',
				messagePhone: 'не корректный телефон',
				messageEmail: 'не корректный email',
			},
			indicatorMessage: false,
		}
	},
	methods: {
		test: function () {
			console.log(this.userData.login);
		},
		closeModalWindow: function () {
			this.$store.commit('REGISTRATION_WINDOW', this.closeModal);
		},
		sendData: function () {
			if (this.$v.$invalid) {
				this.$v.userData.$touch();
			}

			let result = this.$v.userData.name.required &&
				this.$v.userData.name.minLength &&
				this.$v.userData.surname.required &&
				this.$v.userData.surname.minLength &&
				this.$v.userData.phone.required &&
				this.$v.userData.phone.phone &&
				this.$v.userData.email.required &&
				this.$v.userData.email.email &&
				this.$v.userData.password.required &&
				this.$v.userData.password.minLength &&
				this.$v.userData.repeatPassword.required &&
				this.$v.userData.repeatPassword.sameAsPassword;

			if (result) {
				this.$store.commit('REGISTRATION_DATA', this.userData);
				this.$store.commit('REGISTRATION_WINDOW', false);
				this.$store.commit('PAYMENT_WINDOW', true);
				
				this.userData.name = '';
				this.userData.surname = '';
				this.userData.phone = '';
				this.userData.email = '';
				this.userData.password = '';
				this.userData.repeatPassword = '';

				this.$v.userData.$reset();
			}
		},
	},
	mounted() {
	},
	validations: {
		userData: { 
			name: { required, minLength: minLength(3) }, 
			surname: { required, minLength: minLength(3) } ,
			phone: { required, phone: val => {
				return /^\d[\d() -]{4,14}\d$/.test(val)
				} 
			},
			email: { required, email }, 
			password: { required, minLength: minLength(8) },
			repeatPassword: { required, sameAsPassword: sameAs('password') },
			consent: {},
		}
	}
}
</script>

<style scoped lang="scss">
	@import '@/scss/_mixins.scss';
	@import '@/scss/styleForm.scss';
	@import '~bootstrap/dist/css/bootstrap.min.css';

	.registration{
		width: 660px;
	}
	@media (max-width: 967px){
		.registration{
			width: 600px;
		}
	}
	@media (max-width: 667px){
		.registration{
			width: 460px;
		}
	}
	@media (max-width: 567px){
		.registration{
			width: 460px;
		}
	}
	@media (max-width: 467px){
		.registration{
			width: 360px;
		}
	}
	@media (max-width: 367px){
		.registration{
			width: 300px;
		}
	}
</style>

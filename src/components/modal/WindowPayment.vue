<template>
	<div class="modal">
		<div class="modal__wrapper registration">
			<div class="modal__close" @click="closeModalWindow">
				<div class="modal__cross"></div>
			</div>
			<form class="modal__form">
				<div class="modal__title">
					<h3>Oплата курса</h3>
				</div>
				<div class="modal__field form-group row">
					<div class="modal__button col-sm-12">
						<button type="submit" class="btn" >Войти</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { validationMixin } from 'vuelidate'
	import {} from 'vuelidate/lib/validators'

export default {
	mixins: [validationMixin],
	name: 'WindowPayment',
	components:{
	},
	props: {
		msg: String
	},
	data() {
		return {
			// dataPaymant: []
		}
	},
	methods: {
		closeModalWindow: function () {
			this.$store.commit('PAYMENT_WINDOW', false);
		},
		sendData: function () {
			if (this.$v.$invalid) {
				this.$v.loginData.$touch();
			}

			let result = true;

			if (result) {
				this.$router.push('/personal_account');
				this.$store.commit('PAYMENT_WINDOW', false);
			}
		}
	},
	mounted() {
	},
	validations: {
		// dataPaymant: {}
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
</style>

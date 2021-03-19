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

				</div>
			</form>
		</div>
	</div>
</template>

<script>
	// import { validationMixin } from 'vuelidate'
	// import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
	// import ErrorForm from '@/components/ErrorForm.vue'

export default {
	name: 'WindowPayment',
	components:{
	},
	props: {
		msg: String
	},
	data() {
		return {}
	},
	methods: {
		closeModalWindow: function () {
			this.$store.commit('PAYMENT_WINDOW', false);
		},
	},
	mounted() {
	},
	validations: {
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

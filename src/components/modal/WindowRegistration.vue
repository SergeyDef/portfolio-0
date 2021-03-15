<template>
	<div class="modal">
		<div class="modal__wrapper">
			<div class="modal__close" @click="closeModalWindow">
				<div class="modal__cross"></div>
			</div>
			<form class="modal__form">
				<div class="modal__title">
					<h3>Регистрация и оплата курса</h3>
				</div>
				<div class="modal__field form-group row">
					<div class="col-sm-12">
						<label for="name" class="login__label"><span>Имя</span></label>
						<input type="text" name="name" class="form-control login__input" placeholder="Иван" />
					</div>
				</div>
				<div class="modal__field form-group row">
					<div class="col-sm-12">
						<label for="name" class="login__label"><span>Фамилия</span></label>
						<input type="text" name="name" class="form-control login__input" placeholder="Иван" />
					</div>
				</div>
				<div class="modal__field form-group row">
					<div class="col-sm-12">
						<label for="surname" class="modal__label">
							<span>Пароль</span>
						</label>
						<input type="password" name="surname" class="form-control modal__input" placeholder="Иванович" />
					</div>
				</div>
				<div class="modal__field form-group row">
					<div class="col-sm-12">
						<label for="surname" class="modal__label">
							<span>Повторите пароль</span>
						</label>
						<input type="password" name="surname" class="form-control modal__input" placeholder="Иванович" />
					</div>
				</div>
				<div class="modal__field form-group row mt-5">
					<div class="modal__button col-sm-12">
						<button type="button" class="btn" @click='sendData' >Перейти к оплате</button>
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
			loginData: { login: '', password: '' },
			closeModal: false
		}
	},
	methods: {
		closeModalWindow: function () {
			this.$store.commit('REGISTRATION', this.closeModal);
		},
		sendData: () => {
		}
	},
	mounted() {}
}
</script>

<style scoped lang="scss">
	@import '@/scss/_mixins.scss';
	@import '@/scss/styleForm.scss';
	@import '~bootstrap/dist/css/bootstrap.min.css';
</style>

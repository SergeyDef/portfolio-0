<template>
	<div class="footer">
		<div class="footer__content">
			<div class="footer__lists">

				<div class="footer__block footer__block_logo">
					<div class="footer__logo">
						<img src="@/assets/footer/logoFooter.png">
					</div>
					<div class="footer__networks">
<!-- 						<a href="">
							<svg class="t-sociallinks__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
								<desc>Facebook</desc>
								<path style="fill:#525252;" d="M47.761,24c0,13.121-10.638,23.76-23.758,23.76C10.877,47.76,0.239,37.121,0.239,24c0-13.124,10.638-23.76,23.764-23.76C37.123,0.24,47.761,10.876,47.761,24 M20.033,38.85H26.2V24.01h4.163l0.539-5.242H26.2v-3.083c0-1.156,0.769-1.427,1.308-1.427h3.318V9.168L26.258,9.15c-5.072,0-6.225,3.796-6.225,6.224v3.394H17.1v5.242h2.933V38.85z"></path>
							</svg>
						</a> -->
						<a href="https://vk.com/adept.study">
							<svg class="t-sociallinks__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="25px" height="25px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xml:space="preserve">
								<desc>VK</desc>
								<path style="fill:#525252;" d="M47.761,24c0,13.121-10.639,23.76-23.76,23.76C10.878,47.76,0.239,37.121,0.239,24c0-13.123,10.639-23.76,23.762-23.76C37.122,0.24,47.761,10.877,47.761,24 M35.259,28.999c-2.621-2.433-2.271-2.041,0.89-6.25c1.923-2.562,2.696-4.126,2.45-4.796c-0.227-0.639-1.64-0.469-1.64-0.469l-4.71,0.029c0,0-0.351-0.048-0.609,0.106c-0.249,0.151-0.414,0.505-0.414,0.505s-0.742,1.982-1.734,3.669c-2.094,3.559-2.935,3.747-3.277,3.524c-0.796-0.516-0.597-2.068-0.597-3.171c0-3.449,0.522-4.887-1.02-5.259c-0.511-0.124-0.887-0.205-2.195-0.219c-1.678-0.016-3.101,0.007-3.904,0.398c-0.536,0.263-0.949,0.847-0.697,0.88c0.31,0.041,1.016,0.192,1.388,0.699c0.484,0.656,0.464,2.131,0.464,2.131s0.282,4.056-0.646,4.561c-0.632,0.347-1.503-0.36-3.37-3.588c-0.958-1.652-1.68-3.481-1.68-3.481s-0.14-0.344-0.392-0.527c-0.299-0.222-0.722-0.298-0.722-0.298l-4.469,0.018c0,0-0.674-0.003-0.919,0.289c-0.219,0.259-0.018,0.752-0.018,0.752s3.499,8.104,7.573,12.23c3.638,3.784,7.764,3.36,7.764,3.36h1.867c0,0,0.566,0.113,0.854-0.189c0.265-0.288,0.256-0.646,0.256-0.646s-0.034-2.512,1.129-2.883c1.15-0.36,2.624,2.429,4.188,3.497c1.182,0.812,2.079,0.633,2.079,0.633l4.181-0.056c0,0,2.186-0.136,1.149-1.858C38.281,32.451,37.763,31.321,35.259,28.999"></path>
							</svg>
						</a>

<!-- 						<a href="">
							<svg class="t-sociallinks__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 30 30" xml:space="preserve">
								<desc>Odnoklassniki</desc>
								<path style="fill:#525252;" d="M15.0010773,29.9969026 C6.71476662,29.9969026 -0.000942760943,23.2811932 -0.000942760943,14.9979126 C-0.000942760943,6.71261195 6.71476662,-0.00107736853 15.0010773,-0.00107736853 C23.2823378,-0.00107736853 29.9990572,6.71261195 29.9990572,14.9979126 C29.9990572,23.2811932 23.2833479,29.9969026 15.0010773,29.9969026 Z M14.9990572,9.16346042 C15.9845639,9.16346042 16.7857961,9.96559598 16.7857961,10.9501993 C16.7857961,11.9366092 15.9845639,12.7378415 14.9990572,12.7378415 C14.0126473,12.7378415 13.2114151,11.9366092 13.2114151,10.9501993 C13.2114151,9.96378937 14.0126473,9.16346042 14.9990572,9.16346042 L14.9990572,9.16346042 L14.9990572,9.16346042 Z M19.3159557,10.9501993 C19.3159557,8.56908521 17.3810746,6.63149426 14.9990572,6.63149426 C12.6170398,6.63149426 10.6803522,8.56908521 10.6803522,10.9501993 C10.6803522,13.3313134 12.6170398,15.2670977 14.9990572,15.2670977 C17.3810746,15.2670977 19.3159557,13.3313134 19.3159557,10.9501993 Z M16.7451474,18.7899904 C17.6249672,18.5876499 18.472268,18.242587 19.2527243,17.752092 C19.8443896,17.3790267 20.0232441,16.5976672 19.6510821,16.0069052 C19.2771135,15.4152399 18.4985739,15.2363853 17.9058953,15.6085473 C16.1354159,16.7214201 13.8590853,16.7214201 12.0904126,15.6085473 C11.4987473,15.2372886 10.7164844,15.4152399 10.3461291,16.0069052 C9.97306376,16.5967639 10.1519183,17.3790267 10.741777,17.752092 C11.5222332,18.2416837 12.3704374,18.5903598 13.2493539,18.7899904 L10.8348175,21.2036235 C10.3416125,21.6977317 10.3416125,22.5007706 10.8348175,22.9930722 C11.0805167,23.2387714 11.4048035,23.3634276 11.7290902,23.3634276 C12.053377,23.3634276 12.3776638,23.2387714 12.6242663,22.9930722 L14.995444,20.6209912 L17.3684284,22.9939756 C17.8625366,23.4871805 18.6637689,23.4871805 19.1560705,22.9939756 C19.6519854,22.4998673 19.6519854,21.6968284 19.1560705,21.2054301 L16.7451474,18.7899904 L16.7451474,18.7899904 L16.7451474,18.7899904 Z"></path>
							</svg>
						</a> -->

<!-- 						<a href="">
							<svg class="t-sociallinks__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 0 30 30" xml:space="preserve">
								<desc>Instagram</desc>
								<path style="fill:#525252;" d="M15,11.014 C12.801,11.014 11.015,12.797 11.015,15 C11.015,17.202 12.802,18.987 15,18.987 C17.199,18.987 18.987,17.202 18.987,15 C18.987,12.797 17.199,11.014 15,11.014 L15,11.014 Z M15,17.606 C13.556,17.606 12.393,16.439 12.393,15 C12.393,13.561 13.556,12.394 15,12.394 C16.429,12.394 17.607,13.561 17.607,15 C17.607,16.439 16.444,17.606 15,17.606 L15,17.606 Z"></path>
								<path style="fill:#525252;" d="M19.385,9.556 C18.872,9.556 18.465,9.964 18.465,10.477 C18.465,10.989 18.872,11.396 19.385,11.396 C19.898,11.396 20.306,10.989 20.306,10.477 C20.306,9.964 19.897,9.556 19.385,9.556 L19.385,9.556 Z"></path>
								<path style="fill:#525252;" d="M15.002,0.15 C6.798,0.15 0.149,6.797 0.149,15 C0.149,23.201 6.798,29.85 15.002,29.85 C23.201,29.85 29.852,23.202 29.852,15 C29.852,6.797 23.201,0.15 15.002,0.15 L15.002,0.15 Z M22.666,18.265 C22.666,20.688 20.687,22.666 18.25,22.666 L11.75,22.666 C9.312,22.666 7.333,20.687 7.333,18.28 L7.333,11.734 C7.333,9.312 9.311,7.334 11.75,7.334 L18.25,7.334 C20.688,7.334 22.666,9.312 22.666,11.734 L22.666,18.265 L22.666,18.265 Z"></path>
							</svg>
						</a> -->
					</div>
					<div class="footer__adept">
						<span>© 2020 Adept</span>
					</div>
				</div>

				<div class="footer__block">
					<div class="footer__title">
						<h5>курс для репетиторов</h5>
					</div>
					<div class="footer__item">
						<ul>
							<li>
								<span>Если у Вас есть вопросы по курсу,</span>
						</li>
						<li>
							<span>пишите нам:</span>
						</li>
						<li>
							<span>adept.course@yandex.ru</span>
						</li>
						</ul>
					</div>
				</div>

				<div class="footer__block">
					<div class="footer__title">
						<h5>Мы пишем для вас</h5>
						<h5>много интересного</h5>
					</div>
					<div class="footer__item">
						<ul>
							<li>
								<a href="https://vk.com/adept.study">Присоединяйтесь к adept</a>
							</li>
							<li>
								<a href="https://zen.yandex.ru/adept">Читайте нас и обсуждайте</a>
							</li>
						</ul>
					</div>
				</div>

			</div>
			<div class="footer__regulations">
<!-- 				<div class="footer__direction">
					<span>правила использования ресурса</span>
				</div> -->
				<div class="footer__direction">
					<span @click="privacyPolicy">политика конфиденциальности</span>
				</div>
			</div>
		</div>
		<div class="feedback">
			<form id="feedbackForm" class="feedback__form" @submit.prevent="sendEmail" method="post">
				<div class="feedback__title">
					<h3>Связаться с нами</h3>
				</div>
				<div class="feedback__field form-group row">
				<div class="col-sm-12">
					<label for="name" class="feedback__label"><span>Имя:</span></label>
					<input
						type="text" 
						name="name" 
						class="form-control feedback__input" 
						placeholder="Иван"
						v-model.trim="feedback.name"
						:class="$v.feedback.name.$error ? 'feedback__error' : ''" />
					<div class="error" v-if="$v.feedback.name.$error">
						<div class="error__notification"><span>*ошибка</span></div>
						<div class="error__message"><span>обязытельно для заполнение</span></div>
					</div>
				</div>
				</div>
				<div class="feedback__field form-group row">
					<div class="col-sm-12">
						<label for="surname" class="feedback__label">
							<span>Фамилия:</span>
						</label>
						<input
							type="text" 
							name="surname" 
							class="form-control feedback__input" 
							placeholder="Иванович" 
							v-model.trim="feedback.surname"
							:class="$v.feedback.surname.$error? 'feedback__error' : ''" />
					</div>
					<div class="error" v-if="$v.feedback.surname.$error">
						<div class="error__notification"><span>*ошибка</span></div>
						<div class="error__message"><span>обязытельно для заполнение</span></div>
					</div>
				</div>
				<div class="feedback__field form-group row">
					<div class="col-sm-12">
						<label for="contact" class="feedback__label">
							<span>Телефон или email:</span>
						</label>
						<input 
							type="text" 
							name="contact" 
							class="form-control feedback__input" 
							placeholder=""
							v-model.trim="feedback.contact"
							:class="($v.feedback.contact.$dirty && !$v.feedback.contact.required) || 
							($v.feedback.contact.$dirty && (!$v.feedback.contact.email && !$v.feedback.contact.phone)) ? 'feedback__error' : ''" />
					</div>
					<div class="error" v-if="$v.feedback.contact.$dirty && !$v.feedback.contact.required">
						<div class="error__notification"><span>*ошибка</span></div>
						<div class="error__message"><span>обязытельно для заполнение</span></div>
					</div>
					<div class="error" v-else-if="$v.feedback.contact.$dirty && (!$v.feedback.contact.email && !$v.feedback.contact.phone)">
						<div class="error__notification"><span>*ошибка</span></div>
						<div class="error__message"><span>не корректный email/телефон</span></div>
					</div>
				</div>
					<div class="feedback__field form-group row">
						<div class="feedback__label col-sm-12">
							<label for="massage" class="feedback__label">
								<span>Напишите нам:</span>
							</label>
							<textarea 
								name="massage" 
								placeholder="Ваше сообщение" 
								rows="4" 
								cols="25" 
								class="feedback__massage form-control"
								v-model="feedback.massage"
								:class="$v.feedback.massage.$error ? 'feedback__error' : ''"></textarea>
						</div>
						<div class="error" v-if="$v.feedback.massage.$error">
							<div class="error__notification"><span>*ошибка</span></div>
							<div class="error__message"><span>обязытельно для заполнение</span></div>
						</div>
					</div>
					<div class="feedback__field form-group row">
						<div class="feedback__button col-sm-12">
							<input 
								type="submit" 
								class="btn" 
								name="" 
								value="Отправить" 
								:disabled="!$v.feedback.consent.$model"/>
						</div>
					</div>
					<div class="form-group form-check feedback__checkbox">
						<input 
							type="checkbox"
							checked="checked" 
							class="form-check-input" 
							name="check_box"
							v-model="feedback.consent" />
						<label class="form-check-label" for="check_box">Согласие на обработтку данных</label>
						<div class="error" v-if="!$v.feedback.consent.$model">
							<div class="error__notification"><span>*ошибка</span></div>
							<div class="error__message error__direction"><span>политика конфиденциальности</span></div>
						</div>
					</div>
			</form>
		</div>
		<div class="modal" v-if="answerTrue">
			<div class="modal__wrapper">
				<span class="modal__block">{{ answerText }}</span>
			</div>
		</div>
	</div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
	mixins: [validationMixin],
	name: 'FooterSection',
	components: {
	},
	data() {
		return {
			eroors: [],
			feedback: {
				name: null,
				surname: null,
				contact: null,
				massage: null,
				consent: true,
			},
			answerTrue: false,
			answerText: null
		}
	},
	methods: {
		sendEmail: function () {
			if (this.$v.$invalid) {
				this.$v.feedback.$touch();
			}
			let result = this.$v.feedback.name.required && 
			this.$v.feedback.surname.required && 
			this.$v.feedback.contact.required && 
			(this.$v.feedback.contact.email || this.$v.feedback.contact.phone) && 
			this.$v.feedback.massage.required

			if (result) {
				let form = this.feedback;
				this.$store.dispatch('SET_FORM', form); 
				this.answerTrue = this.$store.getters.ANSWER;

					let notHappily = "Cпасибо ваше сообщение отправлено, мы свяжемся с вами в ближайшее время";

					this.answerText = notHappily;
					this.answerTrue = true;
					setTimeout(() => this.answerTrue = false, 4000);

					this.feedback.name = '';
					this.feedback.surname = '';
					this.feedback.contact = '';
					this.feedback.massage = '';

					this.$v.feedback.$reset();
			} 
		},
		privacyPolicy: function () {
			this.$router.push( '/privacy_policy' );
		}
	},
	maunted() {
	},
	validations: {
		feedback: {
			name: { required },
			surname: { required },
			contact: { required, email, phone: val => {
				return /^\d[\d() -]{4,14}\d$/.test(val)
			} 
		},
			massage: { required },
			consent: {  }
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

	.footer{
		background-color: #111111;
		padding: 75px 0;
		display: flex;
		justify-content: space-between;

		&__content{
			width: 60%;
			padding-left: 15%;
		}
		&__lists{
			width: 100%;
			display: flex;
		}
		&__block{
			width: 29%;
			margin: 20px 2%;
		}
		&__logo{
			width: 120px;
			height: auto;
		}
		&__logo>img{
			width: 100%;
			height: auto;
		}
		&__networks{
			width: 100%;
			display: flex;
		}
		&__networks>a{
			width: 25px;
			height: 25px;
			margin-top: 30px;
			display: block;
			margin-right: 4px;
			text-decoration: none;
		}
		&__adept{
			width: 100%;
			margin-top: 21px;
		}
		&__adept>span{
			@include textContent(12px, 1.55, 300, #525252, left, 'Gilroy-Light');
		}
		&__title{
			width: 100%;
			margin-bottom: 14px;
		}
		&__title>h5{
			@include textContent(16px, 1.35, 600, #525252, left, 'Gilroy-ExtraBold');
			margin: 0;
			text-transform: uppercase;
		}
		&__item{
			width: 100%;
		}
		&__item>ul{
			padding: 0;
			margin: 0;
		}
		&__item>ul>li{
			padding: 0;
			margin: 0;
			list-style-type: none;
		}
		&__item>ul>li>a{
			@include textContent(14px, 1.55, 300, #fff, left, 'Gilroy-Bold');
			padding: 0;
			margin: 0;
			text-decoration: none;
		}
		&__item>ul>li>span{
			@include textContent(14px, 1.55, 300, #fff, left, 'Gilroy-Bold');
			padding: 0;
			margin: 0;
		}
		&__regulations{
			width: 100%;
			display: flex;
			justify-content: space-around;
		}
		&__direction{
			width: 50%;
			height: 40px;
			padding-top: 10%;
			text-align: left;
		}
		&__direction>span{
			@include textContent(14px, 1.55, 300, #fff, left, 'Gilroy-Bold');
			cursor: pointer;
		}
		&__direction>span:hover{
			color: #525252;
		}
		.feedback{
			position: relative;
			width: 35%;
			padding: 0 10% 0 2%;;

			&__form{
				width: 100%;
			}

			&__title{
				width: 100%;
				text-align: center;
				padding: 0 10px;
			}
			&__title>h3{
				@include textContent(18px, 1.35, 600, #525252, center, 'Gilroy-ExtraBold');
				text-transform: uppercase;
			}
			&__field{
				position: relative;
			}
			&__label>span{
				@include textContent(14px, 1.55, 300, #fff, left, 'Gilroy-Bold');
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
			&__massage{
				color: #525252;
				font-size: 14px;
				font-family: 'Gilroy-Medium';
				border-radius: 0;
			}
			&__massage::-webkit-input-placeholder{
				@include textContent(14px, 1.55, 300, #525252, left, 'Gilroy-Light');
			}
			&__massage:-moz-placeholder{
				@include textContent(14px, 1.55, 300, #525252, left, 'Gilroy-Light');
			}
			&__button{
				margin-top: 20px;
				width: 100%;
				text-align: center;
			}
			&__button>input{
				@include buttonColor(40%, #fff, #000);
				margin: auto;
				position: relative;
			}
			&__checkbox>label{
				@include textContent(14px, 1.55, 300, #fff, left, 'Gilroy-Bold');
			}
			&__error{
				@include errorInput();
			}
			.error{
				display: flex;
				justify-content: space-between;
				position: absolute;
				left: 15px;
				bottom: -23px;
				width: 90%;

				&__notification>span{
					@include textContent(12px, 1.55, 300, #f80000, left, 'Gilroy-Bold');
				}
				&__message{
					@include textContent(12px, 1.55, 300, #f80000, left, 'Gilroy-Bold');
				}
			}
		}
		&__counter{
			z-index: 999999;
			width: 50px;
			height: 100px;
			background-color: #fff;
		}
	}
	.modal{
		position: fixed;
		z-index: 99999999;
		padding-top: 100px;
		left: 0;
		top: 0;
		display: flex;
		height: 100%;
		width: 100%;
		overflow: auto;
		background-color: rgb(0,0,0);
		background-color: rgba(0,0,0,0.5);

		&__wrapper{
			width: 460px;
			height: 200px;
			padding: 20px;
			background-color: #fff;
			margin: 0 auto;
			display: flex;
			border: 1px solid rgba(0,0,0,.2);
		}
		&__block{
			@include textContent(1.2rem, 1.55, 600, #000, center, "Gilroy-Bold");
			display: block;
			width: 90%;
			margin: auto;
		}
	}
	@media (max-width: 1600px){
		.footer{

			&__content{
				padding-left: 12%;
			}
			.feedback{
				padding: 0 8% 0 2%;
			}
		}
	}
	@media (max-width: 1400px){
		.footer{

			&__content{
				width: 65%;
				padding-left: 10%;
			}
			.feedback{
				padding: 0 8% 0 2%;
			}
		}
	}
	@media (max-width: 1250px){
		.footer{

			&__content{
				padding-left: 4%;
			}
			&__block{
				width: 36%;
			}
			&__block_logo{
				width: 22%;
			}

			.feedback{
				flex-direction: column;
				padding: 0 4% 0 1%;
			}
		}
		.modal{

			&__wrapper{
				width: 400px;
				height: 160px;
			}
			&__block{
				font-size: 1rem;
			}
		}
	}
	@media (max-width: 967px){
		.footer{
			flex-direction: column;

			&__content{
				width: 90%;
				margin: auto;
				padding: 0;
				order: 1;
			}
			&__direction{
				padding-top: 0;
			}
			&__direction>span{
			}
			.feedback{
				width: 460px;
				padding: 0;
				margin: auto;
				order: 0;

				&__button>button{
					width: 40%;
					height: 45px;
				}
			}
		}
	}
	@media (max-width: 667px){
		.footer{
			flex-direction: column;

			&__content{
				width: 90%;
				margin: auto;
				padding: 0;
				order: 1;
			}
			&__direction{
				padding-top: 0;
			}
			.feedback{
				width: 460px;
				padding: 0;
				margin: auto;
				order: 0;

				&__button>button{
					width: 40%;
					height: 45px;
				}
			}
		}
		.modal{

			&__wrapper{
				width: 340px;
				height: 120px;
			}
			&__block{
				font-size: 0.8rem;
			}
		}
	}
	@media (max-width: 467px){
		.footer{
			padding-bottom: 150px;
			
			&__content{
				order: 1;
			}
			&__lists{
				padding-top: 30px;
				flex-direction: column;
				order: 123;
			}
			&__block{
				width: 350px;
				margin: auto;
				margin-bottom: 30px;
			}

			&__regulations{
				flex-direction: column;
			}
			&__direction{
				padding: 0;
				width: 100%;
				text-align: center;
			}
			&__direction>span{
			}
			.feedback{
				width: 350px;
				padding: 0;
				margin: auto;
				order: 0;

				&__button>button{
					width: 55%;
					height: 45px;
					font-size: 0.85rem;
				}
			}
		}
	}
	@media (max-width: 365px){
		.footer{
		
			.feedback{
				width: 280px;
			}
		}
	}
</style>

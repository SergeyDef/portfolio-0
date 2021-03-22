<template>
		<div class="container">
			<div class="row user">
				<div class="col-5 col-xl-5 user__wrapper_photo">
					<div class="user__photo">
						<img src="@/assets/header/ava.svg" alt="user photo">
					</div>
				</div>
				<div class="user__name col-7 col-xl-7">
					<span>Иван Петрович</span>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		name: 'account-header',
		props: {
			msg: String
		},
		data(){
			return{
			}
		},
		methods: {
		}
	}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
.container{
	width: 100%;
}
.user{
	width: 100%;
	height: 100%;

	&__wrapper_photo{
		display: flex;
	}
	&__photo{
		width: 45px;
		height: 45px;
		margin: auto;
		border-radius: 20px;
		overflow: hidden;
		cursor: pointer;
	}

	&__photo>img{
		width: 100%;
		height: 100%;
	}
	&__name{
		display: flex;
	}
	&__name>span{
		@include textContent(1rem, 1.5, 300, #000, left, 'Gilroy-Medium');
		margin: auto 0;
	}
}
	@media (max-width: 1450px){

	}
	@media (max-width: 1200px){

	}
	@media (max-width: 967px){

	}
	@media (max-width: 667px){

	}
	@media (max-width: 467px){

	}
	@media (max-width: 367px){

	}
</style>

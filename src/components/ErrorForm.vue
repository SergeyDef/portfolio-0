<template>
	<div class="error">
		<div class="error__notification"><span>{{ error }}</span></div>
		<div class="error__message"><span>{{ message }}</span></div>
	</div>
</template>

<script>
	export default {
		name: 'ErrorForm',
		props: {
			error: {
				type: String,
				required: true,
			},
			message: {
				type: String,
				required: true,
			}
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

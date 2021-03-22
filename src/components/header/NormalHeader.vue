<template>
		<div class="">
			<div class="read">
				<a href="https://zen.yandex.ru/adept"><span>Читайте нас!</span></a>
			</div>
		</div>
</template>

<script>
	export default {
		name: 'normal-header',
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

	.read{
		width: 70%;
		margin: auto 0;
		display: flex;
	}
	.read>a{
		margin: 0;
		border: solid 3px #0056d3;
		border-radius: 0;
		width: 100%;
		display: flex;
		padding: 8px 30px;
		text-decoration: none;
		font-family: 'Gilroy-Medium';
	}
	.read>a>span{
		margin: auto;
		color: #000000;
		font-weight: 400;
	}

		
	@media (max-width: 1450px){
		.read{
			width: 90%;
		}
	}
	@media (max-width: 1200px){
		.read{
			width: 100%;
		}
	}
	@media (max-width: 967px){
		.read{
			margin: auto;
		}
		.read>a>span{
			font-size: 16px;
		}
	}
	@media (max-width: 667px){
		.read{
			margin: auto;
		}
	}
	@media (max-width: 467px){
		.read{
			width: 100%;
			margin: auto;
		}
	}
	@media (max-width: 367px){
	}
</style>

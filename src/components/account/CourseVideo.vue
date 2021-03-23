<template>
	<main>
		<section 
			class="video course px-2 py-3 mb-5" 
			v-for="video in videos"
			:key="video.id">
			<div class="video__title px-3">
				<h1>{{ video.title }}</h1>
			</div>
				<hr class="video__line my-1" />
			<div class="video__discription">
				<h2>{{ video.discription }}</h2>
			</div>
			<video class="video__wrapper w-100 h-75 px-1" controls="controls" :poster="video.images">
				<source :src="video.video" type="video/duel.mp4">
			</video>
		</section>
	</main>
</template>

<script>
export default {
	name: 'course-video',
	props: ['course'],
	data(){
		return{
			videos: [],
		}
	},
	methods: {
	},
	mounted(){
			let getVideo = this.$store.getters.GET_VIDEO;
			this.videos = getVideo;
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';
	.video{
		width: 100%;
		min-height: 300px;
		background-color: #fff;

		&__title{
			@include textContent(0.7rem, 1.23, 600, #000, left, 'Gilroy-ExtraBold');
		}
		&__wrapper{
			width: 100%;
			height: auto;
		}
		&__block{
			cursor: pointer;
		}
		&__block:hover{
			box-shadow: inset 0px 0px 5px 3px rgba(0,0,0,0.2);
		}
		&__icon{
		width: 80px;
		height: 80px;
		margin: auto;
		}
		&__icon>img{
			width: 80px;
			height: 80px;
		}
		&__name{
			height: 100%;
			display: flex;
		}
		&__name>h3{
			@include textContent(24px, 1.5, 300, #000, left, 'Gilroy-Medium');
			margin: auto 0;
		}
	}
	@media (max-width: 1360px){
	}
	@media (max-width: 1200px){
		.video{
			width: 90%;
		}
	}
	@media (max-width: 967px){
		.account{
			margin-top: 35px;
		}
	}
	@media (max-width: 780px){
		.video{
			height: 255px;
			margin-bottom: 35px;
		}
	}

	@media (max-width: 467px){		
		.video{
			height: 240px;
			margin-bottom: 30px;
		}
	}
	@media (max-width: 365px){
		.video{
			height: 220px;
			margin-bottom: 20px;
		}
	}
</style>

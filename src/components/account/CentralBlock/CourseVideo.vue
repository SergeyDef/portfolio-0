<template>
	<main>
		<section 
			class="video course px-2 py-3 mb-5" 
			v-for="video in videos"
			:key="video.id">
			<div class="video__title px-3">
				<h1>{{ video.titleVideo }}</h1>
			</div>
				<hr class="video__line my-1" />
			<div class="video__discription py-3 px-2">
				<p v-for="item in video.discription" :key="item.id">{{item.text}}</p>
			</div>
			<div class="video__block">
				<video class="w-75 h-50 px-1 m-auto" controls="controls" :poster="video.images">
					<source :src="video.video" type="video/duel.mp4">
				</video>
			</div>
			<div class="video__bonuses px-2" v-for="item in video.bonuses" :key="item.id">
				<a :href="item.link">{{item.textBonus}}</a>
			</div>
			<div class="video__button mt-4">
				<button type="button" class="btn">Следующий урок</button>
			</div>
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

		&__title>h1{
			@include textContent(2rem, 1.23, 600, #000, left, 'Gilroy-ExtraBold');
		}
		&__discription{
			width: 100%;
			height: auto;
		}
		&__discription>p{
			@include textContent(1rem, 1.23, 500, #000, left, 'Gilroy-Medium');
			margin: 0;
		}
		&__block{
			width: 100%;
			text-align: center;
		}
		&__bonuses>a{
			text-decoration: none;
			color: #0056d3;
		}
		&__button>button{
			@include buttonWhite(30%);
		}
	}
	@media (max-width: 1360px){
	}
	@media (max-width: 1200px){
	}
	@media (max-width: 967px){
	}
	@media (max-width: 780px){
	}

	@media (max-width: 467px){		
	}
	@media (max-width: 365px){
	}
</style>

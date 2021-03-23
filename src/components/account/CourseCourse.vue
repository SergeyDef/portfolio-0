<template>
	<main>
		<section 
			class="video course px-2 py-3 mb-5" 
			v-for="course in courses"
			:key="course.id">
			<div class="video__title px-3">
				<h2>{{ course.title }}</h2>
			</div>
				<hr class="video__line my-1" />
			<ul  class="video__wrapper w-100 container-fluid px-1">
				<li 
					v-for="item in course.lessons" 
					:key="item.id"  
					class="video__block row my-3 py-2"
					:id="item.id"
					@click="showVideo">
					<div class="col-sm-2 video__icon">
						<img :src="item.images">
					</div>
					<div class="col-xl-10">
						<div class="video__name">
							<h3>{{ item.titleVideo }}</h3>
						</div>
					</div>
				</li>
			</ul>
		</section>
	</main>
</template>

<script>
export default {
	name: 'course-course',
	props: ['course'],
	data(){
		return{
			courses: [],
		}
	},
	methods: {
		showVideo: function () {
			// let link = event.target;
			// let id = link.getAttribute('id');
			// console.log(id);
			this.$router.push('personal_account/video');
		}
	},
	mounted(){
		let getCourse = this.$store.getters.GET_COURSE;
		this.courses = getCourse;
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

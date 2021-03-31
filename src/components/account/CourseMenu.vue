<template>
	<nav class="menu">
		<ul class="menu__block nav flex-column mt-5">
			<li class="menu__item nav-item" v-for="item in menuItem" :key="item.id">
				<span class="nav-link" :id="item.href" @click="go">{{item.name}}</span>
			</li>
		</ul>
		<div class="menu__burger">
			<span class="w-100 mx-2 my-1"></span>
			<span class="w-50 mx-2 my-1"></span>
			<span class="w-100 mx-2 my-1"></span>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'course-menu',
	props: ['course'],
	data(){
		return{
			menuItem: [
				{
					id:1,
					name:'Все пользователи',
					href:'users',
					exact: true
				},
				{
					id:2,
					name:'Смотреть курс',
					href:'course',
				},
			]
		}
	},
	methods: {
		go: function() {
			let href = event.target.getAttribute('id');
			if(href == 'course'){
				this.$router.go(-1);
			} else{
				this.$router.push(`personal_account/${href}`);
			}
			
		}
	},
	mounted(){
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

.menu{
	&__block{}
	&__item>span{
		@include textContent(1.2rem, 1.5, 700, #000, left, 'Gilroy-Bold');
		padding: .3rem 1rem;
		cursor: pointer;
	}
	&__item>span:hover{
		background-color: #525252;
		color: #fff;
	}
	&__burger{
		display: none;
	}
}
@media (max-width: 1450px){
}
@media (max-width: 1200px){
	.menu{
		&__block{
			display: none;
		}
		&__burger{
			width: 45px;
			height: 45px;
			display: block;
			cursor: pointer;
			margin-top: 60px;
		}
		&__burger>span{
			height: 10px;
			display: block;
			border-radius: 10px;
			background-color: #007bff;
		}
	}
}
@media (max-width: 967px){
}
@media (max-width: 667px){
}
@media (max-width: 567px){
}
@media (max-width: 467px){
}
@media (max-width: 367px){
}
</style>

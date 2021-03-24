<template>
	<nav class="menu">
		<ul class="menu__block nav flex-column mt-5">
			<li class="menu__item nav-item" v-for="item in menuItem" :key="item.id">
				<span class="nav-link" :id="item.href" @click="go">{{item.name}}</span>
			</li>
		</ul>
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
}
</style>

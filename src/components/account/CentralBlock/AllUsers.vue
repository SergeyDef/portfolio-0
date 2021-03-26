<template>
	<main>
		<section class="video course users px-2 py-3 mb-5">
			<div class="search px-3 container-fluid">
				<form class="search__form form-group row">
					<div class="col-2 col-xl-2 modal__button">
						<button type="button" class="btn w-100">найти</button>
					</div>
					<div class="сol-10 col-xl-10">
						<input type="text" name="" class="form-control modal__input">
					</div>
				</form>
			</div>
			<div  class="users__wrapper w-100 px-1">
					<table class="table table-hover my-3 py-2">
						<thead class="thead-inverse">
							<tr>
								<th>№</th>
								<th>фото</th>
								<th>имя</th>
								<th>фамилия</th>
								<th>регистрация</th>
								<th>удалить</th>
							</tr>
						</thead>
						<tbody @click="showUser" v-for="user in users" 
					:key="user.id" class="users__table">
							<tr>
								<th scope="row"><span>{{user.id}}</span></th>
								<th class="users__images"><img :src="user.images" /></th>
								<th class="users__description"><span>{{user.name}}</span></th>
								<th class="users__description"><span>{{user.surname}}</span></th>
								<th class="users__description"><span>{{user.date}}</span></th>
								<th class="users__delete"><button type="button" class="btn">X</button></th>
							</tr>
						</tbody>
					</table>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	name: 'course-course',
	props: ['course'],
	data(){
		return{
			users: [],
		}
	},
	methods: {
		showUser: function () {
			// this.$router.push('personal_account/user');
		}
	},
	mounted(){
		this.users = this.$store.getters.GET_USERS;
	}
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/styleForm.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';
	.users{
		width: 100%;
		min-height: 300px;
		background-color: #fff;

		&__wrapper{
			width: 100%;
			height: auto;
		}
		&__table{
			cursor: pointer;
		}
		&__table:hover{
			box-shadow: inset 0px 0px 5px 3px rgba(0,0,0,0.2);
		}
		&__images{
		width: 50px;
		height: 50px;
		margin: auto;
		}
		&__images>img{
			width: 50px;
			height: 50px;
		}
		&__description{
			height: 100%;
		}
		&__description>span{
			@include textContent(1rem, 1.5, 300, #000, left, 'Gilroy-Medium');
		}
		&__delete>button{
			width: 40px;
			height: 40px;
			background-color: #ff0000;
			border-radius: 20px;
			box-shadow: inset 0 0 5px 2px;
			@include textContent(1rem, 1.5, 700, #fff, center, 'Gilroy-ExtraBold');
		}
		&__delete>button:hover{
			box-shadow: inset 0 0 6px #000;
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

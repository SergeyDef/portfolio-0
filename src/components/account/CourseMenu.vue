<template>
	<nav class="menu">
		<ul>
			<li>
				<span>Все пользователи</span>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'course-menu',
	props: ['course'],
	mounted(){
		console.log(this.course);
	}
}
</script>

<style scoped lang="scss">
</style>

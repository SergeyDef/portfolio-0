<template>
	<new class="menu">
		<ul>
			<li>
				<span>Все пользователи</span>
			</li>
		</ul>
	</new>
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

<template>
	<section class="course">
		<div>
			<h2>{{ course.title }}</h2>
		</div>
		<hr />
		<div class="course__block">
			<ul>
				<li>
					<div></div>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	name: 'CourseBlock',
	props: ['course'],
	mounted(){
		console.log(this.course);
	}
}
</script>

<style scoped lang="scss">
</style>

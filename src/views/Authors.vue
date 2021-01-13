<template>
	<div class="authors">
		<div class="authors__title">
			<h3>Авторы курса</h3>
		</div>
		<div class="authors__subtitle">
			<span>Над курсом работали психологи и опытные</span>
			<span>педагоги из различных сфер, чтобы вы</span>
			<span>получили максимально разностороннее</span>
			<span>видение профессии</span>
		</div>
		<div class="authors__content">
			
			<div class="authors__block">
				<div class="authors__photo">
					<img src="@/assets/authors/photo_1.jpg" alt="photo">
				</div>
				<div class="authors__name">
					<h5>Нуржамал Каримбекова</h5>
				</div>
				<div class="authors__description">
					<p>Психолог-имиджмейкер; Специалист по психологии общения и этнопсихологии; Репетитор по русскому языку</p>
				</div>
			</div>

			<div class="authors__block">
				<div class="authors__photo">
					<img src="@/assets/authors/photo_2.jpg" alt="photo">
				</div>
				<div class="authors__name">
					<h5>Елена Торина</h5>
				</div>
				<div class="authors__description">
					<p>Спикер курса К.т.н., доцент НИУ "МЭИ"; Педагог-психолог; Репетитор по математике, физике и шахматам</p>
				</div>
			</div>

			<div class="authors__block">
				<div class="authors__photo">
					<img src="@/assets/authors/photo_3.jpg" alt="photo">
				</div>
				<div class="authors__name">
					<h5>Наталья Краюшкина</h5>
				</div>
				<div class="authors__description">
					<p>Психотерапевт; Специалист по социальной психологии; Педагог по детскому развитию; Частный инструктор по фитнесу</p>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Authors',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

	.authors{
		padding: 150px 0;

		&__title{
			width: 1200px;
			margin: auto;
			margin-bottom: 40px;
		}
		&__title>h3{
			@include textTitle(42px, 1.23, 600, #000);
		}
		&__subtitle{
			margin: auto;
			width: 560px;
		}
		&__subtitle>span{
			@include textSubtitle(24px, 1.5, 300, #000);
		}
		&__content{
			width: 1200px;
			margin: auto;
			display: flex;
			padding: 120px 0 50px 0;
		}
		&__block{
			width: 360px;
			margin: 0 20px;
		}
		&__photo{
			width: 200px;
			max-width: 100%;
			margin: auto;
			overflow: hidden;
			border-radius: 50%;
			margin-bottom: 20px;
		}
		&__photo>img{
			width: 100%;
			height: auto;
		}
		&__name{
			margin-bottom: 4px;
		}
		&__name>h5{
			@include textTitle(22px, 1.35, 600, #000);
		}
		&__description{
			width: 90%;
			margin: auto;
		}
		&__description>p{
			@include textSubtitle(14px, 1.55, 300, #7a7a7a);
		}
	}
</style>

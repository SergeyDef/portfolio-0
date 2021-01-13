<template>
	<div class="join">
		<div class="join__title">
			<h3>Присоединяйтесь к нам!</h3>
		</div>
		<div class="join__subtitle">
			<span>Мы подготовили для Вас шесть увлекательных</span>
			<span>уроков, каждый из которых освещает важные</span>
			<span>вопросы профессии репетитора и позволит</span>
			<span>вам избежать подводных камней</span>
		</div>
		<div class="join__content">

			<div class="join__block">
				<div class="join__img">
					<img src="@/assets/join/figure_1.svg" alt="figure">
				</div>
				<div class="join__name">
					<h5>Урок 1. Репетитор - кто это?</h5>
				</div>
				<div class="join__text">
					<p>Кто такой репетитор и зачем его приглашают?</p>
					<p>Как классифицировать репетиторов и их аудиторию и зачем это нужно?</p>
					<p>Как найти свое место на рынке труда?</p>
					<p>Чем репетитор отличается от учителя и как он может взаимодействовать с учениками?</p>
				</div>
			</div>

			<div class="join__block">
				<div class="join__img">
					<img src="@/assets/join/figure_2.svg" alt="figure">
				</div>
				<div class="join__name">
					<h5>Урок 2. Как начать?</h5>
				</div>
				<div class="join__text">
					<p>С чего начинается путь репетитора?</p>
					<p>Где брать учеников и как заявить о себе?</p>
					<p>Какую цену назначать за свои уроки? Из чего формируется цена за занятие?</p>
					<p>О требованиях к рабочему пространству.</p>
					<p>Общие практические советы по проведению занятий.</p>
				</div>
			</div>

			<div class="join__block">
				<div class="join__img">
					<img src="@/assets/join/figure_3.svg" alt="figure">
				</div>
				<div class="join__name">
					<h5>Урок 3. Первая встреча</h5>
				</div>
				<div class="join__text">
					<p>Первое взаимодействие: как сразу расположить к себе клиента и узнать максимум нужной информации? Шаблон первого разговора.</p>
					<p>Первое занятие: на что обращать внимание? Что необходимо выяснить и прояснить? Как выстроить план эффективного взаимодействия?  Шаблон первого занятия.</p>
					<p>Что делать если что-то идет не так?</p>
				</div>
			</div>

			<div class="join__block">
				<div class="join__img">
					<img src="@/assets/join/figure_4.svg" alt="figure">
				</div>
				<div class="join__name">
					<h5>Урок 4. Долгосрочное взаимодействие</h5>
				</div>
				<div class="join__text">
					<p>Выстраивание партнерских отношений и важность доверия.</p>
					<p>Поведение «в семье» клиента – практические советы.
</p>
					<p>Как повысить цену и не потерять клиента?</p>
					<p>О способах построения занятия и работе с домашнем заданием.</p>
					<p>«Неожиданности»: неудобные вопросы и конфликты.</p>
				</div>
			</div>

			<div class="join__block">
				<div class="join__img">
					<img src="@/assets/join/figure_5.svg" alt="figure">
				</div>
				<div class="join__name">
					<h5>Урок 5. Репетитор-профессионал</h5>
				</div>
				<div class="join__text">
					<p>Почему полезно изучать психологию и педагогику?</p>
					<p>Педагогическая риторика: что это, зачем и как в ней упражняться?</p>
					<p>Полезные ресурсы для репетитора: важность подбора достоверных источников.</p>
					<p>Имидж репетитора.</p>
				</div>
			</div>

			<div class="join__block">
				<div class="join__img">
					<img src="@/assets/join/figure_6.svg" alt="figure">
				</div>
				<div class="join__name">
					<h5>Урок 3. Освоение новых форматов</h5>
				</div>
				<div class="join__text">
					<p>Работа с группами: как перейти к группам и не сделать хуже себе и ученикам? Как мотивировать к работе в коллективе? Сколько учеников должно быть в группе? Какие трудности и подводные камни такого формата?</p>
					<p>10 правил работы с небольшими группами учеников.</p>
					<p>Виртуальное взаимодействие: плюсы и минусы. Варианты виртуального взаимодействия. Разработка собственного курса.</p>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'JoinUs',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

	.join{
		padding-top: 135px;
		padding-bottom: 165px;
		background-color: #f4f7f9;

		&__title{
			margin-bottom: 40px;
		}
		&__title>h3{
			@include textTitle(42px, 1.23, 600, #000);
		}
		&__subtitle{
			margin: auto;
			width: 560px;
			padding-bottom: 90px;
		}
		&__subtitle>span{
			@include textSubtitle(24px, 1.5, 300, #000);
		}
		&__content{
			width: 1200px;
			margin: auto;
			display: flex;
			flex-wrap: wrap;
		}
		&__block{
			width: 360px;
			height: 612px;
			margin: 20px;
			padding: 30px;
			border-radius: 7px;
			background-color: rgb(255, 255, 255);
			box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 40px 0px;
		}
		&__img{
			width: 60px;
			height: auto;
		}
		&__img>img{
			width: 100%;
			height: auto;
		}
		&__name{
			margin-bottom: 15px;
		}
		&__name>h5{
			font-size: 22px;
			line-height: 1.35;
			font-weight: 500;
			color: #000;
			/*font-family: 'Noto Sans',Arial,sans-serif;*/
		}
		&__text>p{
			font-size: 18px;
			line-height: 1.55;
			font-weight: 300;
			color: #000;
			text-align: left;
			margin: 0;
			/*font-family: 'Noto Sans',Arial,sans-serif;*/
		}
	}
</style>

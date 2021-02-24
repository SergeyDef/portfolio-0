<template>
	<div class="join">
		<div class="join__title">
			<h3>Присоединяйтесь к нам!</h3>
		</div>
		<div class="join__subtitle">
			<span>Мы подготовили для Вас шесть практических</span>
			<span>уроков. Они раскроют важные вопросы профессии</span>
			<span>репетитора и позволят Вам избежать помогут</span>
			<span>камней</span>
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
  name: 'JoinSection',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

	.join{
		padding-top: 135px;
		padding-bottom: 165px;
		background-color: #f4f7f9;

		&__title{
			margin-bottom: 40px;
		}
		&__title>h3{
			@include textContent(42px, 1.23, 600, #000, center, 'Gilroy-ExtraBold');
		}
		&__subtitle{
			margin: auto;
			width: 560px;
			padding-bottom: 90px;
		}
		&__subtitle>span{
			@include textContent(1.4rem, 1.5, 300, #000, center, 'Gilroy-Medium');
			display: block;
			margin: auto;
		}
		&__content{
			width: 1200px;
			margin: auto;
			display: flex;
			flex-wrap: wrap;
		}
		&__block{
			width: 360px;
			height: 614px;
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
			@include textContent(22px, 1.35, 500, #000, left, 'Gilroy-Bold');
		}
		&__text>p{
			@include textContent(18px, 1.55, 300, #000, left, 'Gilroy-Medium');
			margin: 0;
		}
	}
	@media (max-width: 1200px){
		.join{
			&__content{
				width: 800px;
			}
		}
	}
	@media (max-width: 967px){
		.join{
			&__content{
				width: 600px;
			}
			&__block{
				width: 460px;
				height: 540px;
				margin: 20px auto;
			}
		}
	}
	@media (max-width: 667px){
		.join{
			padding-top: 65px;
			padding-bottom: 65px;

			&__title{
				margin-bottom: 30px;
			}
			&__title>h3{
				font-size: 36px;
			}

			&__content{
				width: 460px;
			}
			&__block{
				width: 100%;
				height: 524px;
				margin: 20px 0;
			}
			&__subtitle{
				width: 460px;
			}
			&__subtitle>span{
				font-size: 1.2rem;
			}
		}
	}
	@media (max-width: 467px){
		.join{
			padding-top: 65px;
			padding-bottom: 60px;
			
			&__title>h3{
				font-size: 32px;
			}
			&__subtitle{
				width: 370px;
				padding-bottom: 30px;
			}
			&__subtitle>span{
				font-size: 18px;
			}
			&__content{
				width: 350px;
			}
			&__block{
				width: 360px;
				height: 442px;
			}
			&__img{
				width: 30px;
				padding-bottom: 10px;
			}
			&__text>p{
				font-size: 14px;
			}
		}
	}
	@media (max-width: 365px){
		.join{
			
			&__title{
			}
			&__title>h3{
				font-size: 26px;
			}
			&__subtitle{
				width: 320px;
				padding-bottom: 20px;
			}
			&__subtitle>span{
				font-size: 14px;
				width: 100%;
			}
			&__content{
				width: 100%;
			}
			&__block{
				width: 260px;
				padding: 20px;
				margin: 20px auto;
				height: 452px
			}
		}
	}
</style>

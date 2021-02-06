<template>
	<div class="purpose">
		<div class="purpose__block">
			<div class="purpose__video">
				<iframe id="youtubeiframe239582114" width="100%" height="100%" src="//www.youtube.com/embed/DxLK1bp_qPo?rel=0&amp;fmt=18&amp;html5=1&amp;showinfo=0" frameborder="0" allowfullscreen="" style="height: 315px;"></iframe>
			</div>
			<div class="purpose__purpose">
				<div class="purpose__title">
					<h3>Наша цель</h3>
				</div>
				<div class="purpose__words">
					<p>Цель данного курса – осветить главные вопросы, возникающие у начинающих репетиторов. Здесь собраны основные практические рекомендации от опытных педагогов и психологов.</p>
				</div>
				<div class="purpose__signUp">
					<!-- <button type="button" class="btn"><a href="">Записаться</a></button> -->
					<a href="https://oplatakursov.ru/cmgqixvy"><span>Записаться</span></a>
				</div>
			</div>
		</div>
		<div class="purpose__image">
			<img src="@/assets/purpose/Evol-04.webp">
		</div>
		<div class="purpose__info">
			<div class="purpose__text purpose__text_bold">
				<p>Мы поможем Вам освоить новую профессию: начиная от позиционирования себя на рынке труда и поиска клиентов, заканчивая профессиональным ростом и работой с группами учеников.</p>
			</div>
			<div class="purpose__text purpose__text_not_bold">
				<p>Вы узнаете: с чего начать и как сразу выгодно поставить себя в условиях конкуренции среди репетиторов, как вести себя при первом контакте с новыми клиентами и как выстроить долгосрочное доверительное сотрудничество.</p>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Purpose',
  components: {
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

	.purpose{
		width: 100%;
		height: auto;

		&__block{
			width: 100%;
			height: auto;
			display: flex;
			justify-content: center;
			background-color: #524c8c;
			padding: 90px 0;
		}
		&__video{
			width: 560px;
		}
		&__purpose{
			width: 560px;
			padding-left: 40px;
		}
		&__title{
			padding-bottom: 20px;
		}
		&__title>h3{
			text-align: left;
			color: #fff;
			line-height: 1.23;
			font-weight: 700;
			font-size: 36px;
			font-family: 'Gilroy-ExtraBold';
		}
		&__words{
			padding-bottom: 6px;
		}
		&__words>p{
			font-size: 20px;
			line-height: 1.55;
			color: #fff;
			text-align: left;
			font-weight: 300;
			font-family: 'Gilroy-Bold';
		}
		&__image{
			width: 100%;
			height: auto;
			margin: auto;
			text-align: center;
		}
		&__image>img{
			width: 100%;
			height: auto;
			margin: auto;
			display: block;
		}
		&__info{
			width: 100%;
			padding: 30px 0 120px 0;
		}
		&__text{
			width: 1160px;
			margin: auto;
			padding-top: 8px;
			padding-bottom: 6px;
		}
		&__text>p{
			font-size: 24px;
			line-height: 1.55;
			text-align: center;
			font-weight: 300;
			color: #000;
		}
		&__text_not_bold{
			font-family: 'Gilroy-Medium';
		}
		&__text_bold>p{
			font-weight: 600;
			font-family: 'Gilroy-Bold';
		}
		&__signUp{
			display: flex;
			justify-content: space-between;
		}
/*		&__signUp>button{
			@include buttonColor(40%, #fff, #333333);
		}*/
		&__signUp>a{
			width: 40%;
			display: flex;
			margin: 0;
			padding: 8px 30px;
			border-radius: 0;
			text-decoration: none;
			border: solid 2px #fff;
			background-color: #fff;
			font-family: 'Gilroy-Medium';
		}
		&__signUp>a>span{
			color: #333333;
			margin: auto;
			font-weight: 600;
			font-size: 1rem;
		}
	}
	@media (max-width: 1200px){
	.purpose{

		&__block{
			}
			&__video{
				width: 500px;
			}
			&__purpose{
				width: 500px;
				padding-left: 30px;
			}
			&__title{
			}
			&__title>h3{
			}
			&__words{
			}
			&__words>p{
			}
			&__image{
			}
			&__image>img{
			}
			&__info{
			}
			&__text{
				width: 800px;
			}
			&__text>p{
			}
			&__text_bold>p{
			}
			&__signUp{
			}
			&__signUp>button{
			}
		}
	}
	@media (max-width: 967px){
	.purpose{

		&__block{
			}
			&__video{
				width: 400px;
			}
			&__video>iframe{
				height: 215px!important;
			}
			&__purpose{
			}
			&__title{
			}
			&__title>h3{
			}
			&__words{
			}
			&__words>p{
			}
			&__image{
			}
			&__image>img{
			}
			&__info{
			}
			&__text{
			}
			&__text>p{
			}
			&__text_bold>p{
			}
			&__signUp{
			}
			&__signUp>button{
			}
		}
	}
	@media (max-width: 667px){
		.purpose{

		&__block{
				flex-direction: column;
			}
			&__video{
				margin: auto;
			}
			&__purpose{
				padding-top: 20px;
				padding-left: 0;
				margin: auto;
			}
			&__title{
			}
			&__title>h3{
				text-align: center;
			}
			&__words{
			}
			&__words>p{
				text-align: center;
			}
			&__image{
			}
			&__image>img{
			}
			&__info{
			}
			&__text{
				width: 560px;
			}
			&__text>p{
			}
			&__text_bold>p{
			}
			&__signUp{
				width: 240px;
				margin: 0 auto;
			}
			&__signUp>button{
				margin: auto;
			}
			&__signUp>a{
				width: 100%;
			}
		}
	}
	@media (max-width: 467px){
		.purpose{

		&__block{
			}
			&__video{
				width: 350px;
			}
			&__video>iframe{
			}
			&__purpose{
				width: 350px;
			}
			&__title{
			}
			&__title>h3{
				font-size: 32px;
			}
			&__words{
			}
			&__words>p{
				font-size: 16px;
			}
			&__image{
			}
			&__image>img{
			}
			&__info{
				padding: 10px 0 50px 0;
			}
			&__text{
				width: 350px;
			}
			&__text>p{
				font-size: 18px;
			}
			&__text_bold>p{
			}
			&__signUp{
			}
			&__signUp>button{
			}
		}
	}
	@media (max-width: 365px){
		.purpose{

			&__block{
				}
				&__video{
					width: 320px;
				}
				&__video>iframe{
				}
				&__purpose{
					width: 320px;
				}
				&__title{
				}
				&__title>h3{
					font-size: 28px;
				}
				&__words{
				}
				&__words>p{
					font-size: 14px;
				}
				&__image{
				}
				&__image>img{
				}
				&__info{
				}
				&__text{
					width: 320px;
				}
				&__text>p{
					font-size: 14px;
				}
				&__text_bold>p{
				}
				&__signUp{
				}
				&__signUp>button{
				}
			}
		}
</style>

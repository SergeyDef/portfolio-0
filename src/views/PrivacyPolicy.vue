<template>
	<div class="privacy">
		<div>ываам</div>
		<FooterSection />
	</div>
</template>

<script>
  import FooterSection from '@/components/FooterSection.vue'

export default {
	name: 'PrivacyPolicy',
	components: {
		FooterSection
	},
	props: {
	},
	data(){
		return {
		}
	},
	methods: {
	}
}

</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

	@media (max-width: 1200px){}
	@media (max-width: 967px){}
	@media (max-width: 667px){}
	@media (max-width: 467px){}
	@media (max-width: 365px){}
</style>

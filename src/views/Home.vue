<template>
	<div class="home">
		<a id="aboutAs"></a>
		<PresentationSection />
		<a id="ourGoal"></a>
		<PurposeSection />
		<JoinSection />
		<a id="authors"></a>
		<AuthorsSection />
		<a id="cost"></a>
		<BuySection />
		<a id="contacts"></a>
		<FooterSection />
		<WindowLogin v-if="$store.getters.LOGIN_MODAL" />
		<WindowRegistration v-if="$store.getters.REGISTRATION_WINDOW" />
		<WindowPayment v-if="$store.getters.PAYMENT_WINDOW" />
	</div>
</template>

<script>
	import PresentationSection from '@/components/home/PresentationSection.vue'
	import PurposeSection from '@/components/home/PurposeSection.vue'
	import JoinSection from '@/components/home/JoinSection.vue'
	import AuthorsSection from '@/components/home/AuthorsSection.vue'
  import FooterSection from '@/components/FooterSection.vue'
  import BuySection from '@/components/home/BuySection.vue'
	import WindowLogin from '@/components/modal/WindowLogin.vue'
	import WindowRegistration from '@/components/modal/WindowRegistration.vue'
	import WindowPayment from '@/components/modal/WindowPayment.vue'

export default {
	name: 'Home',
	components: {
		PresentationSection,
		PurposeSection,
		JoinSection,
		AuthorsSection,
		FooterSection,
		BuySection,
		WindowLogin,
		WindowRegistration,
		WindowPayment,
	},
	props: {
	},
	data(){
		return {
		}
	},
	methods: {
	},
	computed: {
			page() {
			return this.$route.meta.page
		}
	},
	mounted(){
		this.$store.commit('GET_PAGE_INDICATOR', this.page);
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

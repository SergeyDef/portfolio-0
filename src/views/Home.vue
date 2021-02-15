<template>
	<div class="home">
<!-- 		<button @click="test">TEST</button> -->
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
		<WindowLogin v-if="$store.getters.conditionLoginModal" />
	</div>
</template>

<script>
	import PresentationSection from '@/components/home/PresentationSection.vue'
	import PurposeSection from '@/components/home/PurposeSection.vue'
	import JoinSection from '@/components/home/JoinSection.vue'
	import AuthorsSection from '@/components/home/AuthorsSection.vue'
  import FooterSection from '@/components/FooterSection.vue'
  import BuySection from '@/components/home/BuySection.vue'
	import WindowLogin from '@/components/WindowLogin.vue'
	// import {mapMutations} from "vuex"

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
	},
	props: {
	},
	data(){
		return {
		}
	},
	methods: {
		// ...mapMutations(["openLoginModal"]),
		test: () =>{
			let test = 'this.$store.getters.test';
			alert(test);
		}
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

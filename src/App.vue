<template>
  <div id="app">
    <Header />
    <Home />
    <Purpose />
    <JoinUs />
    <Authors />
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Home from '@/views/Home.vue'
  import Purpose from '@/views/Purpose.vue'
  import JoinUs from '@/views/JoinUs.vue'
  import Authors from '@/views/Authors.vue'
  import Footer from '@/views/Footer.vue'

  export default{
    components: {
      Header,
      Home,
      Purpose,
      JoinUs,
      Authors,
      Footer,
    }
  }

</script>

<style lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

#app {
}
</style>

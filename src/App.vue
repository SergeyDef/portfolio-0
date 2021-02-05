<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'

  export default{
    components: {
      Header,
    }
  }

</script>

<style lang="scss">
@import '@/scss/_mixins.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

#app {
}
</style>

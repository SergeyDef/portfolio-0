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
    },
    metaInfo: {
      title: 'Курс для репетиторов "Адепт"',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Практический курс для начинающих репетиторов adept Образование для всех' }
      ]
    },
    computed: {
    },
    mounted(){
    }
  }

</script>

<style lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/_fonts.scss';
@import '~bootstrap/dist/css/bootstrap.min.css';

#app {
  ul{
  }
  li{
    list-style-type: none;
  }
}
</style>

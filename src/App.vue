<script>
    import AppHeader from './components/AppHeader.vue';
    import AppFooter from './components/AppFooter.vue';
    export default {
        name: 'App',

        components: {
            AppHeader,
            AppFooter
        }
    }
</script>

<style lang="scss">
  @use './styles/general' as *;
</style>

<template>
  <AppHeader />
  <router-view></router-view>
</template>
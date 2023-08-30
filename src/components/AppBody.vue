<script>
    import AppHeader from './AppHeader.vue';
    import AppMain from './AppMain.vue';
    import AppFooter from './AppFooter.vue';
    export default {
        name: 'AppBody',

        components: {
            AppHeader,
            AppMain,
            AppFooter
        }
    }
</script>

<style lang="scss" scoped>

</style>

<template>
    <AppHeader />
    <AppMain />
</template>
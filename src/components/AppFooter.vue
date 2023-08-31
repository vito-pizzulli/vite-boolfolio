<script>
    export default {
        name: 'AppFooter',
    }
</script>

<style lang="scss" scoped>
    @use '../styles/partials/mixins' as *;

footer {
    @include flex(row, center, center, no-wrap);
    
    background-color: #141d2b;
    color: white;
    height: 10vh;
}
</style>

<template>
    <footer>
        <h1>Footer</h1>
    </footer>
</template>
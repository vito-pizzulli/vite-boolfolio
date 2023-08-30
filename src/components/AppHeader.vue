<script>
    export default {
        name: 'AppHeader',
    }
</script>

<style lang="scss" scoped>
    @use '../styles/partials/mixins' as *;

    header {
        @include flex(row, center, center, no-wrap);
        background-color: #141d2b;
        color: white;
        height: 20vh;
        
        h1 {
            font-size: 3rem;
        }
    }
</style>

<template>
    <header>
        <h1>Boolfolio</h1>
    </header>
</template>
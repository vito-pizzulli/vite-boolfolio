<script>
    export default {
        name: 'AppNotFound'
    }
</script>

<style lang="scss" scoped>
    @use '../styles/partials/mixins' as *;
    
    main {
        background-color: #41587e;
        height: 75vh;
        overflow-y: scroll;

        div.container {
            @include flex(row, center, space-between, wrap);

            width: 80%;
            margin: auto;
        }
    }
</style>

<template>
    <main>
        <div class="container">
            <h1>Not Found</h1>
        </div>
    </main>
</template>
<script>
    export default {
        name: 'AppProjectCard',

        props: {
            project: Object
        }
    }
</script>

<style lang="scss" scoped>

</style>

<template>
    <div id="project-card">
        <h1>{{ project.title }}</h1>
    </div>
</template>
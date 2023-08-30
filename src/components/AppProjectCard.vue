<script>
    export default {
        name: 'AppProjectCard',

        props: {
            project: Object
        }
    }
</script>

<style lang="scss" scoped>
    @use '../styles/partials/mixins' as *;

    div#project-card {
        @include flex(column, space-between, start, no-wrap);

        background-color: white;
        width: calc(100% / 3 - 2rem);
        margin: 1rem;
        padding: 1rem;
        border-radius: 10px;

        h1 {
            font-size: 1.5rem;
        }

        div.project-technologies span {
            margin-right: .5rem;
        }
    }
</style>

<template>
    <div id="project-card">
        <h1>Title: {{ project.title }}</h1>
        <p><strong>Description:</strong> {{ project.description }}</p>
        <p><strong>GitHub Page Link:</strong> {{ project.link }}</p>
        <p><strong>Creation date:</strong> {{ project.creation_date }}</p>
        <p><strong>Type:</strong> {{ project.type?.name ?? 'Empty' }}</p>
        <div class="project-technologies">
            <span><strong>Technologies:</strong></span>
            <span v-for="technology in project.technologies">{{ technology.name }}</span>
            <span v-if="!project.technologies.length">Empty</span>
        </div>
    </div>
</template>
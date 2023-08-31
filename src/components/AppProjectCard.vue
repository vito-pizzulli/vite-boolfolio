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

        h2 {
            font-size: 1.3rem;
        }

        img {
            width: 100%;
            height: 50%;
        }

        div.project-technologies span {
            margin-right: .5rem;
        }
    }
</style>

<template>
    <div id="project-card">
        <h2>
            <router-link :to="{ name: 'projects.show', params: { slug: project.slug }}">
                {{ project.title }}
            </router-link>
        </h2>
        <img v-if="project.image.startsWith('http')" :src="project.image" alt="{{ project.title }}">
        <img v-else :src="'http://127.0.0.1:8000/storage/' + project.image" alt="{{ project.title }}">
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
<script>
    import axios from 'axios';
    export default {
        name: 'AppProjectShow',

        data() {
            return {
                apiUrl: 'http://127.0.0.1:8000/api/projects',
                project: false
            }
        },

        methods: {
            getProject() {
                axios.get(`${this.apiUrl}/${this.$route.params.slug}`).then((response) => {
                    if (response.data.success) {
                        this.project = response.data.results;
                    } else {
                        this.$router.push({ name: 'not-found' });
                    }
                });
            }
        },

        created() {
            this.getProject();
        }
    }
</script>

<style lang="scss" scoped>
    @use '../styles/partials/mixins' as *;
    
    main {
        background-color: #41587e;
        height: 75vh;
        overflow-y: scroll;

        div.container {
            @include flex(column, space-between, start, no-wrap);

            width: 80%;
            height: 100%;
            margin: auto;
            padding: 3rem;

            img {
                width: 50%;
            }
        }
    }
</style>

<template>
    <main>
        <div class="container">
            <h1>{{ project.title }}</h1>
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
    </main>
</template>
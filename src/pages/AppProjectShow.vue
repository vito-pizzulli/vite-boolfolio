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
        background-color: #ebeffd;
        height: 85vh;
        overflow-y: scroll;

        div.container {

            width: 80%;
            margin: auto;
            padding: 3rem;
            height: 100%;

            div.card {
                @include flex(column, space-between, start, no-wrap);

                
                height: 100%;
                background-color: white;
                border-radius: 10px;
                padding: 3rem;
                box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

                img {
                    width: 50%;
                }

                div.project-technologies {
                    span {
                        margin-right: .5rem;
                    }

                    span:not(:first-child) {
                        margin-right: .5rem;
                        background-color: #001533;
                        color: white;
                        padding: .5rem 1rem;
                        border-radius: 20px;
                    }
                }
            }
        }
    }
</style>

<template>
    <main>
        <div class="container">
            <div class="card">
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
        </div>
    </main>
</template>
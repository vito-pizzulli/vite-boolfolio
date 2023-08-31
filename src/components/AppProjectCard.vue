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
        @include flex(column, start, start, no-wrap);

        background-color: white;
        width: calc(100% / 3 - 2rem);
        margin: 1rem;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

        h2 {
            font-size: 1.2rem;
            margin: .5rem;
            padding: .5rem;

            a {
                text-decoration: none;
                color: black;
                transition: all .3s;

                &:hover {
                    color: #00da62;
                }
            }
        }

        img {
            width: 100%;
            height: 250px;
        }

        div.project-info {
            @include flex(column, space-between, start, no-wrap);

            padding: .5rem;

            p {
                margin-bottom: .5rem;
            }

            div.project-technologies {
                margin-bottom: 1rem;

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
        <div class="project-info">
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
</template>
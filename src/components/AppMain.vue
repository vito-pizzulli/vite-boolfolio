<script>
    import AppProjectCard from './AppProjectCard.vue';
    import axios from 'axios';
    export default {
        name: 'AppMain',

        components: {
            AppProjectCard
        },

        data() {
            return {
                projects: [],
                apiUrl: 'http://127.0.0.1:8000/api/projects'
            }
        },

        methods: {
            getProjects() {
                axios.get(this.apiUrl, {
                    params: {}
                })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects = response.data.results.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
        },

        created() {
            this.getProjects();
        }
    }
</script>

<style lang="scss" scoped>
    @use '../styles/partials/mixins' as *;

    main {
        background-color: #41587e;
        height: 80vh;
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
            <AppProjectCard v-for="project in projects"
                :project="project"
            />
        </div>
    </main>
</template>
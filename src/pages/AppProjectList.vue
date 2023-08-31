<script>
    import AppProjectCard from '../components/AppProjectCard.vue';
    import axios from 'axios';
    export default {
        name: 'AppProjectList',

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
        background-color: #ebeffd;
        height: 85vh;
        overflow-y: scroll;

        div.container {
            @include flex(row, center, space-between, wrap);

            width: 80%;
            margin: auto;
            padding: 3rem;
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
<script>
    import axios from 'axios';
    export default {
        name: 'AppMain',

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
                .then(function (response) {
                    console.log(response.data.results.data);
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
    }
</style>

<template>
    <main>
        <h1>Main</h1>
    </main>
</template>
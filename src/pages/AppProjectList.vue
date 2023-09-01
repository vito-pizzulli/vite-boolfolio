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
                apiUrl: 'http://127.0.0.1:8000/api/projects',
                enteredText: ''
            }
        },

        methods: {
            getProjects(apiUrl = this.apiUrl, searchQuery = false) {
                const params = {}
                if (searchQuery) {
                    params.search = searchQuery;
                }

                axios.get(apiUrl, { params })
                .then((response) => {
                    this.projects = response.data.results.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
            },

            searchProject(searchedText) {
                this.getProjects(this.apiUrl, searchedText);
            }
        },

        created() {
            this.getProjects(this.apiUrl);
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

            div#projects-navigation-bar {
                background-color: #001533;
                border-radius: 10px;
                color: white;
                padding: 1rem;
                position: fixed;
                left: 50%;
                transform: translateX(-50%);

                label {
                    margin: 1rem;
                    font-size: 1.2rem;
                }

                input {
                    font-size: 1.2rem;
                    border-radius: 10px;
                    border: none;
                    padding: .5rem 1rem;
                    margin-right: 1rem;
                }

                button {
                    background-color: white;
                    font-size: 1.2rem;
                    padding: .5rem 1rem;
                    border-radius: 10px;
                    border: none;
                }
            }

            div#cards-container {
                @include flex(row, center, space-between, wrap);

                margin-top: 5rem;
            }
        }
    }
</style>

<template>
    <main>
        <div class="container">
            <div id="projects-navigation-bar">
                <label for="enteredText">Search a project:</label>
                <input type="text" id="enteredText" name="enteredText" v-model="enteredText" @keyup.enter="searchProject(enteredText)">
                <button @click="searchProject(enteredText)">Search</button>
            </div>
            <div id="cards-container">
                <AppProjectCard v-for="project in projects"
                :project="project"
            />
            </div>
        </div>
    </main>
</template>
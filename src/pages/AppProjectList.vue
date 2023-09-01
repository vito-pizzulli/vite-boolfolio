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
                enteredText: '',
                firstPageUrl: '',
                previousPageUrl: '',
                currentPageNumber: '',
                lastPageNumber: '',
                nextPageUrl: '',
                lastPageUrl: ''
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
                    this.firstPageUrl = response.data.results.first_page_url;
                    this.previousPageUrl = response.data.results.prev_page_url;
                    this.currentPageNumber = response.data.results.current_page;
                    this.lastPageNumber = response.data.results.last_page;
                    this.nextPageUrl = response.data.results.next_page_url;
                    this.lastPageUrl = response.data.results.last_page_url;
                })
                .catch(function (error) {
                    console.log(error);
                })
            },

            searchProject(searchedText) {
                this.getProjects(this.apiUrl, searchedText);
            },

            firstPage() {
                this.getProjects(this.firstPageUrl);
            },

            previousPage() {
                this.getProjects(this.prevPageUrl);
            },

            nextPage() {
                this.getProjects(this.nextPageUrl);
            },

            lastPage() {
                this.getProjects(this.lastPageUrl);
            },
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
        height: 80vh;
        overflow-y: scroll;

        div.container {

            width: 80%;
            margin: auto;
            padding: 1rem;

            div#navigation-bar {
                @include flex(row, space-between, center, no-wrap);

                background-color: #001533;
                border-radius: 10px;
                color: white;
                padding: 1rem;
                position: fixed;
                left: 50%;
                width: 80%;
                transform: translateX(-50%);

                div#search {
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
                        margin-right: 5rem;
                        transition: all .3s;

                        &:hover {
                            cursor: pointer;
                            background-color: #00df6b;
                        }
                    }
                }
            }

            nav#pagination {

                ul {
                    @include flex(row, space-between, center, no-wrap);

                    li {
                        list-style-type: none;
                        margin: 0 1.5rem;
                        font-size: 1.2rem;

                        i {
                            font-size: 1.2rem;
                            transition: all .3s;

                            &.disabled {
                                color: grey;
                                pointer-events: none;
                            }

                            &:hover {
                                cursor: pointer;
                                color: #00df6b;
                            }
                        }

                        &:first-of-type {
                            cursor: default;
                        }
                    }
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
            <div id="navigation-bar">
                <div id="search">
                    <label for="enteredText">Search a project:</label>
                    <input type="text" id="enteredText" name="enteredText" v-model="enteredText" @keyup.enter="searchProject(enteredText)">
                    <button @click="searchProject(enteredText)">Search</button>
                </div>
                <nav id="pagination">
                    <ul>
                        <li>Page {{ currentPageNumber }}/{{ lastPageNumber }} </li>
                        <li @click="firstPage" v-if="firstPageUrl && previousPageUrl"><i class="fa-solid fa-angles-left"></i></li>
                            <li v-else><i class="fa-solid fa-angles-left disabled"></i></li>
                        <li @click="previousPage" v-if="previousPageUrl"><i class="fa-solid fa-angle-left"></i></li>
                            <li v-else><i class="fa-solid fa-angle-left disabled"></i></li>
                        <li @click="nextPage" v-if="nextPageUrl"><i class="fa-solid fa-angle-right"></i></li>
                            <li v-else><i class="fa-solid fa-angle-right disabled"></i></li>
                        <li @click="lastPage" v-if="lastPageUrl && nextPageUrl"><i class="fa-solid fa-angles-right"></i></li>
                            <li v-else><i class="fa-solid fa-angles-right disabled"></i></li>
                    </ul>
                </nav>
            </div>

            <div id="cards-container">
                <AppProjectCard v-for="project in projects"
                :project="project"
            />
            </div>
        </div>
    </main>
</template>
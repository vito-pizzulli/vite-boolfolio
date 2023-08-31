<script>
    export default {
        name: 'AppHeader',

        data() {
            return {
                links: [
                    {
                        route: 'home',
                        name: 'Home'
                    },
                    {
                        route: 'projects.index',
                        name: 'Projects'
                    },
                    {
                        route: 'about-me',
                        name: 'About Me'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use '../styles/partials/mixins' as *;

    header {
        @include flex(row, space-around, center, no-wrap);
        
        background-color: #001533;
        color: white;
        height: 15vh;
        
        h1 {
            font-size: 4rem;

            span {
                color: #00df6b;
            }
        }

        nav ul {
            @include flex(row, space-around, center, no-wrap);

            li {
                list-style-type: none;
                margin-left: 3rem;
                font-size: 1.5rem;
                
                a {
                    color: white;
                    text-decoration: none;
                    transition: all .3s;

                    &:hover {
                        color: #00df6b;
                    }
                }
            }
        }
    }
</style>

<template>
    <header>
        <h1><span>My</span> Boolfolio</h1>
        <nav>
            <ul>
                <li v-for="link in links">
                    <router-link :to="{ name: link.route }">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'AppFooter',

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

footer {
    @include flex(row, center, center, no-wrap);
    
    background-color: #141d2b;
    color: white;
    height: 10vh;

    ul {
        @include flex(row, space-around, center, no-wrap);

        li {
            list-style-type: none;
            margin-left: 3rem;
            font-size: 1.5rem;
            
            a {
                color: white;
                text-decoration: none;
            }
        }
    }
}
</style>

<template>
    <footer>
        <nav>
            <ul>
                <li v-for="link in links">
                    <router-link :to="{ name: link.route }">
                        {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </nav>
    </footer>
</template>
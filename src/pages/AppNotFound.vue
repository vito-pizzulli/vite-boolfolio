<script>
    export default {
        name: 'AppNotFound'
    }
</script>

<style lang="scss" scoped>
    @use '../styles/partials/mixins' as *;

    main {
        background-color: #ebeffd;
        height: 90vh;
        overflow-y: scroll;

        div.container {

            width: 80%;
            margin: 3rem auto;
            padding: 3rem;


            div.card {
                background-color: white;
                border-radius: 10px;
                padding: 3rem;
                box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
                
                h1 {
                    text-align: center;
                }
            }
        }
    }
</style>

<template>
    <main>
        <div class="container">
            <div class="card">
                <h1>Not Found</h1>
            </div>
        </div>
    </main>
</template>
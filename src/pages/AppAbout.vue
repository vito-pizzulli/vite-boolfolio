<script>
    export default {
        name: 'AppAbout'
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
                    margin-bottom: 2rem;
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
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere magni molestias perferendis ducimus consectetur dolorem quos provident ab! Quod voluptas omnis voluptatem cupiditate ipsa rem, ad eaque autem impedit asperiores?
                Dolores magnam nam itaque similique, distinctio laudantium consequuntur quos accusamus. Voluptates repellendus corporis labore eum, beatae autem nesciunt voluptate. Sunt omnis qui amet repellat autem veniam velit odit perferendis tempore!
                Laboriosam at illum adipisci delectus dolorum eaque reprehenderit. Commodi cupiditate odit veritatis, iste quibusdam quis. Quo reprehenderit eaque aperiam ab cumque, maiores quos enim tempore! Esse nemo magnam consectetur velit.
                Repellat vel tempore consectetur nostrum ipsa inventore dolore ad numquam laudantium aut. Voluptas necessitatibus sapiente modi incidunt, a nisi saepe, exercitationem soluta temporibus, harum atque quae! Eos id eligendi adipisci!
                Neque doloremque, dolor hic reiciendis odit nulla alias qui ducimus ea dolorum iusto eius obcaecati in incidunt molestias. Illo at dolor minima debitis animi mollitia excepturi hic, quasi quo quidem.
                Quo delectus at praesentium aliquam doloremque et repellat explicabo totam molestiae voluptas fugiat sapiente exercitationem doloribus voluptatum cumque iure minima unde iusto, quas laudantium. Sed ea non voluptatum tempore quo.
                Blanditiis rerum autem, optio tempore ex deserunt voluptatibus deleniti distinctio, cumque molestiae tempora illo temporibus cupiditate perferendis veniam fugit iure impedit. Odio placeat laboriosam totam impedit est, mollitia autem exercitationem.
                Quia consequuntur explicabo nihil dolorum vero placeat quo, ipsam obcaecati, nam molestias repellat voluptatem nesciunt. Neque reprehenderit eveniet odio nihil odit laudantium laboriosam, autem provident soluta dolor ducimus quo quam!
                Temporibus exercitationem nostrum, consequuntur neque dignissimos officiis! Est fugiat, minus beatae ullam, ad ipsum, quisquam earum porro delectus impedit saepe perferendis asperiores reprehenderit. Eius, officiis eaque aperiam labore non distinctio?
                Natus animi veniam maxime obcaecati sunt deleniti quam quaerat recusandae, nihil architecto similique aut assumenda amet eius dolore odio expedita? Numquam assumenda nobis voluptate veniam praesentium. Assumenda dolores debitis reprehenderit.</p>
            </div>
        </div>
    </main>
</template>
<script>
    export default {
        name: 'AppHome'
    }
</script>

<style lang="scss" scoped>
    @use '../styles/partials/mixins' as *;

    main {
        background-color: #41587e;
        height: 75vh;
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
            <h1>Home</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, odit rem laborum dolorem nihil beatae vitae sed harum voluptatibus, aperiam consequatur tempora cupiditate officiis est soluta, nobis ab aliquid possimus?
            Repellat, aut nisi nostrum alias assumenda in facilis totam non error voluptate aperiam sequi molestias ab aliquam provident blanditiis facere. Temporibus ea voluptatem laborum qui asperiores? Minima incidunt quasi nulla?
            Exercitationem laboriosam obcaecati, distinctio vitae debitis dignissimos nisi enim architecto minus delectus vero sequi facere sapiente modi corrupti recusandae eum totam at officiis nulla ex iure accusamus nihil maiores? Ullam!
            Quibusdam earum ipsa fuga harum! Ipsa asperiores debitis itaque error, tempore inventore dolorem sequi culpa ipsam ex, aspernatur odio. Beatae similique tempore velit laborum. Neque veritatis vero officia alias minus?
            Tempore cum eaque dolorem incidunt deserunt sed non reprehenderit sunt. Delectus itaque iste cupiditate dolores nam laborum libero eveniet dolorum at non, pariatur placeat qui doloremque dicta illum perspiciatis corporis.
            In similique blanditiis omnis. Unde eligendi repellendus cumque assumenda? Suscipit placeat eum sapiente odio consectetur amet, nihil doloremque sunt quas facilis id accusamus voluptatum a aliquid dolores fuga laboriosam recusandae.
            Veniam sit inventore atque possimus! Non iste cum, totam accusamus temporibus laboriosam ducimus et saepe quis? Molestias laboriosam adipisci enim. Cum sit dolor in, velit at architecto repellat. Sapiente, saepe.
            Nulla maiores ipsam qui officiis labore, rerum nesciunt, quibusdam consequuntur aut error numquam earum fugit? Officia quia dignissimos ratione animi reiciendis quae. Cumque facere similique quia nulla tempore necessitatibus quam?
            Vitae cum exercitationem quas suscipit, quis aliquid eveniet incidunt quia ab a praesentium dicta excepturi rerum consectetur harum iste similique minus nesciunt quod tempore porro dolorem? Voluptas dolorum aut ipsum.
            Similique ut saepe ex sed illo autem sit eos alias distinctio omnis assumenda labore error nostrum expedita temporibus, ipsam quisquam eaque minima quibusdam. Consectetur vel libero saepe, porro inventore quidem?
            </p>
        </div>
    </main>
</template>
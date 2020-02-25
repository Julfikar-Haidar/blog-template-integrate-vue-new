<template>
    <div>
        <Header></Header>
        <div class="container">
            <div class="row">
                <slot name="blog"></slot>
                <slot name="Post"></slot>
            </div>
        </div>

        <!--    Footer start -->
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '../layouts/partials/Footer'
    import Header from '../layouts/partials/Header'

    export default {
        name: "MasterBlog",
        components: {
            Footer, Header

        }
    }
</script>

<style scoped>

</style>
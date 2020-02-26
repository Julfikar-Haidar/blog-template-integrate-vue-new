<template>

    <div>
        <!--    Navbar start  -->

        <Header></Header>

        <slot name="home"></slot>
        <!--    Footer start -->
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '../layouts/partials/Footer'
    import Header from '../layouts/partials/Header'

    export default {
        name: "Master",
        // props: ["headerContent"],
        components: {
            Footer, Header

        }
    }
</script>

<style scoped>

</style>
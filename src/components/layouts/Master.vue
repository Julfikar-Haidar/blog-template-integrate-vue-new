<template>

    <div>
        <!--    Navbar start  -->

        <Header></Header>
        <!--        <Hero> </Hero>-->
        <!--        <IntroHero></IntroHero>-->
        <!--        <FeaturePost></FeaturePost>-->
        <!--        <Divider></Divider>-->


<!--                <LatestPost></LatestPost>-->
        <!--        <Newsletter></Newsletter>-->
        <!--        <Gallery></Gallery>-->
                    <slot name="home"></slot>
        <!--    Footer start -->
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '../layouts/partials/Footer'
    import Header from '../layouts/partials/Header'
    // import Hero from './partials/Hero'
    // import LatestPost from '../layouts/partials/LatestPost'
    // import Newsletter from '../layouts/partials/Newsletter'
    // import IntroHero from '../layouts/partials/IntroHero'
    // import FeaturePost from './partials/FeaturePost'
    // import Divider from '../layouts/partials/Divider'
    // import Gallery from '../layouts/partials/Gallery'

    export default {
        name: "Master",
        // props: ["headerContent"],
        components: {
            Footer, Header
            // ,LatestPost,Newsletter,IntroHero,Divider,FeaturePost,Gallery,Hero
        }
    }
</script>

<style scoped>

</style>
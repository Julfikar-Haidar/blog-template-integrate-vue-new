<template>
    <div>
        <Master>

            <template v-slot:home>
                <Hero></Hero>
                <IntroHero></IntroHero>
                <FeaturePost></FeaturePost>
                <Divider></Divider>
                <LatestPost></LatestPost>
                <Newsletter></Newsletter>
                <Gallery></Gallery>

            </template>

        </Master>
    </div>
</template>

<script>
    import Master from '../layouts/Master'
    import Hero from '../layouts/partials/Hero'
    import LatestPost from '../layouts/partials/LatestPost'
    import Newsletter from '../layouts/partials/Newsletter'
    import IntroHero from '../layouts/partials/IntroHero'
    import FeaturePost from '../layouts/partials/FeaturePost'
    import Divider from '../layouts/partials/Divider'
    import Gallery from '../layouts/partials/Gallery'

    export default {
        name: "Home",
        components: {
            Master, LatestPost, Newsletter, IntroHero, Divider, FeaturePost, Gallery, Hero

        }

    }
</script>

<style scoped>

</style>
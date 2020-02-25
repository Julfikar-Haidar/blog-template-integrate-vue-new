<template>
    <aside class="col-lg-4">

         <Search></Search>
        <Latest></Latest>
        <Tag></Tag>
        <Categories></Categories>
        </aside>
</template>

<script>
    import Tag from '../../layouts/partials/blog_layout/Tag'
    import Categories from '../../layouts/partials/blog_layout/Categories'
    import Search from '../../layouts/partials/blog_layout/Search'
    import Latest from '../../layouts/partials/blog_layout/Latest'

    export default {
        name: "Sidebar",
        components: {
            Tag,
            Search,
            Categories,
            Latest

        }
    }
</script>

<style scoped>

</style>
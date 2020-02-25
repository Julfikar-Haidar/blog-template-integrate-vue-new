<template>
    <!-- Page Header -->
    <header class="masthead" v-bind:style="{backgroundImage:'url('+ headerContent.backgroundImage +')'}">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="post-heading">
                        <h1>{{headerContent.main_title}}</h1>
                        <span class="subheading">{{headerContent.sub_title}}</span>
                                    <span class="meta">Posted by
              <a href="#">Start Bootstrap</a>
              {{headerContent.dateTime}}</span>

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderSample",
        props: ["headerContent"],
    }
</script>

<style scoped>

</style>
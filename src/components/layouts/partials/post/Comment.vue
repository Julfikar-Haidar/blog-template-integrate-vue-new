<template>
    <div>
        <div class="post-comments">
            <header>
                <h3 class="h6">Post Comments<span class="no-of-comments">({{comments.length}})</span></h3>
            </header>
            <div class="comment" v-for="comment in comments" v-bind:key="comment.id">
                <div class="comment-header d-flex justify-content-between">
                    <div class="user d-flex align-items-center">
                        <div class="image"><img
                                src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/user.svg"
                                alt="..." class="img-fluid rounded-circle"></div>
                        <div class="title"><strong>{{comment.name}}</strong><span class="date">May 2016</span>
                        </div>
                    </div>
                </div>
                <div class="comment-body">
                    <p>{{comment.body}}</p>
                </div>
            </div>

        </div>

    </div>

</template>

<script>


    import axios from 'axios'


    export default {
        name: "Comment",
        components: {},
        data() {
            return {
                comments: ''
            }
        },
        mounted() {
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id + '/comments')
                .then(response => this.comments = response.data)
            console.log(this.comments)
        }
    }
</script>

<style scoped>

</style>
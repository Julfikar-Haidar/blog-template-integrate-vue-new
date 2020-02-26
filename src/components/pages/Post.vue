<template>
    <div>
        <MasterBlog>
            <template v-slot:post>

                <main class="post blog-post col-lg-8">
                    <div class="container">
                        <div class="post-single">
                            <div class="post-thumbnail"><img
                                    src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-post-3.jpeg"
                                    alt="..." class="img-fluid"></div>
                            <div class="post-details">
                                <div class="post-meta d-flex justify-content-between">
                                    <div class="category"><a href="#">Business</a><a href="#">Financial</a></div>
                                </div>
                                <h1>{{post.title}}<a href="#"><i class="fa fa-bookmark-o"></i></a></h1>
                                <div class="post-footer d-flex align-items-center flex-column flex-sm-row"><a href="#"
                                                                                                              class="author d-flex align-items-center flex-wrap">
                                    <div class="avatar"><img
                                            src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/avatar-1.jpg"
                                            alt="..." class="img-fluid"></div>
                                    <div class="title"><span>John Doe</span></div>
                                </a>
                                    <div class="d-flex align-items-center flex-wrap">
                                        <div class="date"><i class="icon-clock"></i> 2 months ago</div>
                                        <div class="views"><i class="icon-eye"></i> 500</div>
                                        <div class="comments meta-last"><i class="icon-comment"></i>12</div>
                                    </div>
                                </div>
                                <div class="post-body">
                                    <p class="lead">{{post}}</p>
                                    <p>{{post.body}}</p>
                                    <p>
                                        <img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/featured-pic-3.jpeg"
                                             alt="..." class="img-fluid"></p>
                                    <h3>Lorem Ipsum Dolor</h3>
                                </div>
                                <div class="post-tags"><a href="#" class="tag">#Business</a><a href="#" class="tag">#Tricks</a><a
                                        href="#" class="tag">#Financial</a><a href="#" class="tag">#Economy</a></div>
                                <div class="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row">
                                    <a href="#" class="prev-post text-left d-flex align-items-center">
                                        <div class="icon prev"><i class="fa fa-angle-left"></i></div>
                                        <div class="text"><strong class="text-primary">Previous Post </strong>
                                            <h6>I Bought a Wedding Dress.</h6>
                                        </div>
                                    </a><a href="#"
                                           class="next-post text-right d-flex align-items-center justify-content-end">
                                    <div class="text"><strong class="text-primary">Next Post </strong>
                                        <h6>I Bought a Wedding Dress.</h6>
                                    </div>
                                    <div class="icon next"><i class="fa fa-angle-right"> </i></div>
                                </a></div>
                            <Comment/>
                                <LeaveComments/>
                            </div>
                        </div>
                    </div>
                </main>
                <Sidebar></Sidebar>

            </template>
        </MasterBlog>
    </div>
</template>

<script>

    import MasterBlog from "../layouts/MasterBlog";
    import Sidebar from "../layouts/partials/Sidebar";
    import axios from 'axios'
    import Comment from "../layouts/partials/post/Comment";
    import LeaveComments from "../layouts/partials/post/LeaveComments";


    export default {
        name: "Post",
        components: {
            LeaveComments,
            Comment,
            Sidebar,
            MasterBlog

        },
        data() {
            return {
                post: ''

            }
        },
        mounted() {

            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
                .then(response => this.post = response.data)
            console.log(this.post)

        }
    }
</script>

<style scoped>

</style>
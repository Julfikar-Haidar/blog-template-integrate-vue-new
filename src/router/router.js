/*System Importing*/
import Vue from 'vue'
import VueRouter from 'vue-router'

/*Custom Components Importing*/
import Home from '../components/pages/Home'
import Blog from "../components/pages/Blog"
import Post from "../components/pages/Post"
import Postdetails from "../components/pages/Postdetails"

// import Contact from "../components/pages/Contact";
// import Sample from "../components/pages/Sample";



/*Inserting VueRouter to the Vue Framework*/
Vue.use(VueRouter);


const routes = [

    {path: '/', component: Home, name: 'Home'},
    {path: '/blog', component: Blog, name: 'Blog'},
    // {path: '/post', component: Post, name: 'Post'},
    {path: '/post/:id', component: Post, name: 'Post'},
    {path: '/postdetails', component: Postdetails, name: 'Postdetails'},
    // {path: '/sample/:id', component: Sample, name: 'Sample'},

];

export const router = new VueRouter({
    mode: 'history', //hides hash in url after localhost:8080
    routes: routes
});

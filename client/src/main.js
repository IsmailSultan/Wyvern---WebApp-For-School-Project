import { createApp, defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
// import './dropdown.js'



// const explore = defineAsyncComponent({
//     loader: () => import('./views/explore.vue'),
//     loadingComponent: () => import() /* shows while loading */,
//     // errorComponent: ErrorComponent /* shows if there's an error */,
//     delay: 10 /* delay in ms before showing loading component */,
//     timeout: 3000 /* timeout after this many ms */,
// })

import explore from './views/explore.vue';
import landing from './views/landing.vue';
// import search from './views/search.vue';
import login from './views/login.vue';
import signup from './views/signup.vue';
import createPost from './views/createPost.vue'
import posts from './views/posts.vue'
import profile from './views/profile.vue'

const routes = [
    {path:'/explore', component: explore, name : 'explore'},
    {path:'/', component: landing},
    {path:'/home', component: landing},
    {path:'/login', component: login},
    {path:'/signup', component: signup},
    {path:'/CreatePost', component: createPost},
    {path:'/posts/:id', component: posts},
    {path:'/profile/:username/:id', component: profile}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')

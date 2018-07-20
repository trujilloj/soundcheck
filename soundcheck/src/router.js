import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Requests from './views/Requests.vue'
import Matches from './views/Matches.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/requests',
            name: 'requests',
            component: Requests
        },
        {
            path: '/matches',
            name: 'matches',
            component: Matches
        }
    ]
})
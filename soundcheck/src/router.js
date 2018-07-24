import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Lend from './views/Lend.vue'
import Borrow from './views/Borrow.vue'

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
            path: '/lend',
            name: 'lend',
            component: Lend
        },
        {
            path: '/borrow',
            name: 'borrow',
            component: Borrow
        }
    ]
})
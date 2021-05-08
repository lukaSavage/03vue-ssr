import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Abort from '../components/Abort.vue'


Vue.use(VueRouter)

export default function createRouter() {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/home',
                component: Home
            },
            {
                path: '/abort',
                component: Abort
            }
        ]
    })
}
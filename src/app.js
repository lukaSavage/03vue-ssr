/* 服务端入口文件 */
import Vue from 'vue'

import App from './App.vue'
import createRouter from './router/index'

// 暴露出app对象和路由对象

export default function createApp() {
    const router = createRouter();
    const app = new Vue({
        router,
        render: h => h(App)
    })
    return {
        router,
        app
    }
}
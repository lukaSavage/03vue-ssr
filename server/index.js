const express = require('express');
const Vue = require('vue');

// 1.创建express实例、rendereer渲染器以及vue实例
const app = express();
const renderer = require('vue-server-renderer').createRenderer();
const page = new Vue({
    data() {
        return {
            title: 'lukasavage'
        }
    },
    template: `
        <div>
            <h1>{{title}}</h1>
            hello, vue ssr~
        </div>
    `
});


// 2.后端路由建立

app.get('/', async (req, res) => {
    const html = await renderer.renderToString(page);
    res.send(html);
})

app.listen(3000, err=>{
    if(!err) {
        console.log('服务器请求成功！请访问localhost:3000');
    }
})

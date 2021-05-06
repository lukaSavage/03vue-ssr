const express = require('express');
const Vue = require('vue');

// 1.创建express实例、rendereer渲染器以及vue实例
const app = express();
const renderer = require('vue-server-renderer').createRenderer();
const page = new Vue({});

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ 
    target: 'http://www.example.org', 
    changeOrigin: true,
    pathRewrite: {
        '^/api' : '/'
    }
}));

app.listen(3002);


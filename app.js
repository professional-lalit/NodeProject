// const http = require('http');

// const routes = require('./routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

// server.listen(3000);

const express = require('express');

const app = express();

app.use('/',(req,res,next)=>{
    console.log('This always runs');
    next();
})

app.use('/add-product',(req,res,next)=>{
    console.log('In another middleware1');
    res.send('<h1>The "Add Product Page"</h1>');
})

app.use('/',(req,res,next)=>{
    console.log('In another middleware2');
    res.send('<h1>Hello from NodeJS</h1>');
})

app.listen(3000);


const express = require('express');
const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button>'
    );
});

router.post('/product',(req,res,next)=>{
    res.send('<h1>The "Product Details Page"</h1>');
})

module.exports = router;
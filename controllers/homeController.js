const { Router } = require('express');
const router = Router();

const productService = require('../services/productService')

router.get('/', (req, res)=>{
    res.redirect('./products');
});

router.get('/addProduct', (req, res)=>{
    res.render('addProduct');
});

router.post('/addProduct', (req, res)=>{
    //console.log(req.body);
    productService.create(req.body)
    .then(()=>
    res.redirect('/')
    )
    .catch(err=> console.log(err))
});

router.get('/blog', (req, res)=>{
    res.render('blog-grid-sidebar')
})

module.exports = router;
const { Router } = require('express');
const router = Router();

const productService = require('../services/productService')

router.get('/Product', (req, res)=>{
    res.render('addProduct');
});

router.post('/Product', (req, res)=>{
    //console.log(req.body);
    productService.create(req.body)
    .then(()=>
    res.redirect('/')
    )
    .catch(err=> console.log(err))
});

module.exports = router;
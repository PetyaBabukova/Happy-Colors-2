const {Router} = require('express');

const productService = require('../services/productService');

const router = Router();

router.get('/', (req,res)=>{

    let products = productService.getAll();
    res.render('productGrids', {products});
});

module.exports = router;
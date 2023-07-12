const {Router} = require('express');
const productService = require('../services/productService')

const router = Router();

router.get('/', (req,res)=>{

    let products = productService.getAll();
    res.render('productGrids', {products});
});

router.get('/add', (req, res)=>{
    res.render('addProduct');
});

router.post('/add', (req, res)=>{
    //console.log(req.body);
    productService.create(req.body)
    .then(()=>
    res.redirect('/')
    )
    .catch(err=> console.log(err))
})

module.exports = router;
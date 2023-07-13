const {Router} = require('express');
const productService = require('../services/productService')

const router = Router();

router.get('/', (req,res)=>{

    productService.getAll(req.query)
        .then(products => {
            res.render('productGrids', { title: 'Browse', products });
        })
        .catch(() => res.status(500).end())
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
});



module.exports = router;
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

router.get('/:category',(req, res)=>{

let category = req.path.slice(1, req.path.length)

productService.getAllCategories(category)
.then(products => {
    
    res.render('productGrids', { title: 'Browse', products });
})
.catch(() => res.status(500).end())
});





router.get('/:productId/details', async (req, res)=>{
    let product = await productService.getOne(req.params.productId)
    res.render('product-details', {product})
})



module.exports = router;
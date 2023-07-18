const{ Router } = require('express');
const productController = require('./controllers/productController');
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const addController = require('./controllers/addController');

const router = Router();

router.use('/', homeController);
router.use('/products', productController);
router.use('/user', userController);
router.use('/add', addController)

// router.get('*', (req, res)=>{
//     res.render('404')
// );}


module.exports = router;

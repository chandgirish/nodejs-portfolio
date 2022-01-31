const router = require('express').Router();
const ProductRouter = require('./modules/products/product.route');

router.use('/product',ProductRouter);


module.exports = router;
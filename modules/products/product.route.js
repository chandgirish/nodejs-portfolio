const router = require('express').Router();

const ProductController = require('./product.controller');

router.route('/')
    .get(ProductController.get)
    .post(ProductController.insert)

router.route('/:id')
    .get(ProductController.getById)
    .put(ProductController.update)
    .delete(ProductController.remove)


module.exports = router;
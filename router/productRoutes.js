const express = require('express');
const router = express.Router();
const productController = require('../controllers/product/productController');


router.get('/products', productController.index);
router.get('/product/create', productController.create);
router.get('/product/store', productController.store);
router.get('/product/edit/:id', productController.edit);
router.get('/product/update/:id', productController.update);
router.get('/product/:id', productController.viewDetails);

module.exports = router;
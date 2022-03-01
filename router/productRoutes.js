const express = require('express');
const router = express.Router();
const productController = require('../controllers/product/productController');


router.get('/product/list', productController.index);
router.get('/product/create', productController.create);
router.get('/product/store', productController.store);
router.get('/product/edit', productController.edit);
router.get('/product/update', productController.update);
router.get('/product/:id', productController.viewDetails);

module.exports = router;
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard/dashboardController');
const productController = require('../controllers/product/productController');






router.get('/', dashboardController.index);
router.get('/users', dashboardController.userList);

router.get('/products', productController.index);
router.get('/product/create', productController.create);
router.get('/product/store', productController.store);
router.get('/product/edit/:id', productController.edit);
router.get('/product/update/:id', productController.update);
router.get('/product/:id', productController.viewDetails);

router.get('/ok', productController.OK);

module.exports = router;
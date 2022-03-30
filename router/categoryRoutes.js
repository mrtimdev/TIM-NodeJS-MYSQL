const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category/categoryController');


router.get('/categories', categoryController.index);


module.exports = router;
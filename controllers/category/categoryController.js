const CategoryModel = require('../../models/category/categoryModel');


exports.index = (req, res) => {
    CategoryModel.getAllCategories((err, category) => {
        if (err) {
            res.send(err);
        } else {
            res.render('category/index', { title: 'All Categories', categories: category });
        }
    });
}
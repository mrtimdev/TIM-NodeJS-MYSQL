const ProductModel = require('../../models/product/productModel');




// // get all employee list
// exports.getEmployeeList = (req, res) => {
//     //console.log('here all products list');
//     ProductModel.getAllEmployees((err, products) => {
//         console.log('We are here');
//         if (err)
//             res.send(err);
//         console.log('Employees', products);
//         res.send(products)
//     })
// }
const index = (req, res) => {
    ProductModel.getAllProducts((err, products) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Employees', products);
        res.render('product/index', { title: 'Products', products: products });
    })
}
const viewDetails = (req, res) => {
    ProductModel.getProductByID(req.params.id, (err, product) => {
        if (err)
            res.send(err);
        res.render('product/view', { title: 'Product Details', products: product });
    })
}
const create = (req, res) => {
    // const product = new Product(req.body);
    res.send('Hello From Product Model create Function');
}
const store = (req, res) => {
    // const product = new Product(req.body);
    res.send('Hello From Product Model Store FN');
}

const edit = (req, res) => {
    // const product = new Product(req.body);
    res.send('Hello From Product Model edit FN');
}
const update = (req, res) => {
    // const product = new Product(req.body);
    res.send('Hello From Product Model update FN');
}

module.exports = {
    index,
    create,
    store,
    edit,
    update,
    viewDetails,
}
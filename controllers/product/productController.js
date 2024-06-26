const ProductModel = require('../../models/product/productModel');


const index = (req, res) => {
    ProductModel.getAllProducts((err, products) => {
        if (err)
            res.send(err);
        const bc = {
            url: 'products',
            page_title: 'Products List'
        };
        res.render('product/index', { bc, title: 'Products', products: products });
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
    ProductModel.getProductByID(req.params.id, (err, product) => {
        if (err)
            res.send(err);
        res.render('product/edit', { title: 'Edit Product', products: product });
    })
}
const update = (req, res) => {
    const ProductData = new ProductModel(req.body);
    console.log('ProductData update', ProductData);
    // check null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        // res.send(400).send({ success: false, message: 'Please fill all fields' });
    } else {
        ProductModel.updateProduct(req.params.id, ProductData, (err, product) => {
            if (err)
            // res.send(err);
                res.json({ status: true, message: 'Product updated Successfully' })
        })
    }
}

const OK = (req, res) => {
    res.send('OK, Hello Bro');
}

module.exports = {
    index,
    create,
    store,
    edit,
    update,
    viewDetails,
    OK,
}
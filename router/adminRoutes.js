const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard/dashboardController');

const productController = require('../controllers/product/productController');

const ACL = require('acl')

// const isAuthenticated = (req, res, next) => {
//     if (req.isAuthenticated) {
//         next()
//     }
//     res.redirect('/dashboard')
// }

function accessControl() {
    const nodeAcl = new ACL(new ACL.memoryBackend())

    nodeAcl.allow([{
        roles: 'admin',
        allows: [{
            resources: ['/home', '/api/users', '/api/posts'],
            permissions: '*',
        }],
    }, {
        roles: 'user',
        allows: [{
            resources: ['/api/users', '/api/posts'],
            permissions: 'get',
        }],
    }, {
        roles: 'guest',
        allows: [],
    }])

    // Inherit roles
    //  Every user is allowed to do what guests do
    //  Every admin is allowed to do what users do
    nodeAcl.addRoleParents('user', 'guest')
    nodeAcl.addRoleParents('admin', 'user')

    nodeAcl.addUserRoles('joe', 'admin')
    nodeAcl.addUserRoles('john', 'user')
    nodeAcl.addUserRoles(0, 'guest')

    return nodeAcl
}

const access = accessControl()

router.get('/', dashboardController.index);



// router.get('/products', [isAuthenticated, access.middleware()], productController.index);
// router.get('/products', productController.index);
// router.get('/product/create', productController.create);
// router.get('/product/store', productController.store);
// router.get('/product/edit/:id', productController.edit);
// router.get('/product/update/:id', productController.update);
// router.get('/product/:id', productController.viewDetails);

// function checkForPermissions() {
//     return acl.middleware(4);
// }


module.exports = router;
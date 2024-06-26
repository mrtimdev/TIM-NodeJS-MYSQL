const axios = require('axios');

exports.index = (req, res) => {
    const bc = {
        url: 'dashboard',
        page_title: 'Welcome To Admin Dashboard'
    };
    res.render('dashboard/index', { bc, title: 'Welcome To Admin Dashboard' })
}

// Restfull api
exports.userList = async(req, res) => {
    const bc = {
        url: 'users',
        page_title: 'Users List'
    };
    try {
        const response = await axios({
            url: "http://127.0.0.1:8000/api/tim/admin/v1/users",
            method: "get",
        });

        res.render('users/index', { bc, title: 'Users API', users: response.data });
    } catch (err) {
        res.status(500).render('error', { title: 'error' });
    }
}
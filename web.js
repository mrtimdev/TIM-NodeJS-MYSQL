require('dotenv').config();
const express = require('express');
const productRoutes = require('./router/productRoutes');
const categoryRoutes = require('./router/categoryRoutes');
const adminRoutes = require('./router/adminRoutes');
const Routes = require('./router/Routes');
const bodyParser = require('body-parser');
const app = express();
var fs = require("fs");
const axios = require('axios')
const zipLocal = require("zip-local");

// zipLocal.sync.zip("files").compress().save("my-files.zip");
// set using ejs
app.set('view engine', 'ejs');
// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// parse request data content type application/json
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
        res.render('index', { title: 'Welcome - TIM NODEJS Develop' });
    })
    // app.use('/admin', productRoutes);
    // app.use('/admin', categoryRoutes);
app.use('/dashboard', Routes);

app.get('/', (req, res) => {
    res.send('Hello From Index NODE JS mySQL');
});


// Restfull api

// app.get('/listUsers', function(req, res) {
//     let data = axios.get('http://localhost:5000/api/v1/employee/1').then((response) => {
//         response.data.map((user) => {
//             return user;
//         });
//     });
//     console.log(data);
//     res.render('index', { title: 'Users API', users: JSON.stringify(data) });
// })

app.get("/listUsers", async(req, res) => {
    var userDate = [];
    try {
        const response = await axios({
            url: "http://127.0.0.1:8000/api/tim/admin/v1/users",
            method: "get",
        });
        res.render('index', { title: 'Users API', users: response.data });
    } catch (err) {
        res.status(500).render('error', { title: 'error' });
    }
});


app.listen(process.env.PORT, () => {
    console.log('Server Started With: ' + process.env.BASE_URL);
});


exports = module.exports = app;
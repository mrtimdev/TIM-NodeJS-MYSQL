require('dotenv').config();
const express = require('express');
const productRoutes = require('./router/productRoutes');
const bodyParser = require('body-parser');
const app = express();
// set using ejs
app.set('view engine', 'ejs');
// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// parse request data content type application/json
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome - TIM NODEJS Develop' });
})
app.use('/admin', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello From Index MongoDB');
});


app.listen(process.env.PORT, () => {
    console.log('Server Started With: ' + process.env.BASE_URL);
});


exports = module.exports = app;
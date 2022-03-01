const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

dbConn.connect(function(error) {
    if (error) throw error;
    console.log('MYSQL Database Connected Successfully !');
})

module.exports = dbConn;
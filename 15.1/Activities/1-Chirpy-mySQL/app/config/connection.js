// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: "",
    database: "chirpy"
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
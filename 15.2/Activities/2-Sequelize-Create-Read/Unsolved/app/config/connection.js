// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Lists out connection options
var source = {

  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist"
  },

  jawsDB: {
    port: 3306,
    host: "l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "cm0zdmk2ez4igof5",
    password: "yuhl98jsef0k7ul4",
    database: "lghowl35ljxl5vao"
  }
};

// Selects a connection (can be changed quickly as needed)
var selectedSource = source.localhost;

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: "mysql"
});

// Exports the connection for other files to use
module.exports = sequelize;


// Requiring the Sequelize module here in order to specify data types for our Model
var Sequelize = require("sequelize");
// Requiring the connection to our database
var connection = require("../config/connection");

// Creates a Todo model which will become a Todos table
var Todo = connection.define("Todo", {
  text: Sequelize.STRING,
  complete: Sequelize.BOOLEAN
});

// Syncing our Todo model wtih our database
Todo.sync();

// Exporting the Todo model
module.exports = Todo;

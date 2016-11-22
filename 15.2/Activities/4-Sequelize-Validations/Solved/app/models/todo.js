// Requiring the Sequelize module here in order to specify data types for our Model
var Sequelize = require("sequelize");
// Requiring the connection to our database
var connection = require("../config/connection");

// Creates a Todo model which will become a Todos table
var Todo = connection.define("Todo", {
  text: {
    type: Sequelize.STRING,
    // allowNull: false makes it so that a value must be entered for the "text" field
    // when creating a new todo
    allowNull: false,
    // validate is an optional object that can perform several other types of validations
    validate: {
      // Here we specify that when creating a new todo it's text length must be
      // at least one character, but no larger than 140 characters
      len: [
        1, 140
      ]
    }
  },
  complete: {
    type: Sequelize.BOOLEAN,
    // allowNull: false makes it so that when we create a todo, we must also specify a
    // value for complete or this false
    defaultValue: false
  }
});

// Syncing our Todo model wtih our database
Todo.sync({ force: true });

// Exporting the Todo model
module.exports = Todo;

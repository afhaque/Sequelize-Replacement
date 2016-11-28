// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Book = sequelize.define("book", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
  },
  author: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  }
}, {
  timestamps: false
});

// Syncs with DB
Book.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Book;
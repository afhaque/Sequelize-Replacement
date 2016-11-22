// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var Todo = require("../models/todo");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    // findAll returns all entries for a table when used with no arguments
    Todo.findAll().then(function(dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // POST route for saving a new todo
  app.post("/api/todos", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    Todo.create({ text: req.body.todoText, complete: false }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting todos
  app.delete("/api/todos/:id", function(req, res) {
    // destroy takes in one argument. A a "where" object describing which record
    // or records to delete from our table.
    Todo.destroy({ where: { id: req.params.id } }).then(function(dbTodo) {
      // Unlike find and create methods, the argument returned in the callback function
      // is an integer for how many records were affected
      res.json(dbTodo);
    });
  });

  // PUT route for updating todos
  app.put("/api/todos", function(req, res) {
    var updatedTodo = { text: req.body.text };
    // update takes in two arguments:
    // 1. An object with keys and values we would like to update
    // 2. A "where" object describing which row or rows to target
    Todo.update(updatedTodo, { where: { id: req.body.id } }).then(function(dbTodo) {
      // In this case dbTodo is an array containing the number of rows updated
      res.json(dbTodo);
    });
  });
};

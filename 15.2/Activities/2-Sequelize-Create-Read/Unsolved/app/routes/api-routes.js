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
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
  });

  // POST route for saving a new todo
  app.post("/api/todos", function(req, res) {
    var todo = {
      text: req.body.todoText,
      complete: false
    };
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user

  });

  // DELETE route for deleting todos
  app.delete("/api/todos/:id", function(req, res) {
    var id = req.params.id;

  });

  // PUT route for updating todos
  app.put("/api/todos", function(req, res) {
    var todo = req.body;

  });
};

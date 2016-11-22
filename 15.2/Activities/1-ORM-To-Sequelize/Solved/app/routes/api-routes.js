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

  });

  // POST route for saving a new todo
  app.post("/api/todos", function(req, res) {
    var todo = {
      text: req.body.todoText,
      complete: false
    };

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

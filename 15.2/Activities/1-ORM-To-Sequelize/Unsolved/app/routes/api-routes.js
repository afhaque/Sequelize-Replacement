// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
var orm = require("../config/orm.js");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    orm.getTodos(function(results) {
      res.json(results);
    });
  });

  // POST route for saving a new todo
  app.post("/api/todos", function(req, res) {
    var todo = {
      text: req.body.todoText,
      complete: false
    };
    orm.addTodo(todo, function(results) {
      res.json(results).status(200);
    });
  });

  // DELETE route for deleting todos
  app.delete("/api/todos/:id", function(req, res) {
    var id = req.params.id;
    orm.deleteTodo(id, function(results) {
      res.json(results).status(200);
    });
  });

  // PUT route for updating todos
  app.put("/api/todos", function(req, res) {
    var todo = req.body;
    orm.editTodo(todo, function(results) {
      res.json(results).status(200);
    });
  });
};

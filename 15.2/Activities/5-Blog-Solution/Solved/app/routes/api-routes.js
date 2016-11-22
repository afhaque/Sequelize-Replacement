// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var Post = require("../models/post");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/posts", function(req, res) {

  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {

  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {

  });

  // PUT route for updating todos
  app.put("/api/posts", function(req, res) {

  });
};

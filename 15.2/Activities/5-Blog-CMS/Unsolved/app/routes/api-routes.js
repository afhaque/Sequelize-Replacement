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

  // GET route for getting all of the posts
  app.get("/api/posts", function(req, res) {
    // Find all of the posts
    // Return the result to the user
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    // Find all posts where the category is equal to req.params.category
    // Return the result to the user
  });

  // Get rotue for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // Find one post where the id is equal to req.params.id
    // Return the result to the user
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    // Create a new post with the data in req.body
    // Return the result to the user
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // Delete a post where the id is equal to req.params.id
    // Return the result to the user
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // Update the post in req.body
    // Return the result to the user
  });
};

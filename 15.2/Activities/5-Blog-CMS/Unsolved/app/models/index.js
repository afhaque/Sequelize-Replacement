// Require the connection
var sequelize = require("../config/connection.js");

// Create an object to attatch all of our models to for exporting so they can
// be required and synce'd all at once
var db = {};

// Require our models
var Author = require("./author.js");
var Post = require("./post.js");

// Attatch our models to the db object
db.Author = Author;
db.Post = Post;

db.Post.belongsTo(db.Author);
db.sequelize = sequelize;

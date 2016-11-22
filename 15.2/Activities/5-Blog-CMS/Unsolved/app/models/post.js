// Requiring the Sequelize module here in order to specify data types for our Model
var Sequelize = require("sequelize");
// Requiring the connection to our database
var connection = require("../config/connection");

// Creates a Post model which will become a Posts table
var Post = connection.define("Post", {
  body: {
    // Since a blog can be very long, We'll use Sequelize.TEXT instead of Sequelize.STRING.
    // This value gives us virtually unlimited space
    type: Sequelize.TEXT,
    // allowNull: false makes it so that a value must be entered for the "body" field
    // when creating a new post
    allowNull: false,
    // validate is an optional object that can perform several other types of validations
    validate: {
      // Do not allow the body to be empty
      notEmpty: true
    }
  },
  title: {
    // Using Sequelize.STRING for the title
    type: Sequelize.STRING,
    // allowNull: false makes it so that when we create a post, we must also specify a
    // value for title
    allowNull: false,
    validate: {
      // Do not allow the title to be empty
      notEmpty: true
    }
  },
  category: {
    // Using Sequelize.STRING for the category
    type: Sequelize.STRING,
    // Giving our post a default value of Personal if one is not given
    defaultValue: "Personal"
  }
});

// Syncing our Post model wtih our database
Post.sync({ force: true });

// Exporting the Post model
module.exports = Post;

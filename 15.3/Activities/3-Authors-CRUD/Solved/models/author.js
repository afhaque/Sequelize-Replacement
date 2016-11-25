module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    // and age of type INTEGER
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  },
  // Here we'll pass a second "classMethods" object into the define method
  // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // When we delete an author, we'll also delete their Posts
          Author.hasMany(models.Post, {
            onDelete: "cascade"
          });
        }
      }
    });
  return Author;
};

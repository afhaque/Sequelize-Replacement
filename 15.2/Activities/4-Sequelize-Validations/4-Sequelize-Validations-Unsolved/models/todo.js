module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    // Add a flag for the text attribute to prevent this field from being null
    // Add a validation for the text attribute to make sure it's at least one character,
    // but no more than 140 characters
    text: DataTypes.STRING,
    // Add a flag for complete so that it's false by default if not given a value
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};

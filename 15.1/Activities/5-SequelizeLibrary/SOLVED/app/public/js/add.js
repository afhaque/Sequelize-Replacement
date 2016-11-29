// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks addBtn
$("#addBtn").on("click", function() {

  // Make a newBook object
  var newBook = {
    title: $("#title").val().trim(),
    author: $("#author").val().trim(),
    genre: $("#genre").val().trim(),
    pages: $("#pages").val().trim()
  };

  // Grab the url from the browser window
  var currentURL = window.location.origin;

  // Send an AJAX POST-request with jQuery
  $.post(currentURL + "/api/new", newBook)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#title").val("");
  $("#author").val("");
  $("#genre").val("");
  $("#pages").val("");

  // Returning false will stop the page from reloading
  return false;
});

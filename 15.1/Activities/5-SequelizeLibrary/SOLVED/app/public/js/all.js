// Grab the current URL of the page
var currentURL = window.location.origin;

// Make a get request to our api route that will return every book
$.get(currentURL + "/api/all", function(data) {

  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var wellSection = $("<div>");
    // Add a class to this div: 'well'
    wellSection.addClass("well");
    // Add an id to the well to mark which well it is
    wellSection.attr("id", "bookWell-" + i);
    // Append the well to the well section
    $("#wellSection").append(wellSection);

    // Now  we add our book data to the well we just placed on the page
    $("#bookWell-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
    $("#bookWell-" + i).append("<h3>Author: " + data[i].author + "</h4>");
    $("#bookWell-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
    $("#bookWell-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
  }
});

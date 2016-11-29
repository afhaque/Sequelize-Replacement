// Grab the current url of the browser's window
var currentURL = window.location.origin;

// When user hits the searchBtn
$("#searchBtn").on("click", function() {

  // Save the book they typed into the bookSearch input
  var bookSearched = $("#bookSearch").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get(currentURL + "/api/" + bookSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});

// When user hits the searchBtn
$("#authorSearchBtn").on("click", function() {

  // Save the book they typed into the bookSearch input
  var authorSearched = $("#authorSearch").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get(currentURL + "/api/author/" + authorSearched, function(data) {

    // Log the data to the console
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});

// When user hits the searchBtn
$("#genreSearchBtn").on("click", function() {

  // Save the book they typed into the bookSearch input
  var genreSearched = $("#genreSearch").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get(currentURL + "/api/genre/" + genreSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});

function renderBooks(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].title + "</h2>");
      div.append("<p>Author: " + data[i].author + "</p>");
      div.append("<p>Genre: " + data[i].genre + "</p>");
      div.append("<p>Pages: " + data[i].pages + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      var info = {
        id: $(this).attr("data-id")
      };

      $.post(currentURL + "/api/delete", info)
        // On success, run the following code
        .done(function(deldata) {
          // Log the data we found
          console.log(deldata);
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}

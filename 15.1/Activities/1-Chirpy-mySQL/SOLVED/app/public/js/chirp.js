// Grab the url from the browser window
var currentURL = window.location.origin;

// When user clicks addBtn
$("#chirpSubmit").on("click", function() {

  // Make a newChirp object
  var newChirp = {
    author: $("#author").val().trim(),
    body: $("#chirpBox").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newChirp);

  // Send an AJAX POST-request with jQuery
  $.post(currentURL + "/api/new", newChirp)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newChirp.author + " chirped: </p>");
      row.append("<p>" + newChirp.body + "</p>");
      row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");

      $("#chirpArea").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirpBox").val("");

  // Returning false will stop the page from reloading
  return false;
});

// When the page loads, grab all of our chirps
$.get(currentURL + "/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].author + " chirped.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirpArea").prepend(row);

    }

  }

});

$(document).ready(function() {
  // Getting references to the name and bio inputs, as well as the author dropdown
  var nameInput = $("#author");
  var bioInput = $("#bio");
  var authorList = $("ul.author-list");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#author-form", handleAuthorFormSubmit);
  $(document).on("click", ".btn-danger", handleDeleteButtonPress);

  // Getting the intiial list of Authors
  getAuthors();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if all fields haven't been filled out
    if (!nameInput.val().trim() || !bioInput.val().trim()) {
      return;
    }
    // Calling the upsertAuthor function and passing in the values of the name and bio
    // inputs
    upsertAuthor({
      name: nameInput
        .val()
        .trim(),
      bio: bioInput
        .val()
        .trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertAuthor(authorData) {
    $.post("/api/authors", authorData)
      .then(getAuthors);
  }

  // Function for creating a new list row for authors
  function createAuthorRow(authorData) {
    var listItem = $("<li>");
    listItem.data("author", authorData);
    listItem.addClass("list-group-item");
    listItem.css({
      padding: "15px",
      height: "80px"
    });
    listItem.text(authorData.name);
    listItem.css({
      "line-height": 3,
      "font-weight": 700
    });
    var seePostsLink = $("<a>");
    seePostsLink.addClass("btn btn-primary");
    seePostsLink.css({
      float: "right",
      "line-height": "2",
      margin: "0 5px",
      padding: "10px"
    });
    var deleteAuthor = $("<a>");
    deleteAuthor.addClass("btn btn-danger");
    deleteAuthor.text("DELETE AUTHOR");
    deleteAuthor.css({
      float: "right",
      "line-height": "2",
      margin: "0 5px",
      padding: "10px"
    });
    var authorPath = "/blog?author_id=" + authorData.id;
    seePostsLink.attr("href", authorPath);
    seePostsLink.text("SEE POSTS");
    listItem.append(deleteAuthor);
    listItem.append(seePostsLink);
    return listItem;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/authors", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
      bioInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList.empty();
    if (rows.length) {
      authorList.append(rows);
    }
    else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.html("You must create an Author before you can create a Post.");
    authorList.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this).parent("li").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
    .done(getAuthors);
  }
});

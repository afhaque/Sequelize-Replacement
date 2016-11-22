$(document).ready(function() {
  var blogContainer = $(".blog-container");
  var posts;

  // This function grabs todos from the database and updates the view
  function getPosts() {
    $.get("/api/posts", function(data) {
      console.log("Posts", data);
      posts = data;
      initializeRows();
    });
  }
  function initializeRows() {
    blogContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      rowsToAdd.push(createNewRow(posts[i]));
    }
    blogContainer.prepend(rowsToAdd);
  }

  // This function constructs a todo-item row
  function createNewRow(post) {
    // var newPostPanel = $("<li>");
    // newInputRow.addClass("list-group-item todo-item");
    // var newTodoSpan = $("<span>");
    // newTodoSpan.text(todo.text);
    // if (todo.complete) {
    //   newTodoSpan.css("text-decoration", "line-through");
    // }
    // newInputRow.append(newTodoSpan);
    // var newTodoInput = $("<input>");
    // newTodoInput.attr("type", "text");
    // newTodoInput.addClass("edit");
    // newTodoInput.css("display", "none");
    // newInputRow.append(newTodoInput);
    // var newDeleteBtn = $("<button>");
    // newDeleteBtn.addClass("delete btn btn-default");
    // newDeleteBtn.text("x");
    // newDeleteBtn.data("id", todo.id);
    // var newCompleteBtn = $("<button>");
    // newCompleteBtn.addClass("complete btn btn-default");
    // newCompleteBtn.text("✓");
    // newInputRow.append(newDeleteBtn);
    // newInputRow.append(newCompleteBtn);
    // newInputRow.data("todo", todo);
    // return newInputRow;
  }


});

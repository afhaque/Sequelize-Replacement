$(document).ready(function() {
  var newItemInput = $("input.new-item");
  var addTodoBtn = $(".new-item a.btn");
  var todoContainer = $(".todo-container");
  var todos = ["Learn MYSQL", "Learn Sequelize", "Learn Handlebars"];

  function initializeRows() {
    var rowsToAdd = [];
    for (var i = 0; i < todos.length; i++) {
      rowsToAdd.push(createNewRow(todos[i]));
    }
    todoContainer.prepend(rowsToAdd);
  }

  initializeRows();

  function createNewRow(todoText) {
    var newInputRow = $("<li>");
    newInputRow.addClass("list-group-item");
    var newTodoSpan = $("<span>");
    newTodoSpan.text(todoText);
    newInputRow.append(newTodoSpan);
    var newDeleteBtn = $("<button>");
    newDeleteBtn.addClass("delete");
    newDeleteBtn.text("x");
    newInputRow.append(newDeleteBtn);
    return newInputRow;
  }

  addTodoBtn.on("click", handleNewBtnClick);

  function handleNewBtnClick() {
    if (!newItemInput.val().trim()) {
      return;
    }
    var todoToAdd = newItemInput.val().trim();
    var newRow = createNewRow(todoToAdd);
    newItemInput.val("");
    $(".todo-container").prepend(newRow);
  }

  $(document).on("click", "button.delete", handleTodoDelete);

  function handleTodoDelete() {
    $(this).parent().remove();
  }
});

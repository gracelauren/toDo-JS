$(function(){
  $("form").submit(function(event) {
    event.preventDefault();

// .off() is really difficult to understand right now.

    var createList = function() {
      var listName = $("#new-list-name").val();
      var newList = {
                      name: listName,
                      tasks: []
                    };
      $("#lists ul").append("<li class='list'>" + newList.name + "</li>");
    };
    $("#lists").show();
    createList();

    var createTask = function() {
      var taskName = $("#new-task-name").val();
      var newTask = {
                      name: taskName
                    };
      newList.tasks.push(newTask);

    };

    var buttonPressed = function() {
      $("form")[0].reset();
    };

    $(".list").last().click(function(){
      $("#task-section").empty().show();
      $("#add-list").next().hide();
      $("#task-section").append('<div id="tasks">' +
        '<h2>Tasks for ' + newList.name + '</h2>' +
          '<ul>' +
          '</ul>' +
        '</div><h2>Add a Task to ' + newList.name + '</h2>' +
          '<label for="new-task-name">New Task</label>' +
          '<input type="text" id="new-task-name">' +
          '<button type="submit" id="add-task">Add Task</button>');
      $("form").off("submit");
      $("form").submit(function(event) {
        event.preventDefault();
        // createTask();
      });
      if (newList.tasks.length !== 0) {
        $("#tasks").show();
      }
    });

    $("#add-list").click(function(){
      $("#add-list").next().show();
      $("#task-section").empty().hide();
      // $("form").off("submit");
      // $("form").submit(function(event) {
      //   event.preventDefault();
      //   createList();
      // });
    });

    buttonPressed();
  });
});

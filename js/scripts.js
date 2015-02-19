$(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    var listName = $("#new-list-name").val();

    var newList = {
                    name: listName,
                    tasks: []
                  };

    $("#lists ul").append("<li>" + newList.name + "</li>");
    $("#lists").show();
  });
});

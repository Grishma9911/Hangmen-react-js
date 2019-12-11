// When user click (clicks addBtn)
$(".Game-Word").on("click", function(event) {
    event.preventDefault();
  
    // Make a newUser object
    var newUser = {
      number: $("#number").val().trim(),
    };
  
    console.log(newUser);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new/game", newUser)
      // On success, run the following code
      .then(function() {
        console.log("Inside post route");
  
      });
  
      $.post("api/new/player", newUser)
      // On success, run the following code
      .then(function() {
        console.log("Inside post game-data-route");
  
      });
   });
$(function() {
  setupJoke();
  $('button').on("click", function(){
    setupJoke();
  });

  $('#upvote').on("click", function() {
   $.post("/upvote");
  });
});

var setupJoke = function(){
  $.get("/jokes", function(data){
    $('#setup').html(data.setup);
    $('#punchline').html(data.punchline);
  },"json");
}

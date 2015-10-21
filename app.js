$(function() {
  setupJoke();
  $('button').on("click", function(){
    setupJoke();
  });
});

var setupJoke = function(){
  $.get("/jokes", function(data){
    $('#setup').html(data.setup);
    $('#punchline').html(data.punchline);
  },"json");
}

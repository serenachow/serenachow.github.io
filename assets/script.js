$(document).ready(function(){
  
  $(".button1").click(function(){
    $("#modal-container").hide();
  });
  $(".button2").click(function(){
    $("#modal-container").hide();
  });
  $("#link").click(function(){
    $("#modal-container").show();
  });
  $("#modal-overlay").click(function(){
    $("#modal-container").hide();
  });

  
});
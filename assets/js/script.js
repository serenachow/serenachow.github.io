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

// MONTHLY
  

  $(".td-item").click(function(){
    $("#event-container").show();
  });


  $(".td-item").click(function(){
    $("#event-container").css("visibility","visible");
  });

   $(".button1").click(function(){
    $("#event-container").css("visibility","hidden");
  });

   $(".button2").click(function(){
    $("#event-container").css("visibility","hidden");
  });

   







  
});
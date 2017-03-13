click = 1;

$(document).ready(function(){

  buttonClick();


}); //end doc ready


function buttonClick(){
  $(".generate").on("click", function(){
    $(".container").append("<div></div>");
    appendButton();
  });
}

function appendButton(){
$(".container").last().append("<button>Toggle</button><p class='newP'></p>");
$(".counter").text(click ++);
}

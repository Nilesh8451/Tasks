$(document).ready(function () {
  //
  $("p").first().css("background-color", "yellow");
  $("p").last().css("background-color", "pink");
  $("p").eq(1).css("font-size", "20px");
  $("p").filter(".myAP").css("font-size", "50px");
  $("p").not(".myAP").css("color", "green");
});

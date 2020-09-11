$(document).ready(function () {
  $("#to").click(function () {
    $("p").toggle();
  });

  $("#fI").click(function () {
    $("#myDiv01").fadeIn();
    $("#myDiv02").fadeIn(2000);
  });

  $("#fO").click(function () {
    $("#myDiv01").fadeOut();
    $("#myDiv02").fadeOut("slow");
  });

  $("#fT").click(function () {
    $("#myDiv01").fadeToggle();
    $("#myDiv02").fadeToggle("medium");
  });

  $("#fTo").click(function () {
    $("#myDiv01").fadeTo("slow", 0.8);
    $("#myDiv02").fadeTo("medium", 0.3);
  });
});

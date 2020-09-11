$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideDown(5000, function () {
      console.log("Slide down complete");
    });
    $("#panel").fadeOut(8000);
  });

  $("#stopEx1").click(function () {
    $("#panel").stop();
  });

  $("#stopEx2").click(function () {
    $("#panel").stop(true);
  });

  $("#stopEx3").click(function () {
    $("#panel").stop(true, true);
  });

  $("#stopEx4").click(function () {
    $("#panel").stop(true, false);
  });

  $("#stopEx5").click(function () {
    $("#panel").stop(false, true);
  });
});

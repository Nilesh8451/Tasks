$(document).ready(function () {
  $("button").click(function () {
    $("p").css("color", "red").slideUp(2000).slideDown(3000);
  });
});

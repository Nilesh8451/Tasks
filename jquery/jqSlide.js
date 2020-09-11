$(document).ready(function () {
  $("#sD").click(function () {
    $("#myDiv01").slideDown(2000);
  });

  $("#sU").click(function () {
    $("#myDiv01").slideUp("slow");
  });

  $("#sT").click(function () {
    $("#myDiv01").slideToggle("fast");
  });
});

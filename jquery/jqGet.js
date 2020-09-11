$(document).ready(function () {
  $("#getEx").on("click", function () {
    alert("Text: " + $("p").text());
  });

  $("#getEx").on("click", function () {
    alert("Html: " + $("p").html());
  });

  $("#getEx1").on("click", function () {
    alert($("#myInputF").val());
  });

  console.log("Href attribute: " + $("a").attr("href"));
});

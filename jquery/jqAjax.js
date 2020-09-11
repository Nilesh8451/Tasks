$(document).ready(function () {
  $("#AjaxGetOne").click(function () {
    $(".myDiv").load("demo_test.txt", function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "success")
        alert("External content loaded successfully! " + responseTxt);
      if (statusTxt == "error")
        alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
  });

  $("#AjaxGet").click(function () {
    $.get("demo_test.txt", function (data, status) {
      $(".myDiv").html(data);
      //   alert("Data: " + data + "\nStatus: " + status);
    });
  });
});

$(document).ready(function () {
  $("#getEx").on("click", function () {
    $(this).text("SET");
  });

  $("#getEx").on("click", function () {
    $("#myparaEx").html("<b>This is new Para</b>");
  });

  $("#getEx1").on("click", function () {
    $("#myInputF").val("Nilesh Chavan");
  });
});

// Callback function

$(document).ready(function () {
  $("#getExC").on("click", function () {
    $(this).text(function (i, oldVal) {
      return "Old Text: " + oldVal + " New Text: Set";
    });
  });

  $("#getExC").on("click", function () {
    $("#myparaEx1").html(function (i, oldVal) {
      return "Old Html: " + oldVal + " New Html: <b>Tarak Mehta</b>";
    });
  });

  $("#getEx1C").on("click", function () {
    $("#myInputFC").val(function (i, oldVal) {
      return (
        "This is Old Value: " +
        oldVal +
        " This is I assigning to you: Nilesh Chavan"
      );
    });
  });
});

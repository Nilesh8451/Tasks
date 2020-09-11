$(document).ready(function () {
  $("#ex1").click(function () {
    $("#myDiv01").animate({ left: "40%" }, 1000);
  });

  $("#ex2").click(function () {
    $("#myDiv01").animate({ left: "40px", top: "120px", width: "100px" }, 1000);
  });

  $("#ex3").click(function () {
    $("#myDiv01").animate(
      { left: "40px", top: "120px", width: "+=100px", height: "+=100px" },
      1000
    );
  });

  $("#ex4").click(function () {
    $("#myDiv01").animate({ height: "toggle" }, 1000);
  });

  $("#ex5").click(function () {
    var div = $("#myDiv01");
    div.animate({ height: "300px", opacity: "0.4" }, "slow");
    div.animate({ width: "300px", opacity: "0.8" }, "slow");
    div.animate({ height: "100px", opacity: "0.4" }, "slow");
    div.animate({ width: "100px", opacity: "0.8" }, "slow");
  });
});

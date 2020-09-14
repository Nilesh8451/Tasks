// JQuery Ancestors

$(document).ready(function () {
  //   $("span").parent().css({ color: "red", border: "2px solid red" });
  //   $("span").parents().css({ color: "blue" });
  //   $("span").parentsUntil("div").css({ color: "green" });
});

// JQuery Descendants

$(document).ready(function () {
  $("div").find("span").css({ color: "red" });
});

// JQuery Sibling

$(document).ready(function () {
  //   $("h2").siblings().css({ border: "1px solid red" });
  //   $("h2").siblings("p").css({ border: "1px solid red" });
  //   $("h2").next().css({ border: "1px solid red" });
  //   $("h2").nextAll().css({ border: "1px solid red" });
  //   $("h2").nextUntil("h5").css({ border: "1px solid red" });
  //
  //   $("h4").prev().css({ border: "1px solid red" });
  //   $("h4").prevAll().css({ border: "1px solid red" });
  //   $("h4").prevUntil("p").css({ border: "1px solid red" });
});

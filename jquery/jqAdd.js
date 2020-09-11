$(document).ready(function () {
  $("button").click(function () {
    var le = $("ul")[0].children.length + 1;
    var el = $("<li>Item</li>").text(`Item ${le}`);
    $("ul").prepend(el);
  });
});

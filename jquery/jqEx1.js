$(document).ready(function () {
  var myElements = $("#id01");
  //   console.log(myElements);
  $("#demo").text(
    "The text from the id01 paragraph is: " + myElements[0].innerHTML
  );

  //By Tag

  var myTagH2 = $("h2");
  //   console.log(myTagH2);
  myTagH2[0].innerHTML = myTagH2[0].innerHTML + " But for you its Tag";

  //   By Class

  var myPara = $(".myParaClass");
  //   console.log(myPara);
  myPara[0].style.color = "blue";
  myPara.css("font-size", "30px");

  //   Css selector

  var myParaAgain = $("p.myParaClass");
  console.log(myParaAgain[0]);

  //   Get Text Content
  console.log(myParaAgain.text());

  //   Set Html
  var myPara2 = $("#id02");
  myPara2.html("<b>This is Set by Html in JQuery</b>");

  //

  //   Hide an element
  var myPara3 = $("#id03");
  myPara3.hide();
  myPara3.show();
});

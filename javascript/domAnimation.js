function myMove() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }

  var elem2 = document.getElementById("animate2");
  var posH = 350;
  var posV = 0;
  var id = setInterval(frames, 5);
  function frames() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      posV++;
      posH--;
      elem2.style.top = posV + "px";
      elem2.style.left = posH + "px";
    }
  }
}

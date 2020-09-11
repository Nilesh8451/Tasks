$(document).ready(function () {
  $("button").click(function () {
    $("p").hide();
  });

  $("p").dblclick(function () {
    $(this).hide();
  });

  //   $("p").hover(
  //     function () {
  //       alert("You entered p");
  //     },
  //     function () {
  //       alert("Bye! You now leave p");
  //     }
  //   );
});

$(document).ready(function () {
  $("input").focus(function () {
    $(this).css("border", "3px solid blue");
  });

  $("input").blur(function () {
    // console.log(this.value);
    if (this.value.length == 0) {
      $(this).css("border", "3px solid red");
    } else {
      $(this).css("border", "3px solid green");
    }
  });
});

// Adding Single Listener

// $(document).ready(function () {
//   $("h2").on("click", function () {
//     $(this).hide();
//   });
// });

//

// Multiple Listener

$(document).ready(function () {
  $("h2").on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
      $(this).css("background-color", "lightblue");
    },
    click: function () {
      $(this).css("background-color", "yellow");
    },
  });
});

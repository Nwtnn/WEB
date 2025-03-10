$(document).ready(function (e) {
    $("button").click(function () {
      alert("Button Clicked");
    });
  
    $("button").on("click", function () {
      $("p").hide();
    });
  
    $("p").on({
      mouseenter: function () {
        $(this).css("background-color", "lightgray");
      },
      mouseleave: function () {
        $(this).css("background-color", "blue");
      },
      click: function () {
        $(this).css("background-color", "yellow");
      },
    });
  });
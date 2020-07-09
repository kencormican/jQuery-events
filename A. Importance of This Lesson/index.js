$(document).ready(function () {
  $(".button-class").mouseenter(function () {
    $(this).removeClass().addClass("makeRed");
  });
  $(".button-class").mouseleave(function () {
    $(this).removeClass().addClass("makeBlue");
  });
  $("#reset").click(function(){
      $("button").removeClass();
  })
});



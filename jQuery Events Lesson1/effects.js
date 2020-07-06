$(document).ready(function () {
  //   jQuery Effects provide animations using jquery methods
  //   show(), hide() & toggle(): hide visible elements and show hidden elements
  //   Pass the speed: slow, medium, fast or a time in milliseconds, into the function as a parameter

  $("#stream2_btn").click(function () {
    $(".stream1").show();
    $(".stream1").show("slow");
    $(".stream1").show("medium");
    $(".stream1").show("fast");
    $(".stream1").show(1000);
  });
  $("#stream2_btn").click(function () {
    $(".stream1").hide();
    $(".stream1").hide("slow");
    $(".stream1").hide("medium");
    $(".stream1").hide("fast");
    $(".stream1").hide(1000);
  });
  $("#stream2_btn").click(function () {
    $(".stream1").toggle();
    $(".stream1").toggle(1000);
  });
});

$(document).ready(function () {
  //   jQuery Effects provide animations using jquery methods
  //   slideDown(), slideUp() & slideToggle(): hide & show elements by sliding them Down or Up
  //   Pass the speed: slow, medium, fast or a time in milliseconds, into the function as a parameter

  $("#stream2_btn").click(function () {
    $(".stream1").slideDown();
    $(".stream1").slideDown("slow");
    $(".stream1").slideDown("medium");
    $(".stream1").slideDown("fast");
    $(".stream1").slideDown(1000);
  });
  $("#stream2_btn").click(function () {
    $(".stream1").slideUp();
    $(".stream1").slideUp("slow");
    $(".stream1").slideUp("medium");
    $(".stream1").slideUp("fast");
    $(".stream1").slideUp(1000);
  });
  $("#stream2_btn").click(function () {
    $(".stream1").slideToggle();
    $(".stream1").slideToggle(1000);
  });
});

$(document).ready(function () {
  //   jQuery Effects provide animations using jquery methods
  //   fadeIn(), fadeOut() & fadeToggle(): fade elements in and out of visibility
  //   Pass the speed: slow, medium, fast or a time in milliseconds, into the function as a parameter

  $("#stream2_btn").click(function () {
    $(".stream1").fadeIn();
    $(".stream1").fadeIn(1000);
  });
  $("#stream2_btn").click(function () {
    $(".stream1").fadeOut();
    $(".stream1").fadeOut(1000);
  });
  $("#stream2_btn").click(function () {
    $(".stream1").fadeToggle();
    $(".stream1").fadeToggle(1000);
  });
});

$(document).ready(function () {
  //   jQuery Effects provide animations using jquery methods
  //   fadeTo(): fades an element over time to a specific opacity
  //   Two parameters, speed and opacity are passed into the function as arguments

  $("#stream2_btn").click(function () {
    $(".stream1").fade();
    $(".stream1").fadeTo(1000, 0); //Fade to transparent 
    $(".stream1").fadeTo(1000, 1); //Fade to opaque 
  });
});
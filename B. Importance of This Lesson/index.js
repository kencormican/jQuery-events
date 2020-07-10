$(document).ready(function () {
  $(".box").click(function () {
    // split selected box class attribute into an array with 2x Strings
    var classNames = $(this).attr("class").split(" ");
    console.log(classNames)
    // assign content of index [1] to variable className
    var className = classNames[1];
    console.log(className)
    // Modify background colour of className to green
    $("." + className).css("background-color", "green");
  });
});



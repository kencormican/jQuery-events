$(document).ready(function () {
  $(".box").click(function () {
    // split selected box class attribute into an array with 2x Strings
    var classNames = $(this).attr("class").split(" ");
    console.log(classNames);
    // assign content of index [0] to variable boxClass
    var boxClass = classNames[0];
    console.log(boxClass);
    // assign content of index [1] to variable className
    var className = classNames[1];
    console.log(className);

    if ($(this).css("background-color") === "rgb(139, 0, 0)") {
      // If background colour of selected box is darkRed change it to black
      // Note* if colour checker only works if rgb value is used
      $("." + className).css("background-color", "black");
      console.log("if statement")
    } else {
      // Else change all boxes to black & selected box to darkRed
      $("." + boxClass).css("background-color", "black");
      $("." + className).css("background-color", "darkred");
      console.log("else statement")
    }
  });
});

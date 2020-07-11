$(document).ready(function () {
  $(".module-nav").on("click", function () {
    // This sets the allModulesCardsSelector variable up to target all elements with a ".card" class
    let allModulesCardsSelector = ".card";
    // This sets the thisModuleCardsSelector variable as a class using the id module value of the li element selected
    // eg. id="module1" clicked then thisModuleCardsSelector becomes ".module1-card"
    let thisModuleCardsSelector = "." + this.id + "-card";
    // On click event all cards must have the "card-highlight" (red background) class removed from the previous iteration
    // before applying red background via the "card-highlight" class to the newly selected card
    $(allModulesCardsSelector).removeClass("card-highlight");
    $(thisModuleCardsSelector).addClass("card-highlight");
  });
});

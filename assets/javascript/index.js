//**navbar**//

//Select the button element
var button = document.querySelector(".navbar-toggler");

//Select the menu element
var menu = document.querySelector(".navbar-collapse");

//Add a click event listener to the button element
button.addEventListener("click", function () {
  //Toggle the "collapse" class on the menu element
  menu.classList.toggle("collapse");
});
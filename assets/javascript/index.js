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

//**contact form**//

// Get references to the form and success/error message elements
const form = document.querySelector("form");
const successMessage = document.querySelector(".alert-success");
const errorMessage = document.querySelector(".alert-danger");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Show the success message
  successMessage.removeAttribute("hidden");

  // Set a timeout to hide the success message and reset the form
  setTimeout(() => {
    successMessage.setAttribute("hidden", true);
    errorMessage.setAttribute("hidden", true);
    form.reset();
  }, 10000);
});
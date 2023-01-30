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

//**smooth scrolling**//

// Select all links with "#" href
var links = document.querySelectorAll('a[href^="#"]');

// Iterate through the links
for (var i = 0; i < links.length; i++) {
  var link = links[i];

  // Add click event listener to each link
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Get the target element's id
    var targetId = this.getAttribute("href");
    var target = document.querySelector(targetId);

    // Animate the scroll to the target element
    var scrollOptions = {
      left: 0,
      top: target.getBoundingClientRect().top + window.pageYOffset,
      behavior: "smooth"
    };
    window.scrollTo(scrollOptions);
  });
}
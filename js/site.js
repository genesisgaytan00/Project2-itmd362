// Function to toggle responsive class for navigation
function toggleResponsiveClass() {
  var navElement = document.getElementById("nav");
  if (navElement.classList.contains("nav")) {
    navElement.classList.add("responsive");
  } else {
    navElement.classList.remove("responsive");
  }
}

// Event listener for toggling responsive class
document.addEventListener("DOMContentLoaded", function() {
  var iconElement = document.querySelector(".icon");
  if (iconElement) {
    iconElement.addEventListener("click", toggleResponsiveClass);
  }
});

function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

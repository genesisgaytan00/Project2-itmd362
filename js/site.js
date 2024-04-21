function validateForm2() {
  var username = document.getElementById("username").value;
  var passwd = document.getElementById("password").value;
  
  alert("Thanks for signing in " + username + "!");
  return false; 
}

function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var mname = document.getElementById("mname").value;
  
  alert("Congratulations on taking the first step toward your artistic journey  " + fname + " " + mname + " " + lname + "!");
  return false; // Prevents the form from being submitted (just for testing purposes)
}


document.addEventListener("DOMContentLoaded", function() {
  const menu = document.querySelector(".menu");
  const navbarLinks = document.querySelector(".navbar-links");

  menu.addEventListener("click", function() {
    navbarLinks.classList.toggle("active");
  });
});

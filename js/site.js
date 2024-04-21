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


const menu = document.getElementsByClassName('menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

menu.addEventListener('click',() => {
  navbarLinks.classList.toggle('active')
})


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
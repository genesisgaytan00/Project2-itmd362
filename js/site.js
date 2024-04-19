document.getElementById("login-form").addEventListener("submit", myFunction);
function output() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  alert("Thanks for signing in " + username);
}

function validateForm() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var mname = document.getElementById("mname").value;
  
  alert("Congratulations on taking the first step toward your artistic journey  " + fname + " " + mname + " " + lname + "!");
  return false; // Prevents the form from being submitted (just for testing purposes)
}

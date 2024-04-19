document.getElementById("login-form").addEventListener("submit", myFunction);
function output() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  alert("Thanks for signing in " + username);
}


document.getElementById("application-form").addEventListener("submit", myFunction);
function myFunction() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var mname = document.getElementById("mname").value;
  alert("Congrats on the beginning for your future " + fname + " " + mname + " " + lname + "!");
}
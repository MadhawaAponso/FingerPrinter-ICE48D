document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.getElementById("logibutton");

  loginButton.addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulate a check for correct username and password
    if (username === "mk" && password === "12") {
      // Redirect to landing page on successful login
      window.location.href = "../LandingPage/landingpage.html"; // Change the URL accordingly
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
  
});



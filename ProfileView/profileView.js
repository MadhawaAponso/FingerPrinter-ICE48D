document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.getElementById("close-button");
    const floatingWindow = document.querySelector(".floating-window");
  
    closeButton.addEventListener("click", function() {
      floatingWindow.style.display = "none";
    });
  });
  
// Get references to the menu button, close button, and mobile menu elements
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Open the mobile menu when the hamburger menu button is clicked
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

// Close the mobile menu when the close button (X) is clicked
closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
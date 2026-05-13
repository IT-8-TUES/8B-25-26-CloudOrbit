const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
});
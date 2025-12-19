const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownParent = document.querySelector(".has-dropdown");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

dropdownBtn.addEventListener("click", () => {
  dropdownParent.classList.toggle("open");
});


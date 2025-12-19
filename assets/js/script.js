const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");
const dropdownTitles = document.querySelectorAll(".dropdown-title");

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("show");
});

// Accordion dropdown (mobile)
dropdownTitles.forEach(title => {
  title.addEventListener("click", () => {

    dropdownTitles.forEach(t => {
      if (t !== title) {
        t.nextElementSibling.style.display = "none";
      }
    });

    const content = title.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});


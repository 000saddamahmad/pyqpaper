document.querySelectorAll(".has-sub > a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();

      const submenu = this.nextElementSibling;

      document.querySelectorAll(".submenu").forEach(sm => {
        if (sm !== submenu) sm.style.display = "none";
      });

      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    }
  });
});


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Mobile dropdown toggle
document.querySelectorAll('.has-dropdown > a').forEach(item => {
  item.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      e.preventDefault();
      const parent = this.parentElement;
      // Close siblings
      parent.parentElement.querySelectorAll('.has-dropdown').forEach(sib => {
        if(sib !== parent) sib.classList.remove('open');
      });
      // Toggle current
      parent.classList.toggle('open');
    }
  });
});


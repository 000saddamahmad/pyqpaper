// JavaScript only for mobile support (desktop CSS hover based)


document.addEventListener('DOMContentLoaded', () => {
const dropdowns = document.querySelectorAll('.dropdown > a');


dropdowns.forEach(item => {
item.addEventListener('click', function (e) {
if (window.innerWidth < 768) {
e.preventDefault();
this.nextElementSibling.classList.toggle('open');
}
});
});
});

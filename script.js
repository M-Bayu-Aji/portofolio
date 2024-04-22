// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hambuerger menu di klik
document.querySelector("#hamburger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik Di luar Side Bar untuk menghilangkan nav
const hambuerger = document.querySelector("#hamburger");
document.addEventListener("click", function (e) {
  if (!hambuerger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
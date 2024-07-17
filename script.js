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

// Popup Img
document.querySelectorAll('.projek img').forEach(Image => {
  Image.onclick = () =>{
    document.querySelector('.popup-img').style.display = 'block';
    document.querySelector('.popup-img img').src = Image.getAttribute('src');
    document.body.classList.add('no-scroll');
  }

  document.querySelector('.popup-img span').onclick = () =>{
    document.querySelector('.popup-img').style.display = 'none';
    document.body.classList.remove('no-scroll');
  }
})
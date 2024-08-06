const hamburger = document.querySelector("#hamburger");
const navbarNav = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", function (e) {
    // Mencegah aksi default dari klik
    e.preventDefault();
    
    // Tambah atau hapus kelas 'active'
    navbarNav.classList.toggle("active");
});

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
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
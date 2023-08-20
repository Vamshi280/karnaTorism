
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
window.onscroll = () => {
  const navbar = document.querySelector('.header'); // Assuming navbar is the header element
  navbar.classList.remove('active');
  
  if (window.scrollY > 0) {
    navbar.classList.add('active');
  }
};

window.onload = () => {
  const navbar = document.querySelector('.header'); // Assuming navbar is the header element
  
  if (window.scrollY > 0) {
    navbar.classList.add('active');
  }
};

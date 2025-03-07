let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};


document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop:true,
   grabCursor:true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop:true,
   grabCursor:true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
});
document.addEventListener("DOMContentLoaded", () => {
   const aboutText = document.getElementById("aboutcompany-text");
   const readMoreBtn = document.getElementById("read-more-btn");

   readMoreBtn.addEventListener("click", () => {
      if (aboutText.classList.contains("short")) {
         aboutText.classList.remove("short");
         aboutText.classList.add("full");
         readMoreBtn.textContent = "Read Less";
      } else {
         aboutText.classList.remove("full");
         aboutText.classList.add("short");
         readMoreBtn.textContent = "Read More";
      }
   });
});
document.addEventListener("DOMContentLoaded", () => {
   const aboutButton = document.getElementById("read-more-btn"); // Target the button
   const aboutSection = document.getElementById("aboutcompany"); // Target the section

   aboutButton.addEventListener("click", () => {
      aboutSection.scrollIntoView({
         behavior: "smooth", // Smooth scrolling
         block: "start"      // Align the top of the section to the top of the viewport
      });
   });
});


   // Wait for the DOM to load
   document.addEventListener("DOMContentLoaded", function () {
      const infoBtn = document.getElementById("info-btn");
      const contactInfo = document.querySelector(".contact-info");
      const closeBtn = document.getElementById("close-contact-info");

      // Show contact info when the info button is clicked
      infoBtn.addEventListener("click", function () {
         contactInfo.style.display = "block"; // Or use a class toggle for better styling
      });

      // Hide contact info when the close button is clicked
      closeBtn.addEventListener("click", function () {
         contactInfo.style.display = "none"; // Or toggle the class back
      });
   });
   var gallerySwiper = new Swiper(".gallery-slider", {
      loop: true,
      navigation: {
          nextEl: ".gallery .swiper-button-next",
          prevEl: ".gallery .swiper-button-prev",
      },
      slidesPerView: 1,
      spaceBetween: 0,
  });




// DOM var
const modalLightbox = document.getElementById("lightbox-modal");
const closeBtnLightbox = document.querySelector('.close-lightbox');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

function displayLightbox() {
  modalLightbox.style.display = "block";

  // Set attributes
  main.setAttribute('aria-hidden', 'true');
  modalLightbox.setAttribute('aria-hidden', 'false');

  // focus
  closeBtnLightbox.focus();
  leftArrow.focus();
  rightArrow.focus();

  // Disable scroll out of modal
  body.style.overflow = "hidden";

  // keyboard : press key for close or change content in lightbox
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") { 
      closeLightbox();
    } 
    else if (e.key === 'ArrowLeft') {
      changeSlide(-1);
    } 
    else if (e.key === 'ArrowRight') {
      changeSlide(1);
    }
  })
}

function closeLightbox() {
  modalLightbox.style.display = "none";

  // set attributes
  main.setAttribute('aria-hidden', 'false');
  modalLightbox.setAttribute('aria-hidden', 'true');

  // Enable scroll out of modal
  body.style.overflow = "auto";
}


// Initialize here and run showSlide() to give your lightbox a default state.
let slideIndex = 0;

// Next/previous controls : Note that you are assigning new values here to our slideIndex.
function changeSlide(n) {
    showSlide(slideIndex += n);
  };

// Thumbnail image controls
  function toSlide(n) {
    showSlide(slideIndex = n);
  };
  
// This is your logic for the light box. It will decide which slide to show 
function showSlide(n) {
    const slides = document.getElementsByClassName("lightbox-media");

    if (n > slides.length - 1) {
        slideIndex = 0;	
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}
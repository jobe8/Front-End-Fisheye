// DOM var
const modalLightbox = document.getElementById("lightbox-modal");
const closeBtnLightbox = document.querySelector('.close-lightbox');

function displayLightbox() {
  modalLightbox.style.display = "block";

  // Set attributes
  main.setAttribute('aria-hidden', 'true');
  modalLightbox.setAttribute('aria-hidden', 'false');

  // focus : allows to close modal with escape key
  closeBtnLightbox.focus();

  // Disable scroll out of modal
  body.style.overflow = "hidden";

  // Close modal when escape key is pressed
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") { 
      closeLightbox();
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

let slideIndex = 1;
showSlide(slideIndex);

// Note that you are assigning new values here to our slideIndex.

function changeSlide(n) {
    showSlide(slideIndex += n);
  };
  
  function toSlide(n) {
    showSlide(slideIndex = n);
  };
  
  // This is your logic for the light box. It will decide which slide to show 
  
function showSlide(n) {
    const slides = document.getElementsByClassName("lightbox-slide");

    if (n > slides.length) {
        slideIndex = 1;	
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    slides[slideIndex - 1].style.display = "block";
};
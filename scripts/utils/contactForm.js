// DOM var
const body = document.querySelector('body');
const main = document.querySelector('#main');
const modal = document.getElementById("contact_modal");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const message = document.getElementById('message');
const openModalBtn = document.querySelector('.contact_button');
const closeModalBtn = document.querySelector('.close-modal');
const titleModal = document.querySelector(".title-modal");


function displayModal() {
  modal.style.display = "block";
  // photographer's name in the modal title
  const photographerName = document.querySelector(".name-photographer");
  titleModal.innerHTML = "Contactez-moi<br>" + photographerName.textContent;

  // Set attributes
  main.setAttribute('aria-hidden', 'true');
  modal.setAttribute('aria-hidden', 'false');

  // focus : allows to close modal with escape key
  closeModalBtn.focus();

  // Disable scroll out of modal
  body.style.overflow = "hidden";

  // Close modal when escape key is pressed
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") { 
      closeModal();
    }
  });
}

function closeModal() {
  modal.style.display = "none";

  // when reopen modal, form will be display instead of comfirmation message
  form.style.display = "block";

  // set attributes
  main.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-hidden', 'true');

  // Enable scroll out of modal
  body.style.overflow = "auto";

  openModalBtn.focus();
}

// event listener allows to attach a callback function which gets triggered once the form is submitted
form.addEventListener('submit', (e) => {

  // page doesn't refresh when we click on submit
  e.preventDefault();

  validateFirst();
  validateLast();
  validateEmail();
  validateMessage();

  if (validateFirst() && validateLast() && validateEmail() && validateMessage() === true) {
    console.log("Prénom :", first.value);
    console.log("Nom :", last.value);
    console.log("Email :", email.value);
    console.log("Message :", message.value);
    form.reset();
    form.style.display= "none";
    titleModal.innerHTML = "Votre message a bien été envoyé !";
    return true;
  }
  else {
    return false;
  }
});


// function display error message, style in modal.css ".formData[data-error]::after" & ".formData[data-error-visible="true"]::after"
function displayError(element, message) {
  element.setAttribute('data-error', message)
  element.setAttribute('data-error-visible', true)
}
// function for remove error message
function removeError(element) {
  element.removeAttribute('data-error')
  element.removeAttribute('data-error-visible')
}


// Check firstname length characters
function validateFirst() {
  if (first.value.length == '' || first.value.length < 2) {
    displayError(formData[0], 'Veuillez renseigner un prénom.');
  } else {
    removeError(formData[0]);
    return true;
  }
}

// Check lastname length characters
function validateLast() {
  if (last.value.length == '' || last.value.length < 2) {
    displayError(formData[1], 'Veuillez renseigner un nom.');
  } else {
    removeError(formData[1]);
    return true;
  }
}

// Check if valid e-mail format
function validateEmail() {
  let regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (regexEmail.test(email.value) == false) {
    displayError(formData[2], 'Veuillez renseigner une adresse mail valide.');
  } else {
    removeError(formData[2]);
    return true;
  }
}

// Check if message is empty
function validateMessage() {
  if (message.value.length == '') {
    displayError(formData[3], 'Veuillez écrire votre message.');
  } else {
    removeError(formData[3]);
    return true;
  }
}
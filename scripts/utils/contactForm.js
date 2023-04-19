const modal = document.getElementById("contact_modal");
const formData = document.querySelectorAll(".formData");
const form = document.getElementById('form');
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
const message = document.getElementById('message');
const cross = document.querySelector('.cross');
const confirmationSubmit = document.getElementById('confirmation-submit');
const closeModalBtn = document.querySelector("#close-btn");
const titleModal = document.querySelector(".title-modal");

function displayModal() {
	modal.style.display = "block";
    const photographerName = document.querySelector(".name-photographer");
    // photographer's name in the modal's h2
    titleModal.innerHTML = "Contactez-moi<br>" + photographerName.textContent;
}

function closeModal() {
    modal.style.display = "none";
}

// event listener allows to attach a callback function which gets triggered once the form is submitted
form.addEventListener('submit', (e) => {
    // page doesn't refresh when we click on submit
    e.preventDefault();

    console.log(first.value);
    console.log(last.value);
    console.log(email.value);
    console.log(message.value);
    console.log('submit');
});

// close modal form with "Fermer" red button when submit successfully
closeModalBtn.style.display = "none";
closeModalBtn.addEventListener("click", () => {
    closeModal();
  form.style.display = "block";
  form.reset(); // reset form after comfirmation submit
  confirmationSubmit.style.display = "none";
  closeModalBtn.style.display = "none";
  titleModal.style.display = "block";
  cross.style.display = "block";
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
    removeError(formData[0])
    return true;
  }
}

// Check lastname length characters
function validateLast() {
  if (last.value.length == '' || last.value.length < 2) {
    displayError(formData[1], 'Veuillez renseigner un nom.')
  } else {
    removeError(formData[1])
    return true;
  }
}

// Check if valid e-mail format
function validateEmail() {
  let regexEmail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (regexEmail.test(email.value) == false) {
    displayError(formData[2], 'Veuillez renseigner une adresse mail valide.')
  } else {
    removeError(formData[2])
    return true;
  }
}

// Check if message is empty
function validateMessage() {
  if (message.value.length == '') {
    displayError(formData[3], 'Veuillez écrire votre message.')
  } else {
    removeError(formData[3])
    return true;
  }
}

// create a function containing functions that will check all the fields of the form
function validate() {
  validateFirst();
  validateLast();
  validateEmail();
  validateMessage();
  
  if (validateFirst() && validateLast() && validateEmail() && validateMessage() == true) {
    form.style.display = "none";
    cross.style.display = "none";
    titleModal.style.display = "none";
    confirmationSubmit.style.display = "block";
    confirmationSubmit.style.textAlign = "center";
    confirmationSubmit.innerHTML = "Votre message a bien été envoyé !"
    closeModalBtn.style.display = "block";
    closeModalBtn.style.marginTop= "50px";
    closeModalBtn.style.marginBottom= "20px";
    return true;
  }
}
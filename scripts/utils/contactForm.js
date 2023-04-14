function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const titleModal = document.querySelector(".title-modal");

    
    // We add the photographer's name in the modal's h2
    const photographerName = document.querySelector(".name-photographer");
    titleModal.innerHTML = "Contactez-moi<br>" + photographerName.textContent;

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Get parameters id from URL
const params = new URL(document.location).searchParams;
const id = parseInt(params.get('id'));
// console.log("id:", id);
 
// get the JSON data
async function getPhotographers() {
    const r = await fetch('../../data/photographers.json');
    if (r.ok == true) {
        return r.json();
    }
    throw new Error('Impossible de contacter le serveur')
}
getPhotographers().then(photographers => console.log(photographers))


// Header block
async function displayDataHeader(photographer) {
    const headerSection = document.querySelector('.photograph-header');
    const headerModel = photographerFactory(photographer);
    const userHeaderDOM = headerModel.getUserHeaderDOM();
    headerSection.appendChild(userHeaderDOM);
}


// Medias block

async function displayMedia(photographer, medias) {
    const mediaSection = document.querySelector(".medias");

    medias.forEach((media) => {
        const mediaModel = mediaFactory(photographer, media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });  
}

async function init() {

    const { photographers, media } = await getPhotographers();

    const photographer = photographers.find(photographer => id === photographer.id);
    displayDataHeader(photographer);
    
    let firstname = photographer.name.split(" ")[0];
    if (firstname.match("-")) {
        firstname = firstname.replace("-", " ");
    } 

    const medias = media.filter(m => id === m.photographerId);

    console.log(firstname);
    console.log(medias);

    displayMedia(firstname, medias);
}

init();
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
// async function displayMedia(medias) {
//     const mediaModel = mediaFactory(medias);
//     return mediaModel.displayMedia();
// }

async function init() {
    // Retrieves data from photographers
    const { photographers } = await getPhotographers();
    const photographer = photographers.find((photographer) => id === photographer.id);
    displayDataHeader(photographer);
}

init();
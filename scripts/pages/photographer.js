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
    throw new Error('Impossible')
}
getPhotographers().then(photographers => console.log(photographers))


// Header block
async function displayDataHeader(photographer) {
    const headerSection = document.querySelector('.photograph-header');
    const headerModel = photographerFactory(photographer);
    const userHeaderDOM = headerModel.getUserHeaderDOM();
    headerSection.appendChild(userHeaderDOM);
}

let sortedMedias = false;

// Medias block
async function displayMedia(photographer, medias) {
    const mediaSection = document.querySelector(".medias");
    const totalLikes = document.querySelector(".total-likes");

    // sort default : by popularity
    if (sortedMedias == false) {
        medias.sort(sortPopularity);
        sortedMedias = true;
    }

    let nbMedia = 0;
    let total_likes = 0;

    medias.forEach((media) => {
        // sum "likes of all media + total likes in the insert" and stock result in insert
        total_likes += media.likes; 
        const mediaModel = mediaFactory(photographer, media, nbMedia);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
        nbMedia++;
    });
    // display result "total_likes += media.likes;" in insert
    totalLikes.innerHTML = total_likes;
}

async function init() {

    const { photographers, media } = await getPhotographers();

    const photographer = photographers.find((photographer) => id === photographer.id);
    displayDataHeader(photographer);
    
    // firstname for the media path
    let firstname = photographer.name.split(" ")[0];
    if (firstname.match("-")) {
        firstname = firstname.replace("-", " ");
    } 

    const medias = media.filter((media) => id === media.photographerId);

    displayMedia(firstname, medias);
    sortMedias(medias, firstname);
};

init();
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

// Initialize for medias sort default : by popularity
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

    let total_likes = 0;

    medias.forEach((media) => {
        // adds up the likes of all the media in the insert 
        total_likes += media.likes; 
        const mediaModel = mediaFactory(photographer, media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaSection.appendChild(mediaCardDOM);
    });

    // display result total likes of all the media in insert
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

    const medias = media.filter((m) => id === m.photographerId);

    displayMedia(firstname, medias);
    sortMedias(medias, firstname);
};

init();
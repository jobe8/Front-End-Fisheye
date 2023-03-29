    // import datas
    async function getPhotographers() {
        const r = await fetch('../../data/photographers.json');
        if (r.ok == true) {
            return r.json();
        }
        throw new Error('Impossible de contacter le serveur')
    }
    getPhotographers().then(photographers => console.log(photographers))

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    }
    
    init();
    

function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // create elements
        const article = document.createElement( 'article' );
        const link = document.createElement('a');
        const imgPhotographer = document.createElement( 'img' );
        const namePhotographer = document.createElement( 'h2' );
        const locationPhotographer = document.createElement( 'p' );
        const sloganPhotographer = document.createElement( 'p' );
        const pricePhotographer = document.createElement( 'p' );

        // set attributes
        link.setAttribute("href", `./photographer.html?id=${id}`);
        link.setAttribute("alt", name);
        imgPhotographer.setAttribute("src", portrait);

        // text content
        namePhotographer.textContent = name;
        locationPhotographer.textContent = city + ', ' + country;
        sloganPhotographer.textContent = tagline;
        pricePhotographer.textContent = price +'€/jour';

        // set classes
        imgPhotographer.classList.add('img-photographer');
        namePhotographer.classList.add('name-photographer');
        locationPhotographer.classList.add('location-photographer');
        sloganPhotographer.classList.add('slogan-photographer');
        pricePhotographer.classList.add('price-photographer');

        // append child
        article.appendChild(link);
        link.appendChild(imgPhotographer);
        link.appendChild(namePhotographer);
        article.appendChild(locationPhotographer);
        article.appendChild(sloganPhotographer);
        article.appendChild(pricePhotographer);
        return (article);
    }

    function getUserHeaderDOM () {

        // create elements
        const header = document.createElement('article');
        const descriptionPhotographer = document.createElement('div');
        const namePhotographer = document.createElement('h1');
        const locationPhotographer = document.createElement('p');
        const sloganPhotographer = document.createElement('p');
        const btnContact = document.querySelector('.contact_button');
        const imgPhotographer = document.createElement('img');


        // text content
        namePhotographer.textContent = name;
        locationPhotographer.textContent = city + ', ' + country;
        sloganPhotographer.textContent = tagline;


        // set classes
        descriptionPhotographer.classList.add('description');
        namePhotographer.classList.add('name-photographer');
        locationPhotographer.classList.add('location-photographer');
        sloganPhotographer.classList.add('slogan-photographer');
        imgPhotographer.classList.add('img-photographer');

        // photograph setAttribute
        imgPhotographer.setAttribute("src", portrait);
        imgPhotographer.setAttribute("alt", "");

        // photograph appendChild
        header.appendChild(descriptionPhotographer);
        descriptionPhotographer.appendChild(namePhotographer);
        descriptionPhotographer.appendChild(locationPhotographer);
        descriptionPhotographer.appendChild(sloganPhotographer);
        header.appendChild(btnContact);
        header.appendChild(imgPhotographer);
        return (header);
    }

    return { name, picture, getUserCardDOM, getUserHeaderDOM }
}

function mediaFactory() {
    // photograph picture

    function displayMedia() {
    const galery = document.querySelector('.photograph-picture');

    // photograph short
    const li_short_option = document.querySelectorAll('.option-short');
    const btn_Short = document.querySelector('.btnShort');
    const ul_short = document.querySelector('.ul-short');
    const iconAngle2 = document.createElement('i');
    iconAngle2.classList.add('fa-solid');
    iconAngle2.classList.add('fa-angle-down');
    iconAngle2.classList.add('angle-down');
}

return { displayMedia }
}

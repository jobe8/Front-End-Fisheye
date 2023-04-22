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
        const header = document.createElement('section');
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

        // fixed insert photopgrapher with total likes and price

        const pricePhotographer = document.querySelector(".price");
        pricePhotographer.textContent = price + "€ / jour";

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



function mediaFactory(photographer, data) {

    const path = `assets/photographers/${photographer}/`;
    const { id, likes, title, video, image, date, price} = data;

    function getMediaCardDOM() {

        const media = document.createElement("article");
        media.classList = "media-article";

        // Media Image or Video
        if (image != undefined)  {
            const thumb = document.createElement("img");
            thumb.setAttribute("src", path+image);
            media.appendChild(thumb);
        }
        else {
            const thumb = document.createElement("video");
            thumb.setAttribute("src", path+video);
            media.appendChild(thumb);
        }

        // Info media div (title + likes)
        const infoMedia = document.createElement('div');
        infoMedia.classList = "info-media";

        // Media title
        const titleMedia = document.createElement("h2");
        titleMedia.classList = "title-media";
        titleMedia.textContent = title;

        // Media likes
        const likesMedia = document.createElement("span");
        likesMedia.className = "likes-media";
        likesMedia.innerHTML = likes + "<i class='fa-solid fa-heart'></i>";
        likesMedia.setAttribute("aria-label", "likes");

        // add elements to article
        media.appendChild(infoMedia);
        infoMedia.appendChild(titleMedia);
        infoMedia.appendChild(likesMedia);

        return media;

    } 

    return { getMediaCardDOM };
}
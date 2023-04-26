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
        const btnContact = document.querySelector('.contact-button');
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

        // article media
        const media = document.createElement("article");
        media.classList = "media-article";

        // lightbox
        const lightboxLink = document.createElement('a');
        lightboxLink.setAttribute('href', '#');
        const lightbox = document.querySelector('.content-lightbox');
        const lightboxDiv = document.createElement('div');
        lightboxDiv.setAttribute('class', 'lightbox-slide');

        // Media Image or Video
        if (image)  {
            const thumb = document.createElement("img");
            thumb.setAttribute("src", path+image);
            thumb.addEventListener('click', (e) => {
                e.preventDefault();
                showSlide();
                displayLightbox();
            });
            media.appendChild(lightboxLink);
            const lightboxImg = document.createElement('img');
            lightboxImg.setAttribute('src', path+image);
            lightboxImg.setAttribute('alt', title);
            lightboxLink.appendChild(thumb);
            lightboxDiv.appendChild(lightboxImg);
        }
        else {
            const thumb = document.createElement("video");
            thumb.setAttribute("src", path+video);
            lightboxLink.addEventListener('click', (e) => {
                e.preventDefault();
                showSlide();
                displayLightbox();
            });
            media.appendChild(lightboxLink);
            const lightboxVideo = document.createElement('video');
            lightboxVideo.setAttribute('src', path+video);
            lightboxVideo.setAttribute('controls', '');
            lightboxLink.appendChild(thumb);
            lightboxDiv.appendChild(lightboxVideo);
        }

        // Info media div (title + likes)
        const infoMedia = document.createElement('div');
        infoMedia.classList = "info-media";

        // Media title
        const titleLink = document.createElement('a');
        titleLink.setAttribute('href', '#');
        const titleMedia = document.createElement("h2");
        titleMedia.classList = "title-media";
        titleMedia.textContent = title;
        const titleLightbox = document.createElement('h2');
        titleLightbox.classList = "title-media";
        titleLightbox.textContent = title;
        titleLink.addEventListener('click', (e) => {
            showSlide();
            displayLightbox();
        });

        // Media likes
        const likesMedia = document.createElement("span");
        likesMedia.className = "likes-media";
        likesMedia.innerHTML = likes + "<i class='fa-solid fa-heart'></i>";
        likesMedia.setAttribute("aria-label", "likes");

        // click on like icon of media and increment total likes
        let isLiked = false;
        let mediaLikes = Number.parseInt(likes, 10);

        likesMedia.addEventListener('click', (event) => {
            const totalLikes = document.querySelector('.total-likes');
            // if the like icon hasn't been clicked
            if (isLiked == false) {
                totalLikes.innerHTML = parseInt(totalLikes.innerHTML, 10) + 1;
                mediaLikes++;
                isLiked = true;
            } 
            // if the like icon has been clicked
            else {
                totalLikes.innerHTML = parseInt(totalLikes.innerHTML, 10) - 1;
                mediaLikes--;
                isLiked = false;
            }
            likesMedia.innerHTML = mediaLikes + "<i class='fa-solid fa-heart'></i>";
        });


        // add elements to article
        media.appendChild(infoMedia);
        infoMedia.appendChild(titleLink);
        titleLink.appendChild(titleMedia);
        infoMedia.appendChild(likesMedia);
        // add elements to the lightbox
        lightboxDiv.appendChild(titleLightbox);
        lightbox.appendChild(lightboxDiv);

        return media;

    } 

    return { getMediaCardDOM };
}
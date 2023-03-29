function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        // create elements
        const article = document.createElement( 'article' );
        const link = document.createElement("a");
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const location = document.createElement( 'p' );
        const slogan = document.createElement( 'p' );
        const dailyRate = document.createElement( 'p' );

        // set attributes
        link.setAttribute("href", 'photographer.html?id=${id}');
        img.setAttribute("src", portrait);
        img.setAttribute('alt', '');
        h2.setAttribute('aria-label', '${name}');

        // text content
        h2.textContent = name;
        location.textContent = city + ', ' + country;
        slogan.textContent = tagline;
        dailyRate.textContent = price +'€/jour';

        // set classes
        location.classList.add('location');
        slogan.classList.add('slogan');
        dailyRate.classList.add('dailyRate');

        // append child
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(location);
        article.appendChild(slogan);
        article.appendChild(dailyRate);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
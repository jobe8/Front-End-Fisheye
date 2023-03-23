function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", portrait)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement( 'span' );
        location.textContent = city + ', ' + country;
        const slogan = document.createElement( 'span' );
        slogan.textContent = tagline;
        const dailyRate = document.createElement( 'span' );
        dailyRate.textContent = price +'€/jour';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(slogan);
        article.appendChild(dailyRate);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}
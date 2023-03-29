function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement("a");
        link.setAttribute("href", 'photographer.html?id=${id}');
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", portrait)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const location = document.createElement( 'p' );
        location.textContent = city + ', ' + country;
        const slogan = document.createElement( 'p' );
        slogan.textContent = tagline;
        const dailyRate = document.createElement( 'p' );
        dailyRate.textContent = price +'€/jour';
        link.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(slogan);
        article.appendChild(dailyRate);
        return (link);
    }
    return { name, picture, getUserCardDOM }
}
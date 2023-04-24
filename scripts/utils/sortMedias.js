function filterMedia(medias, firstname) {
    const selectedSort = document.querySelector('#sort');

    selectedSort.addEventListener('change', (event) => {
        if (event.target.value === 'date') {
            medias.sort(sortDate);
        } else if (event.target.value === 'title') {
            medias.sort(sortTitle);
        } else if (event.target.value === 'popularity') {
            medias.sort(sortPopularity);
        } else {
            medias.sort(sortPopularity);
        }
        document.querySelector('.medias').innerHTML = "";
        return displayMedia(firstname, medias);
    })
}


// By popularity
function sortPopularity(a, b) {
    if (a['likes'] === b['likes']) {
        return 0;
    } else {
        return (a['likes'] > b['likes']) ? -1 : 1;
    }
}

// By date
function sortDate(a, b) {
    if (a['date'] === b['date']) {
        return 0;
    } else {
        return (a['date'] > b['date']) ? -1 : 1;
    }
}

// By title
function sortTitle(a, b) {
    if (a['title'] === b['title']) {
        return 0;
    } else {
        return (a['title'] < b['title']) ? -1 : 1;
    }
}

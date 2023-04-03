//Mettre le code JavaScript lié à la page photographer.html

// Get parameters id from URL
const params = new URL(document.location).searchParams;
const id = parseInt(params.get('id'));
// console.log("id:", id);
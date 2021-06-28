
function getDataName(url) {
    try {
        fetch(url)
        .then(response => response.json())
        .then(data => showDataName(data.results))
    }
    catch(error){
        console.error("Error: " + error)
    }
}

function getDataTitle(url, div) {
    try {
        fetch(url)
        .then(response => response.json())
        .then(data => showFilmsTitle(data.results, div))
    }
    catch(error){
        console.error("Error: " + error)
    }
}


/*
//GET request to the endpoint
fetch('https://swapi.dev/api/films/')
//Format the data to JSON
.then(response => response.json())
//with the JSON data, use it as a param to the Show function
.then(data => showDataTitle(data.results, "#films"))

//old function, new function is getDataName
function getStarshipsData() {
    try {
        fetch('https://swapi.dev/api/starships/')
        .then(response => response.json())
        .then(data => showDataName(data.results, "#starships"))
    }
    catch(error) {
        console.error("Error " + error)
    }
}


function getVehiclesData() {
    try {
        fetch('https://swapi.dev/api/vehicles/')
        .then(response => response.json())
        .then(data => showDataName(data.results, "#vehicles"))
    }
    catch(error) {
        console.error("Error " + error)
    }
}

//old function, new function is getDataName
function getSpeciesData() {
    try {
        fetch('https://swapi.dev/api/species/')
        .then(response => response.json())
        .then(data => showDataName(data.results, "#species"))
    }
    catch(error) {
        console.error("Error " + error)
    }
}

function getPlanetsData() {
    try {
        fetch('https://swapi.dev/api/planets/')
        .then(response => response.json())
        .then(data => showDataName(data.results, "#planets"))
    }
    catch(error) {
        console.error("Error " + error)
    }
}
 old function, new function is showDataName
showPeople = people => {
    //grab the div
    const peopleDiv = document.querySelector('#people')
    
    //for each people object
    people.forEach(person => {
        //create a parapragh element and store it in personElement
        const personElement = document.createElement('p')
        //In each parapragh, add in the string and the actual peron.name data
        personElement.innerText = `Persons name: ${person.name}`;
        //add this parapragh to the Div
        peopleDiv.append(personElement)
    })
}
 old function, new function is showDataTitle
showFilms = films => {
    const filmsDiv = document.querySelector('#films')
    films.forEach(film => {
        const filmsElement = document.createElement('p')
        filmsElement.innerText = `Films title: ${film.title}`
        filmsDiv.append(filmsElement)
    })
}
 old function, new function is showDataName
showStarships = starships => {
    const starshipsDiv = document.querySelector('#starships')
    starships.forEach(starship => {
        const starshipsElement = document.createElement('p')
        starshipsElement.innerText = `Starships title: ${starship.name}`
        starshipsDiv.append(starshipsElement)
    })
}



showFilmsTitle = (dataObjects) => {
    const dataDiv = document.querySelector('#films')
    dataObjects.forEach(dataObject => {
        const dataElement = document.createElement('p')
        dataElement.innerText = `Title: ${dataObject.title}`
        dataDiv.append(dataElement) 
    })
}
*/
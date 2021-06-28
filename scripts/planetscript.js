function showDataName(dataObjects) {
    const dataDiv = document.querySelector('#planets-page')
        for (let key in dataObjects) {
            const planetName = document.createElement('p')
            planetName.innerText= `Planet Name: ${dataObjects[key].name}`

            const planetClimate = document.createElement('p')
            planetClimate.innerText= `Climate: ${dataObjects[key].climate}`

            const planetDiameter = document.createElement('p')
            planetDiameter.innerText= `Diameter: ${dataObjects[key].diameter}`

            const planetPopulation = document.createElement('p')
            planetPopulation.innerText= `Population: ${dataObjects[key].population}`

            const planetTerrain = document.createElement('p')
            planetTerrain.innerText= `Terrain: ${dataObjects[key].terrain}`

            //this is the planet URLs
            const planetLink = document.createElement('a')
            planetLink.setAttribute('href', dataObjects[key].url)
            planetLink.innerText = `URL for the planet: ${dataObjects[key].name}`

            dataDiv.append(planetName)
            dataDiv.append(planetClimate)
            dataDiv.append(planetDiameter)
            dataDiv.append(planetPopulation)
            dataDiv.append(planetTerrain)
            dataDiv.append(planetLink)

        }
    
}

getDataName('https://swapi.dev/api/planets/', '#planets-page')
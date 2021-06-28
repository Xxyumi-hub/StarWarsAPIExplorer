function showDataName(dataObjects) {
    const dataDiv = document.querySelector('#species-page')
        for (let key in dataObjects) {
            console.log(key) //ID for each object
            console.log(dataObjects) //array of objects
            console.log(dataObjects[key]) //single object

            const speciesName = document.createElement('p')
            speciesName.innerText= `Name: ${dataObjects[key].name}`

            const speciesClassification = document.createElement('p')
            speciesClassification.innerText= `Classification: ${dataObjects[key].classification}`

            const speciesLifespan = document.createElement('p')
            speciesLifespan.innerText= `Lifespan: ${dataObjects[key].average_lifespan}`

            const speciesHeight = document.createElement('p')
            speciesHeight.innerText = ` Average Height: ${dataObjects[key].average_height}`

            const speciesEyeColor = document.createElement('p')
            speciesEyeColor.innerText = `Eye Colors: ${dataObjects[key].eye_colors}`
            
            const speciesLanguage = document.createElement('p')
            speciesLanguage.innerText = `Birth Year: ${dataObjects[key].language}`

            //this is the species URLs
            const speciesLink = document.createElement('a')
            speciesLink.setAttribute('href', dataObjects[key].url)
            speciesLink.innerText = `URL for the species: ${dataObjects[key].name}`

            dataDiv.append(speciesName)
            dataDiv.append(speciesClassification)
            dataDiv.append(speciesLifespan)
            dataDiv.append(speciesHeight)
            dataDiv.append(speciesEyeColor)
            dataDiv.append(speciesLanguage)
            dataDiv.append(speciesLink)

        }
    
}

getDataName('https://swapi.dev/api/species/')
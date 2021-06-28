function showDataName(dataObjects) {
    const dataDiv = document.querySelector('#people-page')
        for (let key in dataObjects) {
            console.log(key) //ID for each object
            console.log(dataObjects) //array of objects
            console.log(dataObjects[key]) //single object

            const personName = document.createElement('p')
            personName.innerText= `Name: ${dataObjects[key].name}`

            const personHeight = document.createElement('p')
            personHeight.innerText = `Height: ${dataObjects[key].height}`

            const personEyeColor = document.createElement('p')
            personEyeColor.innerText = `Eye Color: ${dataObjects[key].eye_color}`
            
            const personBirthYear = document.createElement('p')
            personBirthYear.innerText = `Birth Year: ${dataObjects[key].birth_year}`

            //this is the person URLs
            const personLink = document.createElement('a')
            personLink.setAttribute('href', dataObjects[key].url)
            personLink.innerText = `URL for the person: ${dataObjects[key].name}`


            dataDiv.append(personName)
            dataDiv.append(personHeight)
            dataDiv.append(personEyeColor)
            dataDiv.append(personBirthYear)
            dataDiv.append(personLink)

        }
    
}

getDataName('https://swapi.dev/api/people/', '#people')

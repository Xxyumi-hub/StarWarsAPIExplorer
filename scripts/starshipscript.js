function showDataName(dataObjects) {
    const dataDiv = document.querySelector('#starships-page')
        for (let key in dataObjects) {
            const starship = document.createElement('p')
            starship.innerText= `Name: ${dataObjects[key].name}`

            const starshipModel = document.createElement('p')
            starshipModel.innerText= `Model: ${dataObjects[key].model}`

            const starshipCargo = document.createElement('p')
            starshipCargo.innerText = `Cargo Capacity: ${dataObjects[key].cargo_capacity}`

            const starshipConsumables = document.createElement('p')
            starshipConsumables.innerText = `Consumables: ${dataObjects[key].consumables}`

            const starshipCostInCreds = document.createElement('p')
            starshipCostInCreds.innerText = `Cost in Credits: ${dataObjects[key].cost_in_credits}`

            const starshipHyperdriveRating = document.createElement('p')
            starshipHyperdriveRating.innerText = `HyperDrive Rating: ${dataObjects[key].hyperdrive_rating}`
                
            const starshipLink = document.createElement('a')
            starshipLink.setAttribute('href', dataObjects[key].url)
            starshipLink.innerText = `Starship URL: ${dataObjects[key].name}`

            dataDiv.append(starship)
            dataDiv.append(starshipModel)
            dataDiv.append(starshipCargo)
            dataDiv.append(starshipConsumables)
            dataDiv.append(starshipCostInCreds)
            dataDiv.append(starshipHyperdriveRating)
            dataDiv.append(starshipLink)

        }
}

getDataName('https://swapi.dev/api/starships/', '#starships')
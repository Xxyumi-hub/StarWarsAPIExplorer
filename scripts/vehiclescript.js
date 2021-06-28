function showDataName(dataObjects) {
    const dataDiv = document.querySelector('#vehicles-page')
        for (let key in dataObjects) {
            const vehicle = document.createElement('p')
            vehicle.innerText= `Name: ${dataObjects[key].name}`

            const vehicleModel = document.createElement('p')
            vehicleModel.innerText= `Model: ${dataObjects[key].model}`

           const vehicleCargo = document.createElement('p')
           vehicleCargo.innerText = `Cargo Capacity: ${dataObjects[key].cargo_capacity}`

           const vehicleConsumables = document.createElement('p')
           vehicleConsumables.innerText = `Consumables: ${dataObjects[key].consumables}`

           const vehicleCostInCreds = document.createElement('p')
           vehicleCostInCreds.innerText = `Cost in Credits: ${dataObjects[key].cost_in_credits}`

           const vehicleClass = document.createElement('p')
           vehicleClass.innerText = `Vehicle Class: ${dataObjects[key].vehicle_class}`
            
           const vehicleLink = document.createElement('a')
           vehicleLink.setAttribute('href', dataObjects[key].url)
           vehicleLink.innerText = `Vehicle URL: ${dataObjects[key].name}`

           dataDiv.append(vehicle)
            dataDiv.append(vehicleModel)
            dataDiv.append(vehicleCargo)
            dataDiv.append(vehicleConsumables)
            dataDiv.append(vehicleCostInCreds)
            dataDiv.append(vehicleClass)
            dataDiv.append(vehicleLink)

        }
}


getDataName('https://swapi.dev/api/vehicles/', '#vehicles-page')

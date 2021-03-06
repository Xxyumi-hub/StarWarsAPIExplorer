function showFilmsTitle(dataObjects) {
    const dataDiv = document.querySelector('#films-page')
        for (let key in dataObjects) {
            const filmsName = document.createElement('p')
            filmsName.innerText= `Title: ${dataObjects[key].title}`

            const filmsDirector = document.createElement('p')
            filmsDirector.innerText= `Director: ${dataObjects[key].director}`
            
            const filmsProducer = document.createElement('p')
            filmsProducer.innerText = `Producer: ${dataObjects[key].producer}`

            const filmsEpisodeId = document.createElement('p')
            filmsEpisodeId.innerText = `Episode ID: ${dataObjects[key].episode_id}`

            const filmsOpeningCrawl = document.createElement('p')
            filmsOpeningCrawl.innerText = `Opening Crawl: ${dataObjects[key].opening_crawl}`

            const filmsURL = document.createElement('a')
            filmsURL.setAttribute('href', dataObjects[key].url)
            filmsURL.innerText = `URL for the film: ${dataObjects[key].title}\n`

            dataDiv.append(filmsName)
            dataDiv.append(filmsDirector)
            dataDiv.append(filmsProducer)
            dataDiv.append(filmsEpisodeId)
            dataDiv.append(filmsOpeningCrawl)
            dataDiv.append(filmsURL)

            const charactersArray = dataObjects[key].characters
            charactersArray.forEach(character => {
                const charactersElement = document.createElement('a')
                charactersElement.setAttribute('href', character)
                charactersElement.innerText = `Character: ${character}\n`
                dataDiv.append(charactersElement)
            })

            const starshipsArray = dataObjects[key].starships
            starshipsArray.forEach(starship => {
                const starshipElement = document.createElement('a')
                starshipElement.setAttribute('href', starship)
                starshipElement.innerText = `Starship: ${starship}\n`
                dataDiv.append(starshipElement)
            })

        }
    
}

getDataTitle('https://swapi.dev/api/films/')
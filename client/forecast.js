const slcContainer = document.getElementById('slcContainer')
getWeather = (city) => {
    axios.get(`http://localhost:4000/api/weather/${city}`)
        .then(res => {
            const {
                city_name,
                snow,
                temp,
                wind_spd,
                wind_cdir_full
            } = res.data
            console.log(res.data)
            slcContainer.innerHTML = ''
            const city = document.createElement('h3')
            const cityTemp = document.createElement('p')
            const citySnow = document.createElement('p')
            const windSpd = document.createElement('p')
            const windDir = document.createElement('p')

            city.textContent = city_name
            cityTemp.textContent = 'Temp: ' + temp + 'F'
            citySnow.textContent = 'Snow Fall: ' + snow + ' In'
            windSpd.textContent = 'Wind Speed: ' + wind_spd + ' mph'
            windDir.textContent = 'Direction: ' + wind_cdir_full            

            slcContainer.append(city)
            slcContainer.append(cityTemp)
            slcContainer.append(citySnow)
            slcContainer.append(windSpd)
            slcContainer.append(windDir)
            
        })
        .catch(err => console.log(err))
}
getWeather('salt+lake+city')

const locationBtns = document.querySelectorAll(".location-btn")


for(let i = 0; i < locationBtns.length; i++){
    locationBtns[i].addEventListener('click', (e) => {
        getWeather(e.target.value)
    })
}

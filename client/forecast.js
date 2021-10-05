const cityContainer = document.getElementById('cityContainer')
getWeather = (city) => {
    axios.get(`http://localhost:4000/api/weather/${city}`)
        .then(res => {
            const {
                city_name,
                snow,
                temp,
                wind_spd,
                wind_cdir_full,
                vis
            } = res.data
            cityContainer.innerHTML = ''
            const city = document.createElement('h3')
            city.setAttribute('id', 'topCityCard')
            const cityTemp = document.createElement('p')
            const citySnow = document.createElement('p')
            const windSpd = document.createElement('p')
            const windDir = document.createElement('p')
            const visability = document.createElement('p')
            visability.setAttribute('id', 'btmCityCard')

            city.textContent = city_name
            cityTemp.textContent = 'Temp: ' + temp + 'F'
            citySnow.textContent = 'Snow Fall: ' + snow + ' In'
            windSpd.textContent = 'Wind Speed: ' + wind_spd + ' mph'
            windDir.textContent = 'Direction: ' + wind_cdir_full     
            visability.textContent = 'Visability: ' + vis + ' miles'       

            cityContainer.append(city)
            cityContainer.append(cityTemp)
            cityContainer.append(citySnow)
            cityContainer.append(windSpd)
            cityContainer.append(windDir)
            cityContainer.append(visability)
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

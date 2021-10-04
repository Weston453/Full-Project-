const axios = require('axios')
const { weather_api_key } = process.env

module.exports = {
    getSlcWeather: (req, res) => {
        const { city } = req.params
        axios.get(`http://api.weatherbit.io/v2.0/current?city=${city}&units=I&key=${weather_api_key}`)
            .then(res2 => {
                // console.log(res2.data.data[0])
                res.status(200).send(res2.data.data[0])
            })
            .catch(err => console.log(err))
        }
};
    
    

const  request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/965a25d7e55a99b2bcf4663b03532c27/'+ latitude +',' + longitude
    request({ url, json: true }, (error, { body })=> {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.daily.data[0].summary)
            callback(undefined, 'Summary: ' + body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% change of rain, Min temperature: ' + body.daily.data[0].temperatureMin + ', Max temperature: ' + body.daily.data[0].temperatureMax)
            //console.log('It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% change of rain')
        }
    })
}

module.exports = forecast

const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiamVkdWFyZG8xNzciLCJhIjoiY2p4Ynd4aTF1MDRhbTN6b2UxaThkazEwOSJ9.kOzfjjGSG-_xpQ2DkTXBrQ'

    request({ url, json: true }, (error, { body })=>{
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (!body.features.length) {
            callback('Unable to find location, Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode

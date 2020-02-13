const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'x-rapidapi-key': '59217fb40fmsh38e2c6a58365419p1ea1b6jsn8a6e041be6d5',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`{ message: 'no hay resultados para ',direccion: ${direccion} }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
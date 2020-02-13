const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=99c665169b5e962620ad2dad509de079&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
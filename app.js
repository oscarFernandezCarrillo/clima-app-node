const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    const cordenadas = await lugar.getLugarLatLng(direccion);
    const temperatura = await clima.getClima(cordenadas.lat, cordenadas.lng);

    if (cordenadas.length === 0 || !temperatura.length === 0) {
        throw new Error('error vacio');
    }

    const dir = cordenadas.direccion;
    return {
        dir,
        temperatura
    }
}

getInfo(argv.direccion).then(respInfo => {
    console.log(` En ${respInfo.dir} la temperatura es ${respInfo.temperatura}`);
}).catch(err => {
    console.log(err);
});

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(err => {
//         console.log(err);
//     });

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(err => {
//         console.log(err)
//     });
const options = {
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
};

const argv = require('yargs')
    .command('direccion de la ciudad para obtener el clima', options)
    .help()
    .argv


module.exports = {
    options
}
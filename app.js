const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
const argv = require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'Direccion de la ciudad a obtener el clima',
		demand: true
	}
}).argv
let info = async(direccion) =>{

	try {
		let coords = await lugar.getLugarLatLng(direccion)
		let temp = await clima.getClima(coords.lat, coords.lng)
		return `El clima en ${coords.direccion} es de ${temp.minima} y una temperatura maxima de ${temp.maxima}`
	} catch(e) {
		// statements
		return 'Ocurrio un error';
	}
	
}

info(argv.direccion)
.then(resp => console.log(resp))
.catch(e => console.log(e))
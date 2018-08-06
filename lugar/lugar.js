const axios = require('axios')

let getLugarLatLng  = async(direccion) =>{
	let encodeUrl = encodeURI(direccion);

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
		if(resp.data.status === 'Zero_Results'){
			throw new Error(`No hay resultados para la ciudad ${direccion}`);
		}

		// console.log(JSON.stringify(respuesta.data, undefined, 2));
		let location = resp.data.results[0];
		let coordenadas = location.geometry.location;		

		

	return {
		direccion:location.formatted_address,
		lat:coordenadas.lat,
		lng:coordenadas.lng 
	}
}


module.exports = {
	getLugarLatLng
}
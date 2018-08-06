const axios = require('axios')

let getClima = async(lat, lng) => 
{	
	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b876f94f5f34fa77d883e595e0dbb555`)
    if(resp.cod === '400')
    	throw new Error(`No hay resultados`)
    let temp = resp.data.main;
    let min = temp.temp_min;
    let max = temp.temp_max;
    return {
    	minima: min,
    	maxima: max
    }
}

module.exports ={
	getClima
}
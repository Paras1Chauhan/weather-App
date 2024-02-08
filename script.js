const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a3aba249f4msh9367b20780e886dp126cb8jsn1a5cfa6d96ec',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
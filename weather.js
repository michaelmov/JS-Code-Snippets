"use strict";

const http = require('http');


class Weather {
	constructor(location, unitFormat) {
		this.apiHost = "http://api.openweathermap.org/data/2.5/weather?";
		this.apiKey = "16bf8e0df47e4d77936ddfd3fcc2f81f";
		this.location = location;
		this.unitFormat = unitFormat === 'C' ? 'metric' : 'imperial';
	}


	getCurrentWeather() {

		return http.get(`${this.apiHost}appid=${this.apiKey}&q=${this.location}&units=${this.unitFormat}`,  (response)=>{

			response.on('data', (data)=>{

				let weatherData = JSON.parse(data);

				console.log(`It is ${Math.round(weatherData.main.temp)} degrees and ${weatherData.weather[0].main} in ${weatherData.name}`);	

			});
		});
	}
}


let weather = new Weather('Seattle, WA', 'F');

weather.getCurrentWeather();

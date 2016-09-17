/// <reference path="node.d.ts" />

import * as http from 'http';
import {apiConfig} from './config/api-config';


class Weather {

	private location;
	private unitFormat;

	constructor(location: number | string, unitFormat: string) {
		this.location = location;
		this.unitFormat = unitFormat === 'C' ? 'metric' : 'imperial';
	}


	public getCurrentWeather() {
		return http.get(`${apiConfig.apiHost}appid=${apiConfig.apiKey}&q=${this.location}&units=${this.unitFormat}`,  (response)=>{
			
			response.on('data', (data:string )=>{

				let weatherData = JSON.parse(data);
				console.log(`It is ${Math.round(weatherData.main.temp)} degrees and ${weatherData.weather[0].main} in ${weatherData.name}`);	

			});
		});
	}
}

let weather = new Weather('Issaquah, WA', 'F');

weather.getCurrentWeather();


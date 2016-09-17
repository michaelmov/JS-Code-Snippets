/// <reference path="node.d.ts" />
"use strict";
var http = require('http');
var api_config_1 = require('./config/api-config');
var Weather = (function () {
    function Weather(location, unitFormat) {
        this.location = location;
        this.unitFormat = unitFormat === 'C' ? 'metric' : 'imperial';
    }
    Weather.prototype.getCurrentWeather = function () {
        return http.get(api_config_1.apiConfig.apiHost + "appid=" + api_config_1.apiConfig.apiKey + "&q=" + this.location + "&units=" + this.unitFormat, function (response) {
            response.on('data', function (data) {
                var weatherData = JSON.parse(data);
                console.log("It is " + Math.round(weatherData.main.temp) + " degrees and " + weatherData.weather[0].main + " in " + weatherData.name);
            });
        });
    };
    return Weather;
}());
var weather = new Weather('Issaquah, WA', 'F');
weather.getCurrentWeather();

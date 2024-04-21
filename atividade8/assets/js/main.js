import WeatherModel from './WeatherModel.js';
import WeatherView from './WeatherView.js';
import WeatherController from './WeatherController.js';

const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const background = document.querySelector('.background');

const weatherModel = new WeatherModel();
const weatherView = new WeatherView(container, search, weatherBox, weatherDetails, error404, background);
const weatherController = new WeatherController(weatherModel, weatherView);

search.addEventListener('click', () => {
    const city = document.querySelector('.search-box input').value;
    weatherController.fetchWeather(city);
});

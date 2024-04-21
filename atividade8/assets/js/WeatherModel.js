// WeatherModel.js
export default class WeatherModel {
    constructor() {
        this._image = '';
        this._temperature = '';
        this._description = '';
        this._humidity = '';
        this._wind = '';
        this._backgroundClass = 'background default';
    }

    update(json) {
        switch (json.weather[0].main) {
            case 'Clear':
                this._image = 'images/clear.png';
                this._backgroundClass = 'background sunny';
                break;
            case 'Rain':
                this._image = 'images/rain.png';
                this._backgroundClass = 'background rainy';
                break;
            case 'Snow':
                this._image = 'images/snow.png';
                this._backgroundClass = 'background snowy';
                break;
            case 'Clouds':
                this._image = 'images/cloud.png';
                this._backgroundClass = 'background cloudy';
                break;
            case 'Haze':
                this._image = 'images/mist.png';
                this._backgroundClass = 'background misty';
                break;
            default:
                this._image = '';
                this._backgroundClass = 'background default';
        }
        this._temperature = `${parseInt(json.main.temp)}<span>°C</span>`;
        this._description = `${json.weather[0].description}`;
        this._humidity = `${json.main.humidity}%`;
        this._wind = `${parseInt(json.wind.speed)}Km/h`;
    }

    get image() {
        return this._image;
    }

    get temperature() {
        return this._temperature;
    }

    get description() {
        return this._description;
    }

    get humidity() {
        return this._humidity;
    }

    get wind() {
        return this._wind;
    }

    get backgroundClass() {
        return this._backgroundClass;
    }

    
    set image(value) {
        this._image = value;
    }

    set temperature(value) {
        this._temperature = value;
    }

    set description(value) {
        this._description = value;
    }

    set humidity(value) {
        this._humidity = value;
    }

    set wind(value) {
        this._wind = value;
    }

    set backgroundClass(value) {
        this._backgroundClass = value;
    }
}

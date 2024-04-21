export default class WeatherController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    fetchWeather(city) {
        const APIKey = '2298285b8f1d42784c84edae3b7eae0a';

        if (city === '')
            return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            .then(response => response.json())
            .then(json => {
                if (json.cod === '404') {
                    this.view.displayError();
                } else {
                    this.model.update(json);
                    this.view.render(this.model);
                }
            });
    }
}

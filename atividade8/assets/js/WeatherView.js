export default class WeatherView {
    constructor(container, search, weatherBox, weatherDetails, error404, background) {
        this.container = container;
        this.search = search;
        this.weatherBox = weatherBox;
        this.weatherDetails = weatherDetails;
        this.error404 = error404;
        this.background = background;
    }

    render(model) {
        this.error404.style.display = 'none';
        this.error404.classList.remove('fadeIn');

        const image = this.weatherBox.querySelector('img');
        const temperature = this.weatherBox.querySelector('.temperature');
        const description = this.weatherBox.querySelector('.description');
        const humidity = this.weatherDetails.querySelector('.humidity span');
        const wind = this.weatherDetails.querySelector('.wind span');

        image.src = model.image;
        this.background.className = model.backgroundClass;
        temperature.innerHTML = model.temperature;
        description.innerHTML = model.description;
        humidity.innerHTML = model.humidity;
        wind.innerHTML = model.wind;

        this.weatherBox.style.display = '';
        this.weatherDetails.style.display = '';
        this.weatherBox.classList.add('fadeIn');
        this.weatherDetails.classList.add('fadeIn');
        this.container.style.height = '590px';
    }

    displayError() {
        this.container.style.height = '400px';
        this.weatherBox.style.display = 'none';
        this.weatherDetails.style.display = 'none';
        this.error404.style.display = 'block';
        this.error404.classList.add('fadeIn');
        this.background.className = 'background default';
    }
}

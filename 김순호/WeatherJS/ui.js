class Ui {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feelsLike');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = `Temp: ${weather.main.temp} K`;

    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `feelsLike: ${weather.main.feels_like}`;
    this.dewpoint.textContent = `dewpoint: No DATA`; 
    this.wind.textContent = `wind speed: ${weather.wind.speed} km/h`; 
  }
}
class Weather {
  constructor(city){
    this.apiKey = '9e5b0b5e5829209f22c9cd01e9dc7a39';
    this.city = city;
  }
  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData
  }

  changeLocation(city){
    this.city = city;
  }
}
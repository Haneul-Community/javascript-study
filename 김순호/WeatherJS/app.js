// weather, ui, storage 객체 초기화
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new Ui();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  // 입력 받은 city값으로 값 변경 
  const city = document.getElementById('city').value; 
  weather.changeLocation(city);

  // Set location
  storage.setLocationData(city);

  // Get and display weather 
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
}

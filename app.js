
function searchCity() {
  const city = document.getElementById("search-city").value;
  weather.fetchWeather(city);
  return false; 
}
let weather = {
  apiKeyWeather: //add you key,
  fetchWeather : function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&appid="
      + this.apiKeyWeather)
      .then((response) => response.json())
      .then((data) => this.displayedWeather(data));
  },
  displayedWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    switch (icon) {
      case '01d':
        document.body.style.backgroundImage = `url(pics/clear.jpg)`;
        break;

      case "02d":
        document.body.style.backgroundImage = `url(pics/cloudy.jpg)`;
        break;

      case "03d":
        document.body.style.backgroundImage = `url(pics/cloudy.jpg)`;
        break;

      case "04d":
        document.body.style.backgroundImage = `url(pics/cloudy.jpg)`;
        break;
      case "09d":
        document.body.style.backgroundImage = `url(pics/rain.jpg)`;
        break;
      case "10d":
        document.body.style.backgroundImage = `url(pics/rain.jpg)`;
        break;
      case "11d":
        document.body.style.backgroundImage = `url(pics/thunder.jpg)`;
        break;

      case "13d":
        document.body.style.backgroundImage = `url(pics/snow.jpg)`;
        break;

      case "50d":
        document.body.style.backgroundImage = `url(pics/mist.jpg)`;
        break;

      default:
        iconBackground = "unknow";
        break;
    }
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity " + humidity + " %";
    document.querySelector(".wind").innerText = "Wind speed " + speed + " km/h";
  } ,
  loadWeather: function() {
    this.fetchWeather("Jerusalem");
  }
}
weather.loadWeather();







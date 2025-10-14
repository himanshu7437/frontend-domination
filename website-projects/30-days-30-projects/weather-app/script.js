let temper = document.querySelector('#tempp');
let humidity = document.querySelector('#humidity');
let windspeed = document.querySelector('#wind-speed');
let city = document.querySelector('#cityy');
let inputtbtn = document.querySelector('.input-area button');
let inputt = document.querySelector('.input-area input');
let weatherimg = document.querySelector('.bottom img');
let weathercity = "New Delhi"
const IS_DEV = window.location.hostname === "localhost";

function getWeatherIcon(iconCode) {
    const weatherIcons = {
    "01d": "icons/sun.png",
    "01n": "icons/moon.png",
    "02d": "icons/partly-cloudy.png",
    "02n": "icons/partly-cloudy-night.png",
    "03d": "icons/cloud.png",
    "03n": "icons/cloud.png",
    "04d": "icons/overcast.png",
    "09d": "icons/rain.png",
    "10d": "icons/rain.png",
    "11d": "icons/thunder.png",
    "13d": "icons/snow.png",
    "50d": "icons/mist.png"
    };

    weatherimg.src = weatherIcons[iconCode] || "icons/default.png";
}

function handleError(err) {
    if (IS_DEV) console.log(err);
    notify("Something went wrong. PLease try again!!")
}

function notify(message, type = "error") {
  const box = document.createElement("div");
  box.className = `toast ${type}`;
  box.textContent = message;
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 3000);
}

  
async function apiCall(param) {
    try {
        if (!param) {
        notify("Please enter a valid city name.", "warning");
        return;
        }

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apikey}`);
        if (!response.ok) throw new Error(`API Error: ${response.status}`);
        let data = await response.json();
        getWeatherIcon(data.weather[0].icon);
        temper.textContent = `${Math.floor(data.main.temp - 273.15)}°C`;
        humidity.textContent = `${data.main.humidity}%`;
        windspeed.textContent = `${data.wind.speed} km/hr`;
        city.textContent = data.name;    
        
    } catch (error) {
        handleError(error);
    }
}

inputtbtn.addEventListener("click", function(){
    weathercity = inputt.value.trim();
    apiCall(weathercity);
})

inputt.addEventListener("keypress", e => {
  if (e.key === "Enter") inputtbtn.click();
});


apiCall(weathercity);
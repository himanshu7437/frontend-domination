let temper = document.querySelector('#tempp');
let humidity = document.querySelector('#humidity');
let windspeed = document.querySelector('#wind-speed');
let city = document.querySelector('#cityy');
let inputtbtn = document.querySelector('.input-area button');
let inputt = document.querySelector('.input-area input');
let weatherimg = document.querySelector('.bottom img');

let weathercity = "New Delhi"

function getwethericon(weatherdets) {
    if(weatherdets == "sunny"){
        weatherimg.src = "./sunny.png"
    } else if (weatherdets == "haze") {
        weatherimg.src = "./haze.png"
    }
}
  
async function apicall(param) {
    try {
        // let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid={apikey}`);
        let data = await response.json();
        temper.textContent = `${Math.floor(data.main.temp - 273.15)}°C)`;
        humidity.textContent = `${data.main.humidity}%`;
        windspeed.textContent = `${data.wind.speed} km/hr`;
        city.textContent = data.name;
        console.log(data);
        
        
    } catch (error) {
        console.log(error);
    }
}

inputtbtn.addEventListener("click", function(){
    weathercity = inputt.value.trim();
    console.log(weathercity);
    apicall(weathercity);
})

apicall(weathercity);
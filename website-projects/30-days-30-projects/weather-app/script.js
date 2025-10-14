let temper = document.querySelector('#tempp');
let humidity = document.querySelector('#humidity');
let windspeed = document.querySelector('#wind-speed');
let city = document.querySelector('#cityy');
let inputtbtn = document.querySelector('.input-area button');
let inputt = document.querySelector('.input-area input');

let weathercity = "New Delhi"

async function apicall(param) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=4b89e60279096d88a4fe22fede99a150`);
        let data = await response.json();
        temper.textContent = `${Math.floor(data.main.temp - 273.15)}°C)`;
        humidity.textContent = `${data.main.humidity}%`;
        windspeed.textContent = `${data.wind.speed} km/hr`;
        city.textContent = data.name;
        
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
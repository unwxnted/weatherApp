const app = document.querySelector('.app');
const temp = document.querySelector('.temp');
const dateOutput = document.querySelector('.date');
const timeOutput = document.querySelector('.time');
const conditionOutput = document.querySelector('.condition');
const nameOutput = document.querySelector('.name');
const cloudOutput = document.querySelector('.cloud');
const humidityOutput = document.querySelector('.humidity');
const windOutput = document.querySelector('.wind');
const form = document.getElementById('inputForm');
const search = document.querySelector('.search');
const btn = document.querySelector('.submit');

let cityInput = "Buenos Aires";

function fToC(fahrenheit) {
    let fTemp = fahrenheit;
    let fToCel = (fTemp - 32) * 5 / 9;
    return fToCel;
}

function fecthWeather() {
    fetch('/weather', {
        headers: new Headers({
            'city': cityInput,
        }),
        method: "GET"
    })
        .then(response => response.json())
        .then(response => {

            temp.innerHTML = parseInt(fToC(response.main.temp)) + "&#176;";
            humidityOutput.innerHTML = response.main.humidity + "%";
            nameOutput.innerHTML = response.name;
            windOutput.innerHTML = response.wind.speed + " km/h";
            cloudOutput.innerHTML = response.clouds.all + "%";
            conditionOutput.innerHTML = response.weather[0].description;
            let today = new Date();

            let date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            dateOutput.innerHTML = date;
            timeOutput.innerHTML = time;

        })
        .catch(err => console.error(err));

}


form.addEventListener('submit', (e) => {
    if (search.value.length == 0) {
        alert('Please type a city name');
    } else {
        cityInput = search.value;
        fecthWeather();
        search.value = "";
    }

    e.preventDefault();
});


fecthWeather();
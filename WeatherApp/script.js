// 3f93a2a634d9395fdeb55da15ee519b2

const inputCard = document.querySelector(".input-card");
const inputBox = inputCard.querySelector("input");
const temperature = document.querySelector(".temperature-number");
const cityName = document.querySelector(".location-name");
const weatherCard = document.querySelector(".weather-card-container");
const weatherType = document.querySelector(".location-weather-type");
const goBackArrow = document.querySelector(".go-back-arrow");

let api;

inputBox.addEventListener("keyup", (event) => {
    if (event.key == "Enter" && inputBox.value != "") {
        getRequest(inputBox.value);
    }
});

goBackArrow.addEventListener("click", () => {
    inputCard.style.display = "flex";
    weatherCard.style.display = "none";
});

function getRequest(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3f93a2a634d9395fdeb55da15ee519b2`;
    fetch(api)
        .then((apiResponse) => apiResponse.json())
        .then((result) => getWeather(result));
}

function getWeather(city) {
    inputCard.style.display = "none";
    weatherCard.style.display = "block";
    console.log(city);
    temperature.textContent = `${Math.floor(city.main.temp)}`;
    cityName.textContent = city.name;
    weatherType.textContent = city.weather[0].description;
    console.log(city.weather);
}

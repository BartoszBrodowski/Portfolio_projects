const apiKey = config.API_KEY;

// User input
const inputCard = document.querySelector(".input-card");
const inputBox = inputCard.querySelector("input");
const temperature = document.querySelector(".temperature-number");
const cityName = document.querySelector(".location-name");
const weatherCard = document.querySelector(".weather-card-container");
const weatherType = document.querySelector(".location-weather-type");
const goBackArrow = document.querySelector(".go-back-arrow");
const inputButton = document.querySelector(".input-box-button");
const weatherIcon = document.querySelector(".weather-icon");

const detailsCarret = document.querySelector(".carret");
const bottomSection = document.querySelector(".bottom-section");
const carret = document.querySelector(".carret");

// Details
const feelsLikeTemp = document.querySelector(".temperature-feels-like-number");
const pressure = document.querySelector(".pressure-number");
const humidity = document.querySelector(".humidity-number");
const windSpeed = document.querySelector(".windspeed-number");

let api;

inputBox.addEventListener("keyup", (event) => {
    if (event.key == "Enter" && inputBox.value != "") {
        getRequest(inputBox.value);
    }
});

inputButton.addEventListener("click", () => {
    getRequest(inputBox.value);
});

goBackArrow.addEventListener("click", () => {
    inputCard.style.display = "flex";
    weatherCard.style.display = "none";
});

detailsCarret.addEventListener("click", () => {
    bottomSection.classList.toggle("show");
    carret.classList.toggle("transformed");
});

function getRequest(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(api)
        .then((apiResponse) => apiResponse.json())
        .then((result) => getWeather(result));
}

function getWeather(city) {
    // (TODO) add error 404 handler that displays info about an error,
    // pending of the function as well as a successful outcome
    let id = city.weather[0].id;

    inputCard.style.display = "none";
    weatherCard.style.display = "block";

    console.log(city);

    temperature.textContent = `${Math.floor(city.main.temp)}`;
    cityName.textContent = `${city.name}, ${city.sys.country}`;
    weatherType.textContent = city.weather[0].description;
    console.log(city.weather[0].id);

    feelsLikeTemp.textContent = Math.floor(city.main.feels_like);
    pressure.textContent = `${city.main.pressure}hPa`;
    humidity.textContent = `${city.main.humidity}%`;
    windSpeed.textContent = `${Math.floor(city.wind.speed * 3.6)}km/h`;

    if (id <= 232 && id >= 200) {
        weatherIcon.src = "components/icons/weather/Storm.svg";
    } else if ((id <= 321 && id >= 300) || (id <= 531 && id >= 500)) {
        weatherIcon.src = "components/icons/weather/Cloud_rain.svg";
    } else if (id <= 622 && id >= 600) {
        weatherIcon.src = "components/icons/weather/Snow.svg";
    } else if (id <= 781 && id >= 701) {
        weatherIcon.src = "components/icons/weather/Mist.svg";
    } else if (id == 800) {
        weatherIcon.src = "components/icons/weather/Sun.svg";
    } else if (id == 802 || id == 803) {
        weatherIcon.src = "components/icons/weather/Cloud_sun.svg";
    } else if ((id = 804)) {
        weatherIcon.src = "components/icons/weather/Cloudy.svg";
    }
}

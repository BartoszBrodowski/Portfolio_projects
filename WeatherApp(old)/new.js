const degree = document.querySelector(".weather-temperature-degree");
let api;

// change from celsius to fahrenheit
// degree.addEventListener('click', () => {

// });

if (
    navigator.geolocation.getCurrentPosition((position) => {
        let longtittude = position.coords.longitude;
        let latitude = position.coords.latitude;
    })
) {
}
function requestApi(city) {
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3f93a2a634d9395fdeb55da15ee519b2`;
    fetch(api)
        .then((response) => response.json())
        .then((result) => console.log(result));
}

// function fetchData() {
//     fetch(api)
//         .then((response) => response.json())
//         .then((result) => weatherDetails(result));
// }

// function weatherDetails(info) {
//     console.log(info);
// }

requestApi("London");

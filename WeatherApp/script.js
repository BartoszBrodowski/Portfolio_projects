// 3f93a2a634d9395fdeb55da15ee519b2

const inputCard = document.querySelector(".input-card");
const inputBox = inputCard.querySelector(".city-input-box");

let api;

function getInput() {
    if (inputBox.value != "") {
    }
}
function getWeather(city) {
    api =
        "api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f93a2a634d9395fdeb55da15ee519b2";
}

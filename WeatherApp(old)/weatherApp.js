const request = new XMLHttpRequest();

var position = navigator.geolocation.getCurrentPosition((position) => {
    const longtittude = position.coords.longitude;
    const latitude = position.coords.latitude;
});

request.open("GET", "api.openweathermap.org", true);

function getData() {
    const response = await fetch(
        "api.openweathermap.org/data/2.5/weather?lat=18.0000&lon=56.0000&appid=3f93a2a634d9395fdeb55da15ee519b2"
    ).json();
    console.log(response);
}
// const userAction = async () => {
//   const response = await fetch('api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=3f93a2a634d9395fdeb55da15ee519b2');
//   const myJson = await response.json();

// window.addEventListener("load", () => {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         let longtittude = position.coords.longitude;
//         let latitude = position.coords.latitude;

//         console.log(longtittude);
//         console.log(latitude);
//     });
// });

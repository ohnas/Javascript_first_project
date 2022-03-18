const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const KEY = "b6c6cb26b105261346a1a31fc2686e88"

function isTrue(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
    });
}

function isFalse(){
    alert("Oops Sorry")
}

navigator.geolocation.getCurrentPosition(isTrue, isFalse);
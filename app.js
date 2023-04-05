var url = `https://api.weatherapi.com/v1/current.json?key=5c23e35946e24f8a8a1192717230304&q=Bulandshahr`;

function getWeather(city) {
  let api = fetch(
    `https://api.weatherapi.com/v1/current.json?key=5c23e35946e24f8a8a1192717230304&q=${city}`
  );
  api
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      main(result);
    });

  function main(result){
    
    let icons = document.body.querySelector(".main-img");
    let temp = document.body.querySelector(".temprater");
    let windSpeed = document.body.querySelector(".speed");
    let Humidity = document.body.querySelector(".humidity-percentage");
    let locationName = document.body.querySelector(".location-name");
    temp.innerHTML = `${Math.round(`${result.current.temp_c}`)}°C`;
    icons.src = `${result.current.condition.icon}`;
    windSpeed.innerHTML = `${Math.round(result.current.wind_mph)} km/h`;
    Humidity.innerHTML = `${result.current.humidity}%`;

    if(result.location.country === "United States of America") {
      locationName.innerHTML = `${result.location.name} USA`;
    }else{
      locationName.innerHTML = `${result.location.name} ${result.location.country}`;
    }
    
  }
}

getWeather("Bulandshahr");

let btn = document.body.querySelector(".btn");

btn.addEventListener("click", function(){
    let City = document.body.querySelector(".ser").value;
    getWeather(City);
})
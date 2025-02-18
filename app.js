const apikey = "6fbc77be3d253e81d1a1f456d4227d47";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
  const response = await fetch(apiURL + city + `&appid=${apikey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
  }else{
    var data = await response.json();

  

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images-1/clouds.png";
  }
else if(data.weather[0].main == "Clear"){
  weatherIcon.src = "images-1/clear.png";
}else if(data.weather[0].main == "Rain"){
  weatherIcon.src = "images-1/rain.png";
}else if(data.weather[0].main == "Drizzle"){
  weatherIcon.src = "images-1/drizzle.png";
}else if(data.weather[0].main == "Mist"){
  weatherIcon.src = "images-1/mist.png";
}
document.querySelector(".weather").style.display ="block";
document.querySelector(".error").style.display = "none"

}

  }

  

searchBtn.addEventListener("click", ()=>{
  checkweather(searchBox.value);
})
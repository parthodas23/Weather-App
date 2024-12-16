let API_KEY = "d68c79a93f8530852dd0faa1cd8ac2fa";
let CITY_NAME = "";
// let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}
// `

let getBtn = document.querySelector(".getWeather");
let input = document.querySelector(".input");
// console.log(input);

let city = document.querySelector(".city-name");
let dateTime = document.querySelector(".date-and-time");
let icon = document.querySelector("#icon");
let temp = document.querySelector(".tempareture");
let predictW = document.querySelector(".predict-weather");

getBtn.addEventListener("click", async () => {
  let CITY_NAME = await input.value;
  city.textContent=CITY_NAME
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;
  try {
    let res = await axios.get(apiUrl);
    
    let tp = res.data.main.temp;
    let cel = Math.floor(tp - 273.15);
    if(cel>=0 && cel<10){
        icon.classList.add('fa-cloud')
    }
    else if(cel>=10 && cel <20){
        icon.classList.add('fa-cloud-sun')
    }
    else if(cel>=20 && cel <30){
        icon.classList.add('fa-sun')
    }
    else if(cel>30){
        icon.classList.add('fa-temperature-high')
    }
    // console.log(cel);
    temp.textContent=cel+'°C'
    predictW.textContent=res.data.weather[0].description
  } catch (e) {
    prompt("Error", e);
  }
});

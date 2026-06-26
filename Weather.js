 //WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card =document.querySelector(".card");
const apiKey = "48a012a33b0eeec356d842b36540ad9b";

weatherForm.addEventListener("sumbit",async event => {
         
        
    event.preventDefault();

    const city = cityInput.value;

    if(city){

        try{
            const weatherData= await getweatheData(city);
            displayweatherInfo(weatherData);
        }
        catch{
          console.error(error);
          displayError(error);
        }

    }
    else{
        displayError("Please enter a city");
        const{name:main}
    }

});

async function getweatheData(city) {
    const apiUrl ='https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${48a01}';
    const response = await fetch(apiUrl);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}


function displayweatherInfo(data){

      const {name:city ,
             main:{temp,humidity},
             weather:[{description,id}]} = data;
             card.textContent = "";
             card.style.display="flex";

             const cityDisplay = document.createElement("h1");
             const tempDisplay = document.createElement("p");
             const humidityDisplay = document.createElement("p");
             const descDisplay = document.createElement("p");
             const weatherEmoji = document.createElement("p");

             cityDisplay.textContent =city;
             tempDisplay.textContent= '${temp - 273.15}*(9/5) + 32).toFixed(1)}F';
             humidity.textContent='Humidity: ${humidity}';
             descDisplay.textContent=description;
             weatherEmoji.textContent=getWeatherEmoji(id);

             cityDisplay.classList.add("cityDisplay");
            tempDisplay.classList.add("tempDisplay");
            humidityDisplay.classList.add("humidityDisplay");
            descDisplay.classList.add("descDisplay");
            WeatherEmoji.classList.add("weatherEmoji");

             card.appendChild(cityDisplay);
             card.appendChild(tempDisplay);
             card.appendChilda(humidityDisplay);
             card.appendChild(descDisplay);
             card.appendChild(weatherEmoji);       
}

function getWeatherEmoji(weatherId){
    switch(true){
        case(weatherId >=200 && weatherId < 300):
            return "⚡"; 
    }

    
}
function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent=message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent ="";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
    
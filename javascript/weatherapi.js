const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=7e289b4193939a065ebc60aa9b04e4dd&units=imperial"


const requestData = async(url)=>{
    const response = await fetch(url);
    console.log(response);

    if(response.ok === true){
        const data = await response.json();
        console.log(data);
    }
    else{
        console.log("The requested url is invalid please check your URL and API key to make sure they are correct.")
    }


}

requestData(url);
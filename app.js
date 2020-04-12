const weatherObj=new Weather;
const ui=new UI;

const button=document.getElementById("w-change-btn");

button.addEventListener("click",getInput);


function getInput(){

    const city=document.getElementById("w-city").value;
    // const state=document.getElementById("w-state").value;


    console.log(`Target city is ${city}`);
    // console.log(`Target state is ${state}`);
    weatherObj.getWeather(city)
    .then(data => ui.showWeather(data) )
}


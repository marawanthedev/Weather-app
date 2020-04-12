class UI {

    constructor() {

    }

    showWeather(res) {

        document.getElementById("w-location").innerHTML = res.w_result.city_name;
        document.getElementById("w-desc").innerHTML = res.w_result.description;
        document.getElementById("w-string").innerHTML = `${res.w_result.temp} F (${((((res.w_result.temp) - 32) / 1.8).toFixed(1))} C)`;
        document.getElementById("w-humidity").innerHTML = `Humidity: ${res.w_result.humidity}`;
        document.getElementById("w-feels-like").innerHTML = `Feels like : ${res.w_result.feels_like}`;
        document.getElementById("w-wind").innerHTML = `Wind speed: ${res.w_result.wind_speed} &Wind angle: ${res.w_result.wind_deg}`;
        document.getElementById("w-min-max").innerHTML = `Min: ${res.w_result.min} F  Max: ${res.w_result.max} F `;

        let desc = res.w_result.description;

        if (desc.indexOf("cloud") !== -1) {
            document.getElementById("w-icon").src = "cloudy.png";
        }
        else if (desc.indexOf("rain") !== -1) {

            document.getElementById("w-icon").src = "rainy.png";


        }

        else if (desc.indexOf("sun") !== -1) {

            document.getElementById("w-icon").src = "sunny.png";

        }
        else if (desc.indexOf("snow") !== -1) {

            document.getElementById("w-icon").src = "snow.png";

        }
        else if (desc.indexOf("clear") !== -1) {

            document.getElementById("w-icon").src = "clear.png";

        }




    }


}
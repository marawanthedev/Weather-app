class Weather {



    constructor() {


        this.apiKey="23f354e2aba81309ddf733957ba0a290"
    }

    async getWeather(city) {
        const weather= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`);

        const weatherRes = await weather.json();
        const w_result={

              
        }
       weatherRes.weather.forEach(e =>{
        //this is getting weather description

        w_result.description=e.description;
       })

    //    assingin valus within the object
        w_result.city_name=weatherRes.name;
       w_result.feels_like=weatherRes.main.feels_like
       w_result.humidity=weatherRes.main.humidity;
       w_result.wind_speed=weatherRes.wind.speed
       w_result.wind_deg=weatherRes.wind.deg
       w_result.temp=weatherRes.main.temp;
       w_result.min=weatherRes.main.temp_min;
       w_result.max=weatherRes.main.temp_max;
    
    
    
       
       return{

        w_result
       }
    }
}
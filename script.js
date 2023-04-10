const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "79c6b4dd17msh99173bc8048d9b6p1aba9bjsn473741998611",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
  }
};
const timezone=Intl.DateTimeFormat().resolvedOptions().timeZone;
const getWeather=(city)=>{
	cityName.innerHTML=city
	
	fetch(
		'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
		.then((response) => response.json())
		.then((response) => {
			console.log(response);
			
			cloud_pct.innerHTML=response.cloud_pct 
			feels_like.innerHTML=response.feels_like
			temp.innerHTML=response.temp 
			humidity.innerHTML=response.humidity 
			min_temp.innerHTML=response.min_temp 
			max_temp.innerHTML=response.max_temp 
			wind_speed.innerHTML=response.wind_speed 
			wind_degrees.innerHTML=response.wind_degrees 
            tz.innerHTML="Time Zone : "+ timezone
			date.innerHTML=new Date(response.sunrise*1000).toDateString()
			sunrise.innerHTML=new Date(response.sunrise*1000).toLocaleTimeString()
			sunset.innerHTML=new Date(response.sunset*1000).toLocaleTimeString()
			bigtemp.innerHTML=response.temp
			ihumidity.innerHTML=response.humidity 
			wind.innerHTML=response.wind_speed
		})
		.catch((err) => console.error(err));
		
	}
	
	const iSubmit=document.getElementById('iSubmit')
	iSubmit.addEventListener("click",(e)=>{
		e.preventDefault()
		getWeather(city.value) 
	})
	getWeather('Delhi')
	


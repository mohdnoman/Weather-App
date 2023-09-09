const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19d4a05ea6mshfc6c49d344ea6d4p1640d1jsn3118c450005a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const GetWeather = (city)=> {
    cityName.innerHTML = city 
     fetch(url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city, options)
    .then(response => response.json())
    .then(response => {
        // console.log(response)
        temp.innerHTML = response.temp; 
       feels_like.innerHTML = response.feels_like
       humidity.innerHTML = response.humidity
       max_temp.innerHTML = response.max_temp
       min_temp.innerHTML = response.min_temp
       wind_speed.innerHTML = response.wind_speed

        
          
    })
    .catch(err => console.error(err));	
    
}
console.log(GetWeather());

submitBtn.addEventListener("click",(e)=>{
    // e.preventDefault();
    const city = submit.value;
    GetWeather(city);
})
// temprature.innerHTML = Response.temp;
let weather_api;

$(document).ready(function() {
	$.ajax({
		url: "/projects/api",
		success: function(request) {
			weather_api = request.weather_api;
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(generateWeather);
			} else {
				console.log('geolocation unavailable');
			}
		}
	});
});


function generateWeather(position) {
	const lng = position.coords.longitude;
	const lat = position.coords.latitude;
	$.getJSON(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${weather_api}`, function(json) {
		console.log(json);	
		var fahrenheit = kelvinToFahrenheit(json.main.temp);
		var celcius = kelvinToCelcius(json.main.temp);
		var location = json.name;
		var weather = toTitleCase(json.weather[0].description);
		var icon = json.weather[0].icon;
		var observation_time = moment.unix(json.dt).format('ll -- LTS');
		var humidity = json.main.humidity;
		var pressure = json.main.pressure;
		var wind_speed = Math.round(json.wind.speed * 2.237);

		$("#location").text(location);
		$("#temp").text(fahrenheit + " °");
		$("#current-weather").text(weather);
		$("#current-weather").append($("<img>").attr("src", `http://openweathermap.org/img/wn/${icon}@2x.png`));
		$("#observation-time").text(observation_time);
		$("#humidity").text(humidity + '%');
		$("#pressure").text(pressure + ' hPa');
		$("#wind").text(wind_speed + ' mph');

		$("#weather-button").on("click", function changeDegree() {
			if ($("#weather-button").html() == "F") {
				$("#temp").html(celcius + " °");
				$("#weather-button").html("C");
			}
			else {
				$("#weather-button").html("F");
				$("#temp").html(fahrenheit + " °");
		
			};	
		});
	});
}

function kelvinToFahrenheit(k) {
	let f = ((9*(k - 273))/5) + 32;
	return Math.round(f);
}

function kelvinToCelcius(k) {
	let c = k - 273;
	return Math.round(c);
}

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
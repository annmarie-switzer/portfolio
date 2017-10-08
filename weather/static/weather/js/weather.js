$(document).ready(function() {
	$.ajax({
		url: "/projects/api",
		success: function(request) {
			generateWeather(request.weather_api);
		}
	});
});


function generateWeather(api) {
	$.getJSON("https://api.wunderground.com/api/" + api + "/conditions/forecast/q/autoip.json", function(json) {

		var fahrenheit = json.current_observation.temp_f;
		var celcius = json.current_observation.temp_c;
		var location = json.current_observation.display_location.full;
		var weather = json.current_observation.weather;
		var icon_url = json.current_observation.icon_url;
		var observation_time = json.current_observation.observation_time;
		var temp = fahrenheit + ' °'
		var forecast_list = [];

		$("#location").text(location);
		$("#temp").text(fahrenheit + " °");
		$("#current-weather").text(weather);
		$("#current-weather").append($("<img>").attr("src", icon_url));
		$("#observation-time").text(observation_time);

		for (i=1; i<4; i++) {
			var day = json.forecast.simpleforecast.forecastday[i].date.weekday_short;
			var forecast = json.forecast.simpleforecast.forecastday[i].conditions;
			var icon = json.forecast.simpleforecast.forecastday[i].icon_url;

			forecast_list.push([day, forecast, icon]);
		};

		for (j=0; j<forecast_list.length; j++) {
			$("#forecast-div").append($("<td></td>").attr("id", j));
			$("#"+j).css("width", "33%");
			$("#"+j).append($("<span></span>").text(forecast_list[j][0]));
			$("#"+j).append($("<br>"));
			$("#"+j).append($("<img>").attr("src", forecast_list[j][2]));
			$("#"+j).append($("<br>"));
			$("#"+j).append($("<span></span>").text(forecast_list[j][1]));
			$("#"+j).append($("<br>"));
		};
		

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
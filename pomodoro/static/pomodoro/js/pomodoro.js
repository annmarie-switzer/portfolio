$(document).ready(function () {


/* Initial Values */
	var time = Number($("#session").val());
	var session = moment.duration(time, "minutes").asMilliseconds();	
	$("#minutes").text(time);
	$("#seconds").text("00");


/* Reset Function */
	function reset() {
		time = Number($("#session").val());
		session = moment.duration(time, "minutes").asMilliseconds();
		$("#timer-label").text("Session");
		$("#minutes").text(time);
		$("#seconds").text("00");
		$("#start-button").removeClass("btn-info btn-secondary");
		$("#start-button").addClass("btn-primary").text("Start").attr("disabled", false);
		$("#reset-button").removeClass("btn-primary").addClass("btn-outline-secondary");
	}


/* Change Session Time */
	$("#session, #break").on("change", function () {
		$("#reset-button").removeClass("btn-outline-secondary").addClass("btn-primary");
		$("#reset-button").on("click", reset);
	});


/* Begin Timer */
	$("#start-button").on("click", function () {
		$(this).toggleClass("btn-primary btn-info");
		($(this).text() === "Start") ? $(this).text("Pause") : $(this).text("Start");

		var x = setInterval(function() {

			/*Start*/
		  	if ($("#start-button").text() === "Pause") {
		  		session -= 1000;
				var minutes = moment.duration(session).minutes();
				var seconds = moment.duration(session).seconds();

		  		minutes = ($.trim(minutes).length === 1 ? '0' + minutes : minutes);
            	seconds = ($.trim(seconds).length === 1 ? '0' + seconds : seconds);
		  		$("#minutes").text(minutes);
		  		$("#seconds").text(seconds);
		  	}
		  	

		  	/*Pause*/
	  		if ($("#start-button").text() === "Start") {
					clearInterval(x);
					$("#minutes").text(minutes);
		  			$("#seconds").text(seconds);
				}


			/*End*/	
	  		if ($("#minutes").text() == "00" && Number($("#seconds").text()) < 0) {
				var sound = $("#timer-sound")[0];
				sound.play();
	  			if ($("#timer-label").text() === "Session") {
	  				time = Number($("#break").val())
					session = moment.duration(time, "minutes").asMilliseconds();	
					$("#minutes").text(time);
					$("#seconds").text("00");
					$("#timer-label").text("Break")
	  			}

	  			else {
	  				time = Number($("#session").val())
					session = moment.duration(time, "minutes").asMilliseconds();	
					$("#minutes").text(time);
					$("#seconds").text("00");
					$("#timer-label").text("Session")
	  			}
					
			}


			/*Reset*/
			$("#reset-button").on("click", function () {
				clearInterval(x);
				reset();
			});
				

		}, 1000);
	});

	$("#pomodoro-modal").on("hidden.bs.modal", function () {
		reset();
	});
/*End Document*/
});
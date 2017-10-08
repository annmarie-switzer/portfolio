$(document).ready(function() {

	var operators = {
		"/": function(a, b) { return a/b },
		"*": function(a, b) { return a*b },
		"-": function(a, b) { return a-b },
		"+": function(a, b) { return a+b },
		};

	var display = "";
	var breadcrumbs = "";
	var op = "";
	var formula = [];

	$(".calc-num").attr("disabled", false);



/* Number Buttons */
	$(".calc-num").on("click", function() {
		if ( (display.toString()).length >= 12 ) {
			$(".calc-num").attr("disabled", true);
			return false;
		}

		var selection = $(this).text();
		display += selection;
		breadcrumbs += selection;
		$("#display").text(display);
		$("#breadcrumbs").text(breadcrumbs);
	});



/* Function Buttons */
	$(".calc-func").on("click", function() {
		$(".calc-num").attr("disabled", false);
		op = $(this).text();
		$("#display").text(op);
		breadcrumbs += op;
		$("#breadcrumbs").text(breadcrumbs);
		display = "";
	});



/* Equals Button */
	$("#equals").on("click", function() {
		$(".calc-num").attr("disabled", false);
		
		formula = breadcrumbs.split(" ");
		
		function answer(str) {
			return new Function("return " + str)();
		}

		display = answer(formula.join(""));

		if ( (display.toString().length) > 13 ) {
			display = display.toExponential(7);
		}

		$("#display, #breadcrumbs").text(display);
		formula = [];
	});



/* Delete Button */
	$("#del").on("click", function() {
		if (breadcrumbs.length > 1) {
			if (display.toString().length > 1) {
				display = display.slice(0, -1);
			} else {
				display = "0";
			}
			breadcrumbs = breadcrumbs.slice(0, -1);
			$("#display").text(display);
			$("#breadcrumbs").text(breadcrumbs);
			display = "";
		}
		
	});



/* All Clear Button */
	$("#clear").on("click", function() {
		$("#display, #breadcrumbs").text("0");
		formula = [];
		display = "";
		breadcrumbs = "";
	});

});
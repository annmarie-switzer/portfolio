$(document).ready(function() {
	var form = document.getElementById("contact-form");

	form.addEventListener("submit", function(event) {
		if (form.checkValidity()) {
			$("#submit-button").text("Loading...");
		}
	});

}); //End Document


/*(function() {
	"use strict";
	window.addEventListener("load", function() {
		var form = document.getElementById("contact-form");
		
		form.addEventListener("submit", function(event) {
			if (form.checkValidity() == false) {
				event.preventDefault();
				event.stopPropagation();
			}
			else {
				$("#submit-button").text("Loading...");
			}
			form.classList.add("was-validated");
		}, false);

	}, false);
}());
*/
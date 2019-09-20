$(document).ready(function () {
	$("#btn-detect").addClass("active-proj");
	$(".scroll-button").on("click", function () {
		let els = document.getElementsByClassName("active-proj");
		while(els.length) {
			els[0].classList.remove("active-proj")
		}
		$(this).addClass("active-proj");
	});

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

}); //End Document
$(document).ready(function() {
	$(".tag-list").hide();
	$(".tag").on("click", function() {
		$(".blog-post").hide();
		var category = $(this).text();
		if (category == "Show All") {
			$(".tag").removeClass("btn-primary").addClass("btn-link");
			$(".blog-post").show();
		}
		else {
			$(".tag").removeClass("btn-primary").addClass("btn-link");
			$(".blog-post:contains('" + category + "')").show();
			$(this).removeClass("btn-link").addClass("btn-primary");
		}
	});

}); //End Document

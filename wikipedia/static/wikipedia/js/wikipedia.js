$(document).ready(function() {
	$("#search-button").on("click", function(e) {
		e.preventDefault();
		$("#results").html("");
		var search_term = $("#search-term").val();
		$.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search_term + "&format=json&callback=?", function(json) {

			for (i=0; i<json[1].length; i++) {

				var title = json[1][i];
				var text = json[2][i];
				var link = json[3][i];

				var title_element = $("<h4></h4>");
				var link_element = $("<a></a>").attr("href", link).attr("target", "_blank").text(title);
				var text_element = $("<p></p>").text(text);

				$(title_element).wrapInner(link_element);
				$("#results").append(title_element);
				$("#results").append(text_element);

			};
			if ( $("#results").html() == "" ) {
				$("#results").html("No results.");
			};
		});
	});
	

});
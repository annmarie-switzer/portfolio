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

				var link_element = $("<a></a>").attr("href", link).attr("target", "_blank");
				var title_element = $("<h4></h4>").text(title);
				var text_element = $("<p></p>").text(text);

				$(link_element).append(title_element, text_element)
				$("#results").append(link_element).append("<hr>");

			};
			if ( $("#results").html() == "" ) {
				$("#results").html("No results.");
			};
		});
	});
	

});

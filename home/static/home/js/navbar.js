function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}



/*if (storageAvailable("localStorage")) {
	var activeTheme = localStorage.getItem("theme");

	if (activeTheme == null) {
		localStorage.setItem("theme", $("#bootstrap-css").attr("href"));
		activeTheme = localStorage.getItem("theme");
	}

	$("#bootstrap-css").attr("href", activeTheme);
}
else {
	alert("Please activate local storage in your browser to use this funtion.");
}


$(document).ready(function() {

	var flatly = "https://bootswatch.com/4-alpha/flatly/bootstrap.min.css";
	var darkly = "https://bootswatch.com/4-alpha/darkly/bootstrap.min.css";

	$("#theme-button").on("click", function() {
		if (activeTheme == flatly) {
			$("#bootstrap-css").attr("href", darkly);
			localStorage.setItem("theme", darkly);
			activeTheme = localStorage.getItem("theme");
		}
		else {
			$("#bootstrap-css").attr("href", flatly);
			localStorage.setItem("theme", flatly);
			activeTheme = localStorage.getItem("theme");
		}
	});

}); // End document.ready */


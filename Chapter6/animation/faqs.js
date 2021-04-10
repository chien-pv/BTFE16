$(document).ready(function() {
	
	$("#faqs h2").click(function() {
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
			$(this).next().fadeOut("slow");
		}
		else {
			$(this).next().fadeIn("slow");
		}
	}); 

	$("#faqs h1").click(function() {
		$(this).slideToggle("slow");
	});
});

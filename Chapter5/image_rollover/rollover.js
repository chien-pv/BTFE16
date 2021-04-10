$(document).ready(function() {
	$("#image_rollovers img").each(function() {
		var oldURL = $(this).attr("src");
		var newURL = $(this).attr("id");
		
		var rolloverImage = new Image();
		rolloverImage.src = newURL;
		
		$(this).hover(
			function() {
				$(this).attr("src", newURL);
			},
			function() {
				$(this).attr("src", oldURL);
			}
		);
	});
});
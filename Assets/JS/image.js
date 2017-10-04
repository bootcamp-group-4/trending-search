

function callApi(searhStringParam) {
	var searchString = searhStringParam;
	var imgUrl = "https://api.gettyimages.com/v3/search/images?phrase=" + searchString;
	$.ajax({
		url: imgUrl,
		method: "GET",
		headers: {
			"Api-Key": "zt3qz3uwde547aygc5wkja7a"
		}

	}).done(function(response){

		console.log(response);

		var image = response;
		grabImage(image);

	});
}


function grabImage(response) {
	for(i = 0; i < response.images.length; i++){
		var img = $("<img>"); //creates an image dom eleement
		img.attr({
			src: response.images[i].display_sizes[0].uri,
			'data-aos': 'fade-up',
			id: i
		});
		writeToDom(img);
	};
	setImageAnimateOffset();
}

function setImageAnimateOffset() {
	setTimeout(function() {
		AOS.refreshHard();
	}, 500)
}

function writeToDom(imageElement) {
	$("#result-container").append(imageElement);
	console.log(imageElement);
}

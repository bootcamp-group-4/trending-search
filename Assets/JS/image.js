// $(document).ready(function(){


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
			// console.log("image!");
			// console.log(result);
		// for(i = 0; i < result.image[0].length; i++);

		//1.grab response and save it to a var
		var image = response;
		grabImage(image);
		//2.call a function with the declared var
			//look below
		//3.make a for loop for the returned values

		//4.construct the image DOM element and assign src value then append.




			// document.getelementbyid("trend-container");
	});
};


function grabImage(response) {
	for(i = 0; i < response.images.length; i++){
		var int = $("<img>"); //creates an image dom eleement
		console.log(int);
		console.log(response.images[i].display_sizes[0].uri);
		int.attr({
			src: response.images[i].display_sizes[0].uri

		});
		writeToDom(int);
	};
};

function writeToDom(imageElement) {
	$("#result-container").append(imageElement);
	console.log(imageElement);
}

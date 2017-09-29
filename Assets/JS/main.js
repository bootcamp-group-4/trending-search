$(document).ready(function(){


//website address we get
// create app on twitter to get twitter api keys (4 keys)
var newsUrl = "https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=ef7abdb0170d49058f8f1efdb483f219";
//var newsApi = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=8c03397f019f4c738c663b53434095fc"
var reddit = 

$.ajax({
  url: newsUrl,
  method: "GET",

}).done(function(response) {
   console.log(response.articles[0].title);

$("#one").on("click", function() {
  var result = response;
  console.log('hi');
  console.log(result);
    for(var i=0; i < result.articles.length; i++){
  console.log(result.articles[i].title);
  }

console.log("here");


});

});
});

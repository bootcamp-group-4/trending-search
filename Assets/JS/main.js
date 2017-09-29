$(document).ready(function(){


  //website address we get
  // create app on twitter to get twitter api keys (4 keys)
  var newsUrl = "https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=ef7abdb0170d49058f8f1efdb483f219";
  //var newsApi = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=8c03397f019f4c738c663b53434095fc"

  var resultsString = "";

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
          resultsString += result.articles[i].title + ' ';
          }
          setWordCloud();
      console.log("here");
      });

    });


    //We are taking input and breaking into an array of works.

    function setWordCloud() {

      var str = resultsString;
      var words = str.split(" ");
      for (var i = 0; i < words.length; i++) {
          words[i] += " ";
      }
      console.log(words);

      for (var i = 0; i < words.length; i++) {
        var randNum = Math.floor(Math.random() * 50);
        var a = $('<span>');
        a.html(words[i]);
        a.attr({
          href: '#',
          rel: randNum
        });

        $('#tag-cloud').append(a);
      }

      $.fn.tagcloud.defaults = {
        size: {start: 12, end: 40, unit: 'pt'},
        color: {start: '#eed439', end: '#3e9cd3'}
      };

      $(function () {
        $('#tag-cloud span').tagcloud();
      });
    }




  });

$(document).ready(function(){


  //website address we get
  // create app on twitter to get twitter api keys (4 keys)
  //var newsApi = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=8c03397f019f4c738c663b53434095fc"


  function callNewsAPI(newsSource) {
    var newsUrl = "https://newsapi.org/v1/articles?source="+ newsSource +"&sortBy=top&apiKey=ef7abdb0170d49058f8f1efdb483f219";

    $.ajax({
      url: newsUrl,
      method: "GET",

    }).done(function(response) {
      console.log(response)
      //Call concatenate Trends Funciton
      concatenateTrends(response);
    });
  }

  function concatenateTrends(response) {
    var result = '';
    var resultsString = "";
    result = response;

    for(var i=0; i < result.articles.length; i++){
      resultsString += result.articles[i].title + ' ';
    }
    trendsToArray(resultsString);
  }

  function trendsToArray(string) {
    var str = string;
    var words = [];
    words = str.split(" ");
    console.log(words);
    for (var i = 0; i < words.length; i++) {
      if (words[i].length < 4) {
        //do nothing if the word is less than 3 chars
        //This ignores the random numbers in the results
        words[i] = '';
      } else {
        words[i] += " ";
      }
    }
    console.log(words);

    //Call Word Cloud Function
    setWordCloud(words);
  }


  $(".news-btn").on("click", function() {
    callNewsAPI(this.dataset.source);
  });

  //We are taking input and breaking into an array of works.

  function setWordCloud(words) {

    //Show trending-topics Container
    $('#trend-container').removeClass('invisible');

    //Cear out the word cloud to start clean each time
    clearTopics();


    //Set random number to be used in the loop starting positoin below
    var randNum1 = Math.floor(Math.random() * 50);

    //Loop through the result set (start while starting at a random position)
    for (var i = randNum1; i < randNum1 + 50; i++) {
      var animationClasses = ['one', 'two', 'three', 'four'];
      var randNum3 = Math.floor(Math.random() * 4);
      var randClass = animationClasses[randNum3];

      var randNum2 = Math.floor(Math.random() * 50);
      var a = $('<span>');
      a.html(words[i]);
      a.attr({
        href: '#',
        rel: randNum2,
        class: 'word fade-in ' + randClass
      });

      $('#tag-cloud').append(a);
    }



    //Set config for word Cloud.
    $.fn.tagcloud.defaults = {
      size: {start: 12, end: 40, unit: 'pt'},
      color: {start: '#eed439', end: '#3e9cd3'}
    };

    //Initaite tag cloud creation
    $(function () {
      $('#tag-cloud span').tagcloud();
    });

    //Add click listeners to the newly styled tags.
    clickListen();
  }

  function clickListen() {
    $('.word').on('click', function() {
      console.log($(this).html());
      //empty image Div
      clearImage();
      callApi($(this).html());
    });
  }

  function clearTopics() {
    $('#tag-cloud').empty();
  }

  function clearImage() {
    $("#result-container").empty();
  }


  AOS.init();
});


(function(){

  var heroText = $('#hero-title');
  var verticalPosition = 0;

  function getTranslateValue(x, y) {
    return 'translate('+ x +'px,'+ y +'px)';
  }


  window.onscroll = function (e) {
    if (pageYOffset) {
      verticalPosition = pageYOffset;
    }
    // console.log(verticalPosition);
    requestAnimationFrame(animateHeader);
  };

  function animateHeader() {
    //Header Text Horizontal Movement
    var headerTextZOffset = verticalPosition * 1.5;
    heroText.css({
      transform: getTranslateValue(headerTextZOffset, 0)
    });
  }

})();

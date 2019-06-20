$(function() {

  // Checking tens to save some gnarly comparisons
  Number.prototype.hasTens = function() {
    if (this > 20 && this < 30) {
      $('.wTwenty').addClass('on');
    } else if (this > 30 && this < 40) {
      $('.thirty').addClass('on');
    } else if (this > 40 && this < 50 && this != 45) {
      $('.forty').addClass('on');
    } else if (this > 50 && this < 60 && this != 55) {
      $('.fifty').addClass('on');
    }
  };

  function wordClock() {

    var hr = moment().hour();
    var hr = moment().format('h');
    var min = moment().minute();

    // Minutes
    min.hasTens();
    if (min == 1 || min == 21 || min == 31 || min == 41 || min == 51) {
      $('.one').addClass('on');
      $('.mi').addClass('on');
       if (min == 21) {
        $('.wTwenty').addClass('on');
      } else if (min == 31) {
        $('.thirty').addClass('on');
      } else if (min == 41) {
        $('.forty').addClass('on');
      } else if (min == 51) {
        $('.fifty').addClass('on');
      }
    } else if (min == 2 || min == 22 || min == 32 || min == 42 || min == 52) {
      $('.two').addClass('on');
      $('.mins').addClass('on');
    } else if (min == 3 || min == 23 || min == 33 || min == 43 || min == 53) {
      $('.three').addClass('on');
      $('.mins').addClass('on');
    } else if (min == 4 || min == 24 || min == 34 || min == 44 || min == 54) {
      $('.four').addClass('on');
      $('.mins').addClass('on');      
    } else if (min == 5 || min == 25 || min == 35) {
      $('.five').addClass('on');
      $('.mins').addClass('on');
      if (min == 25) {
        $('.wTwenty').addClass('on');
      } else if (min == 35) {
        $('.thirty').addClass('on');
      }
    } else if (min == 6 || min == 26 || min == 36 || min == 46 || min == 56) {
      $('.six').addClass('on');
      $('.mins').addClass('on');
    } else if (min == 7 || min == 27 || min == 37 || min == 47 || min == 57) {
      $('.seven').addClass('on');
      $('.mins').addClass('on');
    } else if (min == 8 || min == 28 || min == 38 || min == 48 || min == 58) {
      $('.eight').addClass('on');
      $('.mins').addClass('on');
    } else if (min == 9 || min == 29 || min == 39 || min == 49 || min == 59) {
      $('.nine').addClass('on');
      $('.mins').addClass('on');
    } else if (min == 10) {
      $('.wTen').addClass('on');
      $('.min').addClass('on');
    } else if (min == 11) {
      $('.eleven').addClass('on');
      $('.min').addClass('on');
    } else if (min == 12) {
      $('.twelve').addClass('on');
      $('.min').addClass('on');
    } else if (min == 13) {
      $('.thirteen').addClass('on');
      $('.min').addClass('on');
    } else if (min == 14) {
      $('.fourteen').addClass('on');
      $('.min').addClass('on');
    } else if (min == 15) {
      $('.fifteen').addClass('on');
      $('.min').addClass('on');
    } else if (min == 16) {
      $('.sixteen').addClass('on');
      $('.min').addClass('on');
    } else if (min == 17) {
      $('.seventeen').addClass('on');
      $('.min').addClass('on');
    } else if (min == 18) {
      $('.eighteen').addClass('on');
      $('.min').addClass('on');
    } else if (min == 19) {
      $('.nineteen').addClass('on');
      $('.min').addClass('on');
    } else if (min == 20) {
      $('.wTwenty').addClass('on');
      $('.min').addClass('on');
    } else if (min == 40) {
      $('.without').addClass('on');
      $('.wTwenty').addClass('on');
    } else if (min == 45) {
      $('.without').addClass('on');
      $('.wFifteen').addClass('on');
    } else if (min == 50) {
      $('.without').addClass('on');
      $('.wTen').addClass('on');
    } else if (min == 55) {
      $('.without').addClass('on');
      $('.wFive').addClass('on');
    }

    // Hours
    if (min == 0 || min == 55 || min == 50 || min == 45 || min == 40) {      
      if (min == 55 || min == 50 || min == 45 || min == 40) {
        hr = Number(hr) + Number(1);
      }
      
      if (hr == 1) {
        $('.first').addClass('on');
      } else if (hr == 2) {
        $('.second').addClass('on');
      } else if (hr == 3) {
        $('.third').addClass('on');
      } else if (hr == 4) {
        $('.fourth').addClass('on');
      } else if (hr == 5) {
        $('.fifth').addClass('on');
      } else if (hr == 6) {
        $('.sixth').addClass('on');
      } else if (hr == 7) {
        $('.seventh').addClass('on');
      } else if (hr == 8) {
        $('.eighth').addClass('on');
      } else if (hr == 9) {
        $('.ninth').addClass('on');
      } else if (hr == 10) {
        $('.tenth').addClass('on');
      } else if (hr == 11) {
        $('.eleventh').addClass('on');
      } else if (hr == 12) {
        $('.twelvth').addClass('on');
      }
    } else {
      if (min == 30) {
        $('.half').addClass('on');
        hr = Number(hr) + Number(1);
      } else {
        $('.after').addClass('on');
        $('.hrs').addClass('on');
      }
      
      if (hr == 1) {
        $('.aFirst').addClass('on');
      } else if (hr == 2) {
        $('.aSecond').addClass('on');
      } else if (hr == 3) {
        $('.aThird').addClass('on');
      } else if (hr == 4) {
        $('.aFourth').addClass('on');
      } else if (hr == 5) {
        $('.aFifth').addClass('on');
      } else if (hr == 6) {
        $('.aSixth').addClass('on');
      } else if (hr == 7) {
        $('.aSeventh').addClass('on');
      } else if (hr == 8) {
        $('.aEighth').addClass('on');
      } else if (hr == 9) {
        $('.aNinth').addClass('on');
      } else if (hr == 10) {
        $('.aTenth').addClass('on');
      } else if (hr == 11) {
        $('.aEleventh').addClass('on');
      } else if (hr == 12) {
        $('.aTwelth').addClass('on');
      }
    }
  }

  function refreshClock() {
    // Clear what's on before redrawing the clock
    $('.on').removeClass('on');

    wordClock();
  }
    

  // Refresh the clock
  var date = new Date();

  setTimeout(function() {
    setInterval(refreshClock, 60000);
    refreshClock();
  }, (60 - date.getSeconds()) * 1000);

  refreshClock();

});
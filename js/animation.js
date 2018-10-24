  //force window to top when page refreshes, then hides scrollbar
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};
$(document).ready(function(){

$("body").css("overflow", "hidden");
// animates css nav bar transisions
$('.menuToggle').click(function() {
  $("body").css("overflow", "hidden");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  setTimeout(function() {
    $page.toggleClass('swing');
  }, 120);
});
});


// closes menu if nav link is clicked

var $page = $('.page');
$('#menuList').click(function() {
  $("body").css("overflow", "hidden");
  $page.removeClass('swing');
  setTimeout(function() {
    $("body").css("overflow", "auto");
  }, 700);
});
$('.box').click(function() {
  $("body").css("overflow", "hidden");
  setTimeout(function() {
    $("body").css("overflow", "auto");
  }, 800);
});
// changes displayed content and timer function

$(document).ready(function() {
  setTimeout(function() {
    $('.pageHome').show();
    $('.pageAbout').hide();
    $('.pageContact').hide();
    $('.pageResume').hide();
  }, 500);
});

$('.home').click(function() {
  setTimeout(function() {
    $('.pageHome').show();
    $('.pageAbout').hide();
    $('.pageContact').hide();
    $('.pageResume').hide();
  }, 500);
});

$('.about').click(function() {
  setTimeout(function() {
    $('.pageHome').hide();
    $('.pageAbout').show();
    $('.pageContact').hide();
    $('.pageResume').hide();
  }, 500);
      $("body").css("overflow", "auto");
});

$('.contact').click(function() {
  setTimeout(function() {
    $('.pageHome').hide();
    $('.pageAbout').hide();
    $('.pageContact').show();
    $('.pageResume').hide();
  }, 500);
});

$('.Resume').click(function() {
  setTimeout(function() {
    $('.pageHome').hide();
    $('.pageAbout').hide();
    $('.pageContact').hide();
    $('.pageResume').show();
  }, 500);
});
$("html").css({'overflow':'visible'});
var fadeOut = $('#click').on('click',
  function fadeOut() {
    TweenMax.from(".overlay", 0.5, {
      ease: Power2.easeInOut,
    });
    TweenMax.to(".overlay", 1, {
      top: "-220%",
      ease: Expo.easeInOut,
    });
    TweenMax.to(".overlay2", 2, {
      top: "-220%",
      ease: Expo.easeInOut,
    });
    $("body").css("overflow", "auto");
    setTimeout(function() {
      $('.overlay, .overlay2').hide();
    }, 2000);
  });

// nav toggle sweep between transisions
var sweeping = $('menu, .home, .about, .Resume, .contact').on('click',
  function sweeping() {
    TweenMax.to(".menuToggle", 0.5, {
      height: '300vh',
      width: '200vw',
      ease: Power2.easeInOut,
    });

    TweenMax.to(".menuToggle", 0.5, {
      width: '100px',
      height: '80px',
      ease: Power2.easeInOut,
      delay: 0.5,
    });
  });

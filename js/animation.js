// NOTE: force window to top when page refreshes, then hides scrollbar
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
$("body").css("overflow", "hidden")
// NOTE: splashpage Animation, then releases scrollbar
$('#click').on('click',
  function fadeOut() {
    TweenMax.to(".btn", 0.1, {
      y: -100,
      opacity: 0
    });
    TweenMax.from(".overlay", 0.5, {
      ease: Power2.easeInOut,
      overflow: 'hidden'
    });
    TweenMax.to(".overlay", 1, {
      top: "-120%",
      ease: Expo.easeInOut,
      overflow: 'hidden'
    })
    TweenMax.to(".overlay2", 2, {
      top: "-120%",
      ease: Expo.easeInOut,
      overflow: 'hidden',
    });
    TweenMax.from(".testHeader", 3, {
      delay: 0.5,
      top: "90%",
      ease: Power2.easeInOut,
    });

    $("body").css("overflow", "auto")
  });

// NOTE: text animations

sal({
  threshold: 1,
  once: false,
});

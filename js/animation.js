
$('#click').on('click',
function fadeOut() {
  TweenMax.to(".btn", 0.1, {
    y: -100,
    opacity: 0
  });

  TweenMax.to(".screen", 0.5, {
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut,
  });

  TweenMax.from(".overlay", 0.5, {
    ease: Power2.easeInOut
  });
  TweenMax.to(".overlay", 1, {
    top: "-120%",
    ease: Expo.easeInOut
  })
TweenMax.to(".overlay2", 2, {
  top: "-120%",
  ease: Expo.easeInOut
});
TweenMax.to(".testHeader", 4, {
  delay: 0.8,
  opacity: 1,
  y: -150,
  ease: Power2.easeInOut
});
});

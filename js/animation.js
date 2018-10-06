$('#click').on('click',
function fadeOut() {
  TweenMax.to(".btn", 0.1, {
    y: -100,
    opacity: 0
  });
  TweenMax.from(".overlay", 0.5, {
    ease: Power2.easeInOut,
    overflow:'hidden'
  });
  TweenMax.to(".overlay", 1, {
    top: "-120%",
    ease: Expo.easeInOut,
    overflow:'hidden'
  })
TweenMax.to(".overlay2", 2, {
  top: "-120%",
  ease: Expo.easeInOut,
  overflow:'hidden',
});
TweenMax.from(".testHeader", 3, {
  top: "100%",
  ease: Power2.easeInOut,
  overflow:'hidden'
});
});

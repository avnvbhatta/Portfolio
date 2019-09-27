$(document).ready(function() {

    var controller = new ScrollMagic.Controller()
  //parallax scene
  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(TweenMax.from('.bcg', 1, {y: '-30%', ease:Power0.easeNone}))
  .addTo(controller)

  var slideParallaxScene2 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax2',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(TweenMax.from('.bcg', 1, {y: '-30%', ease:Power0.easeNone}))
  .addTo(controller)

  var slideParallaxScene2 = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax3',
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(TweenMax.from('.bcg', 1, {y: '-30%', ease:Power0.easeNone}))
  .addTo(controller)
});



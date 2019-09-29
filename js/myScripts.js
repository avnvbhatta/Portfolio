$(document).ready(function() {

  var granimInstance = new Granim({
    element: '#granim-canvas',
    name: 'granim',
    opacity: [1, 1],
    states : {
        "default-state": {
            gradients: [
              ['#8D12EB', '#AF61EB'],
              ['#2A68F4', '#6792F2'],
              ['#BC44F0', '#D088EE']
            ],
            transitionSpeed: 10000
          } 
      }
  }); 


  applyDynamicCanvas()

  $(window).on('resize', function(){
    applyDynamicCanvas()
  });

  var mainHeight = $("#main").first().outerHeight();
  var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: mainHeight/2}});
	// build scenes
	var socialBarVertical = new ScrollMagic.Scene({triggerElement: "#skills"})
          .setClassToggle("#socialBarVertical", "socialBarVerticalActive") // add class toggle

					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

          // get the current offset
// set a new offset
  socialBarVertical.offset(80);

  var slideParallaxScene = new ScrollMagic.Scene({
    triggerElement: '.bcg-parallax',
    triggerHook: 1,
    duration: '200%'
  })
  .setTween(TweenMax.from('.bcg', 1, {y: '-30%', ease:Power0.easeNone}))
  .addTo(controller)

});

function applyDynamicCanvas(){
  var containerHeight = $("#main").first();
  var containerWidth = $("#main").width();

  $('#granim-canvas').css("height", containerHeight.outerHeight());
  $('#granim-canvas').css("width", containerWidth);
}



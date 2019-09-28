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



});

function applyDynamicCanvas(){
  var containerHeight = $("#main").first();
  var containerWidth = $("#main").width();

  $('#granim-canvas').css("height", containerHeight.outerHeight());
  $('#granim-canvas').css("width", containerWidth);
}



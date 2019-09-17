
$("document").ready(function () {
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.modal').modal();
    $('.fixed-action-btn').floatingActionButton();
    $('.tap-target').tapTarget(open);
    
});


$('.carousel.carousel-slider').carousel({
    fullWidth: true
    
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  // Or with jQuery
      







$(document).ready(function(){
    $('.special.cards .image').dimmer({
        on: 'hover'
      });
      $('.slide-what-is-popular').slick({
        //lazyLoad: 'ondemand',
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        variableWidth: false,
        autoplaySpeed: 3000,
        // arrows:true,
        // fade:true,
        // nextArrow:'<button>Next</button>',
        // prevArrow: '<div class="ui red basic mini button"  ><i class="long arrow left icon"></i></div>',
      });
});

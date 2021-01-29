$(document).ready(function() {

    
    /* ======= Fixed header when scrolled ======= */
    
    $(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');
         }
    });
    
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -50, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});

    $('.carousel').on('slide.bs.carousel', function(event) {
        $('.carousel-inner').children().each(function(ind, el) {
            if (event.relatedTarget == el) {
                var index = ind + 1;
                $('.parallax-slider').css('opacity', 0.65);
                $('.parallax-slider').attr('src', 'assets/images/hero-' + index + '.jpg').animate({opacity: 1});
            }
        });
    });


});
$(document).ready(function() {
  // add class nav home
  $('.homeNav a').hover(function() {
    $(this).addClass('hvr-float');
  }, function() {
    $(this).removeClass('hvr-float');
  });
  //

  $('.downButton').hover(function() {
    $(this).removeClass('animated fadeInUp').addClass('hvr-shrink');
  }, function() {
    $(this).removeClass('hvr-shrink');
  });

  //
  setTimeout("$('h1').show()", 500);
  setTimeout("$('h2').show()", 1000);
  setTimeout("$('.wrapNavHome').show()", 1500);
  setTimeout("$('.downButton').css('display', 'block').addClass('animated fadeInUp')", 2500);

//

        $(window).scroll(function(){
            if ($(this).scrollTop() > 800) {
                //$('header').fadeIn(500);
                $('header').show().addClass('animated bounceInUp')
            } else {
                $('header').fadeOut(500);
            }
        });

//

        $('.downButton').click(function() {

                event.preventDefault();

                $('html, body').animate({
                    scrollTop: 810
                }, 400);


        });

});

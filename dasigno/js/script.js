
  jQuery(document).ready(function($) {
    $('.sli-Lessons').unslider();
    $('.my-slider2').unslider();
    $('.my-slider3').unslider();
  });

$(document).ready(function() {
  $('.unslider-nav').find('li').eq(0).html('Salsa');
  $('.unslider-nav').find('li').eq(1).html('Champeta');
  $('.unslider-nav').find('li').eq(2).html('Raggeaton');
  $('.unslider-nav').find('li').eq(3).html('Vallenato');


  //  scroll top

  $('.home').click(function() {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: $(".sec01").offset().top
      }, 2000);
  });
  $('.lessons').click(function() {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: $(".sec03 ").offset().top
      }, 2000);
  });
  $('.teachers').click(function() {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: $(".sec04 ").offset().top
      }, 2000);
  });
  $('.testimonials').click(function() {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: $(".sec05").offset().top
      }, 2000);
  });

  // btn video

  $('.btnPlay').click(function(event) {
    $(this).hide();
    $('.wrapVideo').fadeIn(100);
  });
  $('.close').click(function(event) {
    $('.wrapVideo').hide();
    $('.btnPlay').fadeIn(300);
  });


});


// fix header

// // scroll down animacion
//
          $(window).scroll(function(){

            if ($(this).scrollTop() > 740) {
                $('header').addClass('fixHeader animated bounceInDown');
            } else {
                $('header').removeClass('fixHeader animated bounceInDown');
            }


    });

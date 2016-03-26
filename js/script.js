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
  $('.btnTop').hover(function() {
    $(this).addClass('animated tada infinite');
  }, function() {
    $(this).removeClass('animated tada infinite');
  });
  //
  setTimeout("$('h1').show()", 500);
  setTimeout("$('h2').show()", 1000);
  setTimeout("$('.wrapNavHome').show()", 1500);
  setTimeout("$('.downButton').css('display', 'block').addClass('animated fadeInUp')", 2500);

// scroll down animacion

        $(window).scroll(function(){



            if ($(this).scrollTop() > 400) {
                //$('header').fadeIn(500);
                $('header').show().addClass('animated bounceInDown');
                $('.btnTop').css('display', 'none');

            } else {
                $('header').fadeOut(500);
            }

            // animacion home
            if ($(this).scrollTop() === 0){
              $('.cont01 .container').show();
              setTimeout("$('h1').show()", 500);
              setTimeout("$('h2').show()", 1000);
              setTimeout("$('.wrapNavHome').show()", 1500);
              //setTimeout("$('.downButton').css('display', 'block').addClass('animated fadeInUp')", 2500);
            }
            // animacion iconos
            if($(this).scrollTop() > 800){
              $('.wrapIcon img').css('display','block');
              $('.wrapIcon').eq(0).find('img').addClass('animated rotateInDownLeft');
              $('.wrapIcon').eq(1).find('img').addClass('animated rotateIn');
              $('.wrapIcon').eq(2).find('img').addClass('animated rotateInDownRight');
              $('.cont01 .container').fadeOut(800);
              $('.btnHab').addClass('active');
              $('.btnPro, .btnAce').removeClass('active');
              $('.btnTop').css('display', 'block');
            }
            else{
              $('.wrapIcon img').fadeOut(800);
            }
            if($(this).scrollTop() > 1600){
              $('.btnPro').addClass('active');
              $('.btnHab, .btnAce').removeClass('active');
            }


        });

//botones scroll
        $('.btnTop').click(function(event) {
          $('html, body').animate({
              scrollTop: 0
          }, 200);
        });

        $('.downButton, .homeHab, .btnHab').click(function() {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: 810
                }, 400);
        });
        $('.homePro, .btnPro').click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 1610
            }, 400);
        });

// hover iconos



});

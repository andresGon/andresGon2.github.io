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

  //botones scroll

        var divScroll = "top";

          $('.btnTop').click(function(event) {
                  divScroll = "top";
                  console.log( divScroll );
            $('html, body').animate({
                 scrollTop: $(".cont01 ").offset().top
            }, 200);
          });


          $('.downButton, .homeHab, .btnHab').click(function() {
                  event.preventDefault();
                  divScroll = "hab"
                  console.log( divScroll );
                  $('html, body').animate({
                      scrollTop: $(".cont02 ").offset().top
                  }, 400);
          });


          $('.homePro, .btnPro').click(function(event) {
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: $(".cont03 ").offset().top
              }, 400);
          });



  /*Funcion para detectar el tamaño del navegador*/
var fullwidth = $(window).width();
var fullheight = $(window).height();


$(document).ready(function() {
	$(".cont01").height(fullheight);
});

$(window).resize(function() {
	var newWidth = $(window).width();
	var newHeight = $(window).height();
	if (newWidth != fullwidth || newHeight != fullheight) {
		fullwidth = newWidth;
		fullheight = newHeight;
		doneResizing();
	}
});

function doneResizing() {
	//Ejecuta lo que sea despues de cambiar tamaño del navegador
	$(".cont01").height(fullheight);
}

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
           // if ($(this).scrollTop() === 0){
            if ( divScroll == "top" || $(this).scrollTop() === 0 ){
              $('.cont01 .container').show();
              setTimeout("$('h1').show()", 500);
              setTimeout("$('h2').show()", 1000);
              setTimeout("$('.wrapNavHome').show()", 1500);
              //setTimeout("$('.downButton').css('display', 'block').addClass('animated fadeInUp')", 2500);
            }
            // animacion iconos
            //if($(this).scrollTop() > 800){
            if( divScroll == "hab" ||  $(this).scrollTop() > fullheight ){
              $('.wrapIcon img').css('display','block');
              $('.wrapIcon').eq(0).find('img').addClass('animated rotateInDownLeft');
              $('.wrapIcon').eq(1).find('img').addClass('animated rotateIn');
              $('.wrapIcon').eq(2).find('img').addClass('animated rotateInDownRight');
              //$('.cont01 .container').fadeOut(800);
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


// modales

    $('.btnCloseModal').click(function(event) {
      $('.modal01, .modal02, .modal03').animate({'left': '-100%'}, 300);
      $('html').css('overflow', 'scroll');
    });

    $('.proyecto01').click(function() {
      $('.modal01').animate({'left': '0%'}, 300);
      $('html').css('overflow', 'hidden');
    });
    $('.proyecto02').click(function() {
      $('.modal02').animate({'left': '0%'}, 300);
      $('html').css('overflow', 'hidden');
    });
    $('.proyecto03').click(function() {
      $('.modal03').animate({'left': '0%'}, 300);
      $('html').css('overflow', 'hidden');
    });


});

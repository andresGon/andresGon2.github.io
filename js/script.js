/**
 * Determine the mobile operating system.
 * This function either returns 'iOS', 'Android' or 'unknown'
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    return 'iOS';
     alert('ios');
  }
  else if( userAgent.match( /Android/i ) )
  {

    //return 'Android';
    alert('android');
  }
  else
  {
    return 'unknown';
  }
}


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
         }, 3000);
          });


          $('.downButton, .homeHab, .btnHab').click(function() {
                  event.preventDefault();
                  divScroll = "hab"
                  console.log( divScroll );
                  $('html, body').animate({
                      scrollTop: $(".cont02 ").offset().top
              }, 2000);
          });


          $('.homePro, .btnPro').click(function(event) {
              event.preventDefault();
              divScroll = "pro"
              console.log( divScroll );
              $('html, body').animate({
                  scrollTop: $(".cont03 ").offset().top
          }, 2000);
          });
          $('.homeAce, .btnAce').click(function(event) {
              event.preventDefault();
              divScroll = "ace"
              console.log( divScroll );
              $('html, body').animate({
                  scrollTop: $(".cont04 ").offset().top
          }, 2000);
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

// // scroll down animacion
//
          $(window).scroll(function(){

            if ($(this).scrollTop() > 400) {
                //$('header').fadeIn(500);
                $('header').show().addClass('animated bounceInDown');
                $('.btnTop').css('display', 'none');

            } else {
                $('header').fadeOut(500);
            }
//
            // animacion home
           // if ($(this).scrollTop() === 0){
            if ( divScroll == "top" || $(this).scrollTop() === 0 ){
              $('.cont01 .container').fadeIn(800);
              setTimeout("$('h1').show()", 500);
              setTimeout("$('h2').show()", 1000);
              setTimeout("$('.wrapNavHome').show()", 1500);
              //setTimeout("$('.downButton').css('display', 'block').addClass('animated fadeInUp')", 2500);

            }
            // animacion iconos
            //if($(this).scrollTop() > 800){
            if( divScroll == "hab" ||  $(this).scrollTop() > fullheight || $(this).scrollTop() > 800 ){
              $('.btnHab').addClass('active');
              $('.btnPro, .btnAce').removeClass('active');
              $('.btnTop').css('display', 'block');
            }

            if(  divScroll == "pro" || $(this).scrollTop() >fullheight + 650 ){
              $('.btnPro').addClass('active');
              $('.btnHab, .btnAce').removeClass('active');
              $('.footerCont').css('display', 'none').removeClass('animated bounceInUp');
            }
            if(  divScroll == "ace" || $(this).scrollTop() >fullheight + 1390 ){
              $('.btnAce').addClass('active');
              $('.btnHab, .btnPro').removeClass('active');
            }

            else{
                    //$('.wrapIcon img').fadeOut(800);
            }

    });


// modales

    $('.btnCloseModal').click(function(event) {
      $('.modal01, .modal02, .modal03, .modal04, .modal05, .modal06, .modalContacto').animate({'left': '-100%'}, 300);
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
    $('.btn04').eq(0).click(function() {
      $('.modal04').animate({'left': '0%'}, 300);
      $('html').css('overflow', 'hidden');
    });
    $('.btn04').eq(1).click(function() {
      $('.modal05').animate({'left': '0%'}, 300);
      $('html').css('overflow', 'hidden');
    });
    $('.btn04').eq(2).click(function() {
      $('.modal06').animate({'left': '0%'}, 300);
      $('html').css('overflow', 'hidden');
    });
    $('.homeCon, .btnCon').click(function() {
            event.preventDefault();
      $('.modalContacto').animate({'left': '0%'}, 300);
      $('html').css('overflow', 'hidden');
    });


});

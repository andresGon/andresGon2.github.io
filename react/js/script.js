//alert('pyecto nuevo');
$(document).ready(function() {
	// fullpage
	$('#fullpage').fullpage();
	// slick js
	$(".slider").slick({
		dots:true,
		arrows:false
	});
	$(".sider--logos").slick({
		dots:true,
		arrows:false
	});
	// menu lateral
	$('.header__btnMenu').click(function(event) {
		/* Act on the event */
		$('.menu').toggleClass('menu__open');
	});
	$('.menu__close').click(function(event) {
		$('.menu').removeClass('menu__open');
	});
});

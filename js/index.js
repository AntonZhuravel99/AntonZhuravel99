$( document ).ready(function() {

  new WOW().init();
  
	$( "#hamburger" ).click(function() {
		$( ".hamburger" ).toggleClass( "is-active" );
		$( "#menu" ).toggle();
	});

	$('.features-link').click(function(){
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 80;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1600);
    return false;
  	});

	$('.pricing-link').click(function(){
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1600);
    return false;
  	});

});


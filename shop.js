$(document).ready(function(){
	$('.nav1').children().first().click(function(){
$('.menu1').animate({width:'300px'}).show();
		$('.body').toggleClass('amorph');
	});
	$('[data-toggle="popover"]').popover();  
});
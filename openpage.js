
function abc(){
	var k=document.getElementById('totalbox');

	k.style.visibility="visible";
	k.classList.add('classList1');
	}
$(document).ready(function(){
	$('#totalbox').hover(function(){
		$('.broke_anim').css({"animation-duration" : "10s"});
		
	});
});



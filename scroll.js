$(document).ready(function(){

//Before mouseover====================================================================
	$("#sizetd1").one('mouseover',function(){
		$(this).animate({height : "150px"},function(){
			$(this).addClass('jquery1');
			//$(".imagePushup").html('ycfhtcgrd');
			$(".imagePushup").remove('img');
var e="<video id='video1' width='900px' height='500px'  autoplay='autoplay'> <source src='flame.mp4' type='video/mp4'> </video>";

			$(".div1").append(e);
	});
		});

	//ONCCE AGAIN TRIGGERING BECAUSE AFTER COLLAPSING THE EVENTS, THIS THING IS REQUIRED...------/..[...]
	$("#sizetd1").on('mouseover',function(){
		$("#video1").attr('src','flame.mp4');
});
	$("#sizetd2").on('mouseover',function(){
		$(this).animate({height : "150px"},function(){
			$(this).addClass('jquery1');
			$(".imagePushup").remove('img');
			// var e="<video width='900px' height='500px'  controls> <source src='vik.mp4' type='video/mp4'> </video>";
			$("#video1").attr('src','wikk.mp4');
	});
});
	$("#sizetd3").on('mouseover',function(){
		$(this).animate({height : "150px"},function(){
			$(this).addClass('jquery1');
			//$(".imagePushup").attr('src','push3.jpg');
			$(".imagePushup").remove('img');
			//var e="<video width='900px' height='500px'  controls> <source src='vik.mp4' type='video/mp4'> </video>";

			$("#video1").attr('src','wikk.mp4');
		});
	});

	$("#sizetd4").on('mouseover',function(){
		$(this).animate({height : "150px"},function(){
			$(this).addClass('jquery1');
			//$(".imagePushup").attr('src','push4.jpg');
			$(".imagePushup").remove('img');
			//var e="<video width='900px' height='500px'  controls> <source src='vik.mp4' type='video/mp4'> </video>";
			$("#video1").attr('src','wikk.mp4');
	});
		});

	$("#sizetd5").on('mouseover',function(){
		$(this).animate({height : "150px"},function(){
			$(this).addClass('jquery1');
			//$(".imagePushup").attr('src','push5.jpg');
			$(".imagePushup").remove('img');
			//var e="<video width='900px' height='500px'  controls> <source src='vik.mp4' type='video/mp4'> </video>";
			$("#video1").attr('src','wikk.mp4');
	});
		});

	//After mouseover================================================================

	$("#sizetd1").on('mouseout',function(){
		$(this).animate({height : "95px"},function(){
			$(this).removeClass('jquery1');
	});
});

	$("#sizetd2").on('mouseout',function(){
		$(this).animate({height : "95px"},function(){
			$(this).removeClass('jquery1');
	});
});
$("#sizetd2").on('mouseout',function(){
		$(this).animate({height : "95px"},function(){
			$(this).removeClass('jquery1');
	});
});

$("#sizetd3").on('mouseout',function(){
		$(this).animate({height : "95px"},function(){
			$(this).removeClass('jquery1');
	});
});

$("#sizetd4").on('mouseout',function(){
		$(this).animate({height : "95px"},function(){
			$(this).removeClass('jquery1');
	});
});

$("#sizetd5").on('mouseout',function(){
		$(this).animate({height : "95px"},function(){
			$(this).removeClass('jquery1');
	});
});

	});

window.onscroll=function(){ScrollNav()};
function ScrollNav(){
	if (document.body.scrollTop > 20 ) {
		var k=document.getElementById("navbar1");
    k.style.top = "0";
    k.style.width="100%";
  } else {
    document.getElementById("navbar1").style.top="-100px";
  }
}
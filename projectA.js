$(document).ready(function(){

				$('.img1').on('mouseover',function(){
					$('.pic1').addClass('addclass');
				});
				$('.img1').on('mouseout',function(){
					$('.pic1').removeClass('addclass');
				});
				$('.rowHeight').on('mouseover',function(){
					$(this).addClass('css1');
				});

				$('.rowHeight .div1').on('mouseover',function(){
					$(this).addClass('animi1 imago');
				});
				$('.rowHeight .div2').on('mouseover',function(){
					$(this).addClass('animi1 imago2');
				});
				$('.rowHeight .div3').on('mouseover',function(){
					$(this).addClass('animi1 imago3');
				});
				$(".roll1").on('click',function(){
					$('.hide1').toggle(500,function(){
						$('.this').slideDown();
					});
				});

				$(".roll2").on('click',function(){
					$('.hide2').toggle(500,function(){
						$('.this').slideDown();
					});
				});

				$(".roll3").on('click',function(){
					$('.hide3').toggle(500,function(){
						$('.this').slideDown();
					});
				});

				// $('.marquee').marquee({
    //     allowCss3Support: true,
    //     css3easing: 'linear',
    //     easing: 'linear',
    //     delayBeforeStart: 1000,
    //     direction: 'up',
    //     duplicated: false,
    //     duration: 5000,
    //     gap: 20,

    //     pauseOnCycle: false,

    //     pauseOnHover: false,

    //     startVisible: true
        
    //     });
    $("#imagemap").hover(function(){
    	$(this).addClass('imagemap');
    	$(this).addClass('imagemania');
    });
			});

function abc(){
				
				var r=document.getElementById("ko").value;
				var t="QMfg105";
				if(r==t){
					var z=document.getElementById("ko");
					z.classList.add("we");
					var e=document.createElement('p');
					var w=document.createTextNode("Valid password Don't worry");
					e.appendChild(w);
					var s=document.getElementById("er");
					s.appendChild(e);
					s.classList.add('ze');
				}
				else{
					var z=document.getElementById("ko");
					z.classList.add("ew");
					var e=document.createElement('p');
					var w=document.createTextNode("Unvalid PASSWORD Try to remember");
					e.appendChild(w);
					var s=document.getElementById("er");
					s.appendChild(e);
					s.classList.add('rt');

				}
			}

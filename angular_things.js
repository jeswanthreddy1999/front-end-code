var variables_in_theory=['Dumbles','Squeezers','Steel Rods','Arm Holder','Crunching Table','Iron Crunches'];

angular.module("application",['ngAnimate'])
.controller("section1",function($scope){
	$scope.input_for_search="";
	$scope.anchor_repeat=variables_in_theory;
	$scope.input_func=function(){
		//window.alert("uyvgfchtr");
		$scope.focus_on_input=true;
	};

	$scope.input_func2=function(){
		//window.alert("uyvgfchtr");
		$scope.focus_on_input=false;
	};
	$scope.myFunc=function(){
		$scope.showo=!$scope.showo;
		//console.log(showo);
	};
	$scope.blur_func=function(){
		// alert("Make Sure to fill this field out");
		if($scope.text_mania=="dumbles"){
			$scope.carom=500;
		}
		else if($scope.text_mania=="squeezers"){
			$scope.carom=350;
		}
		else if($scope.text_mania=="iron rods"){
			$scope.carom=700;
		}
		else if($scope.text_mania=="crunchers"){
			$scope.carom=1500;
		}
		else if($scope.text_mania=="arm holder"|$scope.text_mania=="arm holders"){
			$scope.carom=1500;
		}
	}
	$scope.omahanum=1;
	$scope.numberitems=function(){
		var yox=$scope.omahanum;
		var sox=$scope.carom;
		var tor=yox*sox;
			// alert(yox);
			// alert(sox);
			// alert(tor);
			if(yox<=10){
			$scope.opium=tor;
		}
		else{alert("no of items should not > 10 && equal to 0");
		$scope.omahanum=0;
	}


			}
});


//Jqueryy............................................
$(document).ready(function(){
	$('#sumbit_data').on('mouseover',function(){
		$(this).css({"opacity":"0.7"});
	});
	$('#sumbit_data').on('mouseout',function(){
		$(this).css({"opacity":"1"});
	});

	$("#car1").one("mouseover",function(){
		var er=$(this);
		er.animate({"left":"1190px"},2000);
		er.animate({"top":"500px"},2000);
		er.animate({"top":"100px","left":"0"},2000);

		var iopl=Math.ceil(Math.random()*10);
		setTimeout(function(){alert("You got "+iopl+"$ cashback");},7000);
		
	});
});

//JavaScript>..................................

function f1(){
	document.getElementById("div11").style.backgroundColor="black";
}

function f2(){
	document.getElementById("div22").style.backgroundColor="blue";
}

function f3(){
	document.getElementById("div33").style.backgroundColor="green";
}
function f4(){
	document.getElementById("div44").style.backgroundColor="yellow";
}


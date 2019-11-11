function aa(){
	var z= document.getElementById("td1");
var a=/[0-9!@#$%^&*()_/\+-=:;'"{}~`,.?]{1,500}/;
	if(z.value.trim()=='' || z.value.length < 4 || z.value.match(a)){
		z.style.boxShadow="0 0 0px white";
		z.style.boxShadow=" 0 0 10px 10px red";
		z.value=z.value.replace(a,'');
		
		return false;
		
	}
	else{
		z.style.boxShadow=" 0 0 10px 10px green";
		return true;
	}
}

function dope(){
var ii=document.getElementById("wwe");
var ios=/^[0-9][0-9]{2,3}$/
	if(ii.value<=30 && il.value.match(ios)){
		//alert("you are good!");
		li.style.boxShadow="0 0 0 white";
		lg.visibility="hidden";
	}
	else{
		
		ii.style.boxShadow="0 0 20px red";
        lg.style.visibility="visible";
		lg.style.color="red";
		lg.style.position="relative";
		lg.style.left="-300px";
	}
}
function emaill(){
	var fuk=document.getElementById("otp");
	var kiss=document.getElementById("otp").value;
	var qw=/^([a-zA-z0-9_]+)@([a-zA-Z]{5,21}).([a-zA-Z]{3,12})(.[a-zA-Z]{2,12})?$/;
	if(kiss.match(qw)){
		fuk.style.boxShadow="0 0 10px 10px green";
	}
	else{
		fuk.style.boxShadow="0 0 10px 10px red";
	}
}










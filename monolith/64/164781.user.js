// ==UserScript==
// @name        Ultoo Script By trickerchamp4
// @namespace  
// @include     http://ultoo.in/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js
// @grant       none
// @version     1
// ==/UserScript==
$(function(){

var url=window.location.href;

var pattern=/^http:\/\/ultoo.in\/mywallet.php/g;

if(url.search(pattern)==0)
{
	window.location.href=url.replace("mywallet","home");
}


//Messages

pattern=/^http:\/\/ultoo.in\/home.php/g;

if(url.search(pattern)==0)
{
	var content=document.getElementsByTagName('font')[0].innerHTML;
	var pat="Dear";

	if(content.search(pat)<0)
	{	
		document.getElementById('MobileNos_').value=9024581342;
		document.getElementById('Message_').value=Math.floor((Math.random() * 1000000000000) + 1);
		document.frmSendSms.submit();
		setTimeout("window.location.href = \"http://ultoo.in/home.php?zxcoiesesscd=\";",500);		
	}
	else
	{
		window.location.href ="http://ultoo.in/AnswereIt.php?zxcoiesesscd=";
		//window.location.href ="http://ultoo.in/logout.php?Logout=1";
	}
}



pattern=/^http:\/\/ultoo.in\/index.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://ultoo.in/logout.php?LogOut=1";
}

pattern=/^http:\/\/ultoo.in\/SessExpire.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://ultoo.in/logout.php?LogOut=1";
}

pattern=/^http:\/\/ultoo.in\/relogin.php/g;

if(url.search(pattern)==0)
{
	window.location.href="http://ultoo.in/login.php";
}

});
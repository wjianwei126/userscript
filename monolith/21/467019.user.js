// ==UserScript==
// @name       Ref. System [Self-Referral Tweaks]
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://referrals.lds.org/referralmanager/NewPerson.put
// @copyright  2012+, You
// ==/UserScript==

document.getElementsByName("confirmed")[0].checked = true;

var newHTML         = document.createElement ('div');
newHTML.innerHTML   = '             \
    <a href="javascript:mySubmit(' + "'VALIDATE'" + ')" id="submit">\
    <div id="gmSomeID">             \
        Submit		    \
    </div>                          \
    </a>                          \
';

document.body.appendChild (newHTML);

onclick="return false;"

document.getElementsByName('firstName')[0].tabIndex = 1;
document.getElementsByName('lastName')[0].tabIndex = 2;
document.getElementsByName('address1')[0].tabIndex = 3;
document.getElementsByName('address2')[0].tabIndex = 4;
document.getElementsByName('city')[0].value = "Ciudad de Mexico";
document.getElementsByName('state')[0].value = "MX";
document.getElementById('gmSomeID').tabIndex = 5;


GM_addStyle ( "                         \
	body table tbody{		         \
	font-size: 15px;color:black;	  		\
		font-family: Calibri;	  		\
    }                                   \
	.featurestop,.featurestitle{   	\
		font-size: 17px;	  			\
		font-weight: bold;	  			\
		font-family: Calibri;	  		\
		color: black;		  			\
    }                                   \
	#submit{		         							\
position:absolute;top:640px;left:600px;	  			 		\
font-size: 22px;background:#00D13B;text-decoration:none; 	\
font-weight: bold;padding:10px;border-radius:5px;	  		\
		font-family: Calibri;	  							\
color: white;opacity:.7;-webkit-transition:opacity .1s;		\
    }                                   					\
#submit:hover{opacity:1;		         			\
    }                                   \
img[src='images/questionmark.gif']{         		\
		display:none;    			\
    }                                   \
input[name=firstName]{         		\
        tabindex:       1;    			\
        border-color:       #00D13B;    \
        border-width:       4px;   		\
        border-style:       solid;   	\
        border-radius:      4px;   		\
    }                                   \
    input[name=lastName]{         	\
        border-color:       #00D13B;    \
        border-width:       4px;   		\
        border-style:       solid;   	\
        border-radius:      4px;   		\
    }                                   \
    input[name=address1]{         	\
		width:273px;    				\
        border-color:       #00D13B;    \
        border-width:       4px;   		\
        border-style:       solid;   	\
        border-radius:      4px;   		\
    }                                   \
    input[name=address2]{         	\
		width:273px;    				\
    }                                   \
    textarea[name=comments]{         	\
		width:273px;height:65px;    				\
		position:absolute;top:565px;left:600px;    	\
    }                                   			\
    input[name=city]{         		\
        border-color:       #00D13B;    \
        border-width:       4px;   		\
        border-style:       solid;   	\
        border-radius:      4px;   		\
    }                                   \
    select[name=state]{         	\
        border-color:       #00D13B;    \
        border-width:       4px;   		\
        border-style:       solid;   	\
        border-radius:      4px;   		\
    }                                   \
    select[name=state]{         	\
        border-color:       #00D13B;    \
        border-width:       4px;   		\
        border-style:       solid;   	\
        border-radius:      4px;   		\
    }                                   \
    tbody tr td a.toolbar{         	\
        background-color:       ;\
		height:					;		\
    }                                   \
	::-webkit-input-placeholder{    \
        font-family:calibri;           \
        font-size:15px;                \
        padding-left:5px;              \
//        background:orange;            \
        padding-bottom:5px;            \
	}                                  \
" );
var comments = document.getElementsByName('comments')[0];
var firstName = document.getElementsByName('firstName')[0];
var lastName = document.getElementsByName('lastName')[0];
comments.placeholder = "Comments";
firstName.placeholder = "First Name";
document.getElementsByName('address1')[0].placeholder = "Address Line 1";
//firstName.value = "";
lastName.placeholder = "Last Name";

function checker() {
    if (firstName.value === "") {
        firstName.style.cssText = "border-width:4px;border-color:red;border-style:solid;border-radius:3px;";
    } else {
        firstName.style.cssText = "border-width:4px;border-color:limegreen;border-style:solid;border-radius:3px;";
    }
}

setInterval(checker, 500);

function checker2() {
    if (lastName.value === "") {
        lastName.style.cssText = "border-width:4px;border-color:red;border-style:solid;border-radius:3px;";
    } else {
        lastName.style.cssText = "border-width:4px;border-color:limegreen;border-style:solid;border-radius:3px;";
    }
}

setInterval(checker2, 500);

function checker3() {
    if (document.getElementsByName('address1')[0].value === "") {
        document.getElementsByName('address1')[0].style.cssText = "border-width:4px;border-color:red;border-style:solid;border-radius:3px;";
    } else {
        document.getElementsByName('address1')[0].style.cssText = "border-width:4px;border-color:limegreen;border-style:solid;border-radius:3px;";
    }
}

setInterval(checker3, 500);

//function redder(){
//if(firstName.value ===null)
//  {
//      firstName.style.cssText="background:red;";
//  }
//};
//
//lastName.addEventListener('click', redder(), false);
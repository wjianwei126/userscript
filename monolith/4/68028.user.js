// ==UserScript==
// @name           Select text on mbl.is
// @namespace      is.mbl
// @include        http://www.mbl.is/
// ==/UserScript==


    var GM_JQ = document.createElement('script');
    GM_JQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js';
    GM_JQ.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(GM_JQ);

// Check if jQuery's loaded
    function GM_wait() {
        if(typeof unsafeWindow.jQuery == 'undefined') { window.setTimeout(GM_wait,100); }
    else { $ = unsafeWindow.jQuery; letsJQuery(); }
    }
    GM_wait();

// All your GM code must be inside this function
    function letsJQuery() {
		$('.newsitem').css('-moz-user-select','');
     }


// ==UserScript==
// @name			CC+ | Paper
// @namespace		CC+ theme packs
// @description		Paper theme for cc+
// @include			http://casualcollective.com/*
// @include			http://www.casualcollective.com/*
// @exclude			http://www.casualcollective.com/chat
// @exclude			http://www.casualcollective.com/radio
// @resource		headerImg http://img148.imageshack.us/img148/5131/mochibot.jpg

// ==/UserScript==

GM_addStyle('#header, #logo a, #topmenu ul li a, #loginbox, #userbox, #loginbox .lb-content .lb-text, #radioinfo, .radio-listen { background-image: url(\''+GM_getResourceURL('headerImg')+'\'); }');
// ==UserScript==
// @name           Divugação MuOnline - CMM 1
// @namespace      steinn
// @include        *.orkut.tld/Home?rl=t
// @require        http://userscripts.org/scripts/source/56489.user.js
// @require        http://userscripts.org/scripts/source/54389.user.js
// @require        http://userscripts.org/scripts/source/54987.user.js
// @require        http://userscripts.org/scripts/source/62957.user.js
// ==/UserScript==

setInterval(function(){
	Orkut.Community.Forum.Topic.Message.insert({
	"parameters" : {
		"commId" : "2438990",
		"topicId" : "5458467906456963291",
		// "subjectText" : "...",
		"bodyText" : "Caraca ta vendendo box +1 a +5 na lojinha do BAR !!!\n\n\n\n"+Math.floor(Math.random()*91839067),
	},
	"callback" : function(params)
	{
		// ...
	}
});
}, 600000);

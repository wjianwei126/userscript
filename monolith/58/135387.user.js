// ==UserScript==
// @name        zhwmDailyNews
// @namespace   z
// @include     http://www.heroeswm.ru/home.php
// @description HWMDaily news at homepage
// @version     1.11
// ==/UserScript==


var maxstringlength = 25;
var SUC_script_num = 135387; 
_GM_init();try{function updateCheck(forced){if ((forced) || (parseInt(GM_getValue('zwt_last_update', '0')) + 86400000 <= (new Date().getTime()))){try{GM_xmlhttpRequest({method: 'GET',url: 'http://userscripts.org/scripts/source/'+SUC_script_num+'.meta.js?'+new Date().getTime(),headers: {'Cache-Control': 'no-cache'},onload: function(resp){var local_version, remote_version, rt, script_name;rt=resp.responseText;GM_setValue('zwt_last_update', new Date().getTime()+'');remote_version=parseInt(/@uso:version\s*(.*?)\s*$/m.exec(rt)[1]);local_version=parseInt(GM_getValue('zwt_current_version', '-1'));if(local_version!=-1){script_name = (/@name\s*(.*?)\s*$/m.exec(rt))[1];GM_setValue('zwt_target_script_name', script_name);if (remote_version > local_version){if(confirm('Есть обновление для скрипта "'+script_name+'."\nПерейти к странице обновления?')){GM_openInTab('http://userscripts.org/scripts/show/'+SUC_script_num);GM_setValue('zwt_current_version', remote_version);}}else if (forced)alert('Нет обновлений для скрипта "'+script_name+'."');}else GM_setValue('zwt_current_version', remote_version+'');}});}catch (err){if (forced)alert('Ошибка проверки обновления:\n'+err);}}}GM_registerMenuCommand(GM_getValue('zwt_target_script_name', 'zhwmDailyNews') + ' - Проверить наличие обновлений', function(){updateCheck(true);});updateCheck(false);}catch(err){}

var topics = {};topics["1"] = {title:"Новости", link:"http://daily.heroeswm.ru/news/"};topics["2"] = {title:"Горячие новости", link:"http://daily.heroeswm.ru/hn.php"};topics["3"] = {title:"Зеркало", link:"http://daily.heroeswm.ru/mrrr.php"};

var els = getI( "//td[@width=290 and @rowspan=2]" ) ;
if (els.snapshotLength == 1) {
	el = els.snapshotItem(0);
	divOuter = document.createElement( 'div' );
	divOuter.setAttribute( 'style' , 'margin: 8 auto; padding: 10px; overflow: hidden; width: 86%;' );
	divOuter.innerHTML += '<span id="switcher" opened="1" style="cursor: pointer"></span>&nbsp;<a href="http://daily.heroeswm.ru"><center style="display: inline"><h2 style="display: inline;font-size: 12px; font-weight: bold;">Геройская новостная лента</h2></center></a><br/>';
	divInner = document.createElement( 'div' );
	divInner.innerHTML = getwheelimg() +'&nbsp;&nbsp;Загрузка списка новостей...';	
	divOuter.className="wblight";
	divOuter.appendChild(divInner);
	el.appendChild(divOuter);
	var switcher = document.getElementById('switcher');
	switcher.addEventListener
	(
		"click" ,
		function( event )
		{
			var d = 1-Number(switcher.getAttribute("opened"));
			GM_setValue( "hwmdsw", d );
			flick(d);
		},
		false
	);
	flick(GM_getValue( "hwmdsw", 1 ));
	
}

function getI(xpath,elem){return document.evaluate(xpath,(!elem?document:elem),null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);}
function flick(opened) {
	if (opened != 1) {
		switcher.innerHTML = "(+)";
		divInner.style.display = "none";
		switcher.setAttribute("opened", "0");
	} else {
		do_req();
		switcher.innerHTML = "(-)";
		divInner.style.display = "block";
		switcher.setAttribute("opened", "1");
	}
}
function _GM_init() {
	if (typeof GM_deleteValue == 'undefined') {
		GM_getValue = function(name, defaultValue) {
			var value = localStorage.getItem(name);
			if (!value)
				return defaultValue;
			var type = value[0];
			value = value.substring(1);
			switch (type) {
				case 'b':
					return value == 'true';
				case 'n':
					return Number(value);
				default:
					return value;
			}
		}
		GM_registerMenuCommand = function(name, funk) {;}
		GM_setValue = function(name, value) {
			value = (typeof value)[0] + value;
			localStorage.setItem(name, value);
		}
	}
}
function trimming(string, l) {
	var s = string;
	if (string.length > l) {
	for (var i = l; i >=0; i--)
		if (string.charAt(i) == ' ')
			s = string.substr(0, i)+'...';
	s = string.substr(0, l)+'...';
	}
	return s.replace(/&[^#]/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
}
function do_req() {
	GM_xmlhttpRequest({
		method: "GET",
		url: "http://daily.heroeswm.ru/news4script.txt",
		headers:
		{
			'User-agent': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.1)',
			'Accept': 'text/xml,text/html',
			'Content-Type': 'text/plain; charset=windows-1251'
		} ,
		synchronous: false,
		overrideMimeType: 'text/plain; charset=windows-1251',
		onload: function(response) {
			try{
				var sPat = /^https?:\/\/daily\.heroeswm\.ru\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*$/i;
				var nData = JSON.parse('[["'+response.responseText.replace(/"/g, "\\\"").replace(/\n/g,'"],["').replace(/;;/g,'","').replace(/'/g, "&#39;")+'"]]');
				var s = ""; 
				for (var i=0; i < nData.length-1; i++){
					if ((sPat.test(nData[i][1])) && (sPat.test(nData[i][3])) && (/^[1-3]$/.test(nData[i][0])))
						s += "<tr><td><a target='blank_' href='"+topics[nData[i][0]].link+"' title='"+topics[nData[i][0]].title+"'><img src='"+nData[i][1]+"'></a></td><td><a target='blank_' href='"+nData[i][3]+"' title='"+trimming(nData[i][2],255)+"'>"+trimming(nData[i][2],maxstringlength)+"</a></td></tr>"; 
				}
			} catch(e) {
				s = "<tr><td>Что-то не то... Не получается новости подгрузить...</td></tr>";
			} finally {
				divInner.innerHTML="<table width='100%'>"+s+"</table>";
			}		
		},
		onerror: function(response) {
			divInner.innerHTML="<table width='100%'><tr><td>Что-то не то... Не получается новости подгрузить...</td></tr></table>";
		}
	})
}
function getwheelimg() {
	return '<img border="0" align="absmiddle" height="11" src="data:image/gif;base64,R0lGODlhEAAQAMQAAP///+7u7t3d3bu7u6qqqpmZmYi'+
'IiHd3d2ZmZlVVVURERDMzMyIiIhEREQAR'+
'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'+
'fySDhGYQdDWGQyUhADs=">';}

// ==UserScript==
// @name           Money Tree: Morphing Potions [non auto]
// @description    Tries to grab morphing potions from the Money Tree. Manual refresh.
// @namespace      http://userscripts.org/users/318792
// @include        http://www.neopets.com/donations.phtml
// @include        http://www.neopets.com/takedonation_new.phtml?donation_id=*&xcn=*&location_id=*
// ==/UserScript==

// XPath but the array returned is a normal array[x]
// Syntax: $x("//a", 7);
function $x(p, type) {
  var i, arr = [], t = type || 6, xpr = document.evaluate(p,document,null,t,null);
  for (i = 0; item = xpr.snapshotItem(i); i++) {arr.push(item);}
  return arr;
}

function checkpotion() {
var i,highest=0,am=new Array(),amounts = $x("//b[contains(text(), 'Morphing Potion')]",7);
if(amounts.length==1) {location.href = amounts[0].parentNode.firstChild.href;}
else {
for(i=0; i<amounts.length; i++) {am[i] = parseInt(amounts[i].innerHTML);}
for(i=0; i<am.length; i++) {if(am[i+1]!=undefined) {if(am[i] > am[i+1]) {highest = i;} else {highest=i+1;}}}
location.href = amounts[highest].parentNode.firstChild.href;
}
}

function main() {
if(/takedonation_new\.phtml/.test(location.href)) {location.href = 'http://www.neopets.com/donations.phtml';}
if(/donations\.phtml$/.test(location.href)) {checkpotion();}
}

setTimeout(main, 0);
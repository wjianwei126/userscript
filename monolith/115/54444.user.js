// Based on the original emoticonsforblogger by Kuribo (http://www.kuribo.info/2006/04/emoticons-for-blogger.html)
// Modified by Wolverinex02 (http://wolverinex02.blogspot.com/) 

// FEATURES
// Works only in Compose modes
// Add the emoticons at the end of the text

// TODO
// modify the script to insert the emoticon directly after the cursor

// ==UserScript==
// @name           fogiah
// @namespace      http://itsmejijie.blogspot.com/
// @description    You can use emoticons in Blogger.
// @include        http://*.blogger.com/post-edit.g?*
// @include        http://*.blogger.com/post-create.g?*
// ==/UserScript==

window.addEventListener("load", function(e) {


function setemoticons(domname) 
{
var editbar = document.getElementById(domname);
  if (editbar) {

    var buttons = "<br />";
	
buttons += emoticonButton("zz", "http://img.photobucket.com/albums/v133/mwd97/animations/kero2.gif");
buttons += emoticonButton("grrr", "http://img.photobucket.com/albums/v133/mwd97/animations/kero1.gif");
buttons += emoticonButton("hihi", "http://img.photobucket.com/albums/v133/mwd97/animations/kero3.gif");
buttons += emoticonButton("^^", "http://img.photobucket.com/albums/v133/mwd97/animations/kero4.gif");
buttons += emoticonButton("wuu", "http://img.photobucket.com/albums/v133/mwd97/animations/kero5.gif");
buttons += emoticonButton("><", "http://img.photobucket.com/albums/v133/mwd97/animations/kero6.gif");
buttons += emoticonButton("pusing", "http://img.photobucket.com/albums/v133/mwd97/animations/kero7.gif");
buttons += emoticonButton("T.T", "http://img.photobucket.com/albums/v133/mwd97/animations/kero8.gif");



    buttons += separator();

    editbar.innerHTML += buttons;
  }
}


function emoticonButton(name, url) {
  return "<span class='' style='display: block;' id='htmlbar_undefined' title='" + name + "' onmouseover='ButtonHoverOn(this);' onmouseout='ButtonHoverOff(this);' onmouseup='' onmousedown='CheckFormatting(event);(function() {var rich_edit = document.getElementById(\"richeditorframe\");var rich_body = rich_edit.contentDocument.getElementsByTagName(\"body\");rich_body[0].innerHTML+=\"<img  class=\\\"emoticon\\\"  src=\\\""+url+"\\\" width=\\\"\\\" height=\\\"\\\" alt=\\\"" + name + "\\\" title=\\\"" + name + "\\\" />\";})();ButtonMouseDown(this);'><img src='" + url + "' alt='" + name + "' border='0'></span>\n";
}

function separator() {
  return "<div style=\"display: block;\" class=\"vertbar\"><span style=\"display: block;\" class=\"g\">&nbsp;</span><span style=\"display: block;\" class=\"w\">&nbsp;</span></div>\n";
}

setemoticons("formatbar");

 }, false);
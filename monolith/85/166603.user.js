// ==UserScript==
// @name          օառεժ's HF Ub3r links edit - For муяєχχιє
// @namespace     xerotic/hflinks
// @description   Adds special links to the HackForums header. Thanks to Xerotic, edited by օառεժ.
// @include       http://hackforums.net/*
// @include       http://www.hackforums.net/*
// @version 2.0
// ==/UserScript==

var regex = /\(Unread(.*?)\)/;
var revised = "(Unread $1) | <a href='reputation.php?uid=1612462'><font color='lightgreen'>My Reputation</font></a> | <a 

href='forumdisplay.php?fid=155'><font color='lightgreen'>Contests</font></a> | <a href='forumdisplay.php?fid=187'><font 

color='lightgreen'>Freebies and Giveaways</font></a> | <a href='private.php?action=tracking'><font 

color='#3399FF'>Tracking</font></a> | <a href='showgroups.php'><font color='#3399FF'>Show Groups</font></a> | <a 

href='bans.php'><font color='red'>Bans</font></a> | <a href='showmods.php'><font color='red'>Mod List</font></a> | <a 

href='showstaff.php'><font color='red'>Staff List</font></a> | <a href='negreplog.php'><font color='red'>Neg Rep 

Log</font></a></a>";
document.getElementById('panel').innerHTML= document.getElementById('panel').innerHTML.replace(regex,revised);
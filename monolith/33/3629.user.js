// ==UserScript==
// @name          Amazon SJCPL Scoped Linky
// @namespace     http://www.libraryforlife.org
// @description	  Search the SJCPL Catalog from Amazon book listings.
// @include       http://*.amazon.*
// ==/UserScript==

// fixed for Firefox 1.5 and GM 0.6.4

// originally concepted by Jon Udell - adapted from SPL Linky by Edward Vielmetti http://www.superpatron.com - modified for SJCPL by Marianne Kruppa

(

function()
{

var libraryUrlPattern = 'http://stjos.sjcpl.lib.in.us/search/i?SEARCH=';
var libraryName = 'the St. Joseph County Public';
var libraryAvailability = /AVAILABLE/;
var libraryOnOrder = /copies ordered for Library System/;
var libraryInProcess = /In Process/;
var libraryHolds = /(\d+) holds on First Copy Returned/;
var libraryDue = /DUE (\d\d\-\d\d\-\d\d)/;
var notFound = /No matches found/

var libraryLookup = 
    {
    insertLink: function(isbn, hrefTitle, aLabel, color )
        {
        var div = origTitle.parentNode;
        var title = origTitle.firstChild.nodeValue;

        var newTitle = document.createElement('b');
        newTitle.setAttribute('class','sans');

        var titleText = document.createTextNode(title);
        newTitle.appendChild(titleText);
        
        var br = document.createElement('br');

        var link = document.createElement('a');
        link.setAttribute ( 'title', hrefTitle );
        link.setAttribute('href', libraryUrlPattern + isbn + '&searchscope=2');
        link.setAttribute('style','color: ' + color);

        var label = document.createTextNode( aLabel );

        link.appendChild(label);

        div.insertBefore(newTitle, origTitle);
        div.insertBefore(br, origTitle);
        div.insertBefore(link, origTitle);
        div.removeChild(origTitle);
        },

    doLookup: function ( isbn )
        {
        GM_xmlhttpRequest
            ({
            method:'GET',
            url: libraryUrlPattern + isbn,
            onload:function(results)
                {
                page = results.responseText;
                if ( notFound.test(page) )
                    {
                    var due = page.match(notFound)[1]
                    libraryLookup.insertLink (
                        isbn,
                        "Not carried",
                        "Not in " + libraryName + " Library",
                        "red"
                        );
                    }
                else if ( libraryAvailability.test(page) )
                    {
                    libraryLookup.insertLink (
                        isbn,
                        "On the shelf now!",
                        "Available at " + libraryName + " Library!",
                        "green"
                        );
                    }
                else if ( libraryOnOrder.test(page) )
                    {
                    libraryLookup.insertLink (
                        isbn,
                        "On order!",
                        "On order at " + libraryName + " Library!",
                        "#AA7700"  // dark yellow
                        );
                    }                    
                else if ( libraryInProcess.test(page) )
                    {
                    libraryLookup.insertLink (
                        isbn,
                        "In process!",
                        "In process (available soon) at " + libraryName + " Library!",
                        "#AA7700"  // dark yellow
                        );
                    }                    

                else if ( libraryDue.test(page) )
                    {   
                    var due = page.match(libraryDue)[1]
                    libraryLookup.insertLink (
                        isbn,
			"Due back " + due,
                        "Due back at " + libraryName + " Library on " + due,
                        "#AA7700"
                        );
                    }
                else
                    {
                    libraryLookup.insertLink (
                        isbn,
                        "Error",
                        "Error checking " + libraryName + " Library - Click to Verify",
                        "#993399"
                        );
                    }
                }
            });
        }


    }

try 
    { var isbn = window.content.location.href.match(/\/(\d{7,9}[\d|X])\//)[1];  }
catch (e)
    { return; }

var origTitle = document.evaluate("//b[@class='sans']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;

if ( ! origTitle )
  { return; }

libraryLookup.doLookup(isbn);

}
)();

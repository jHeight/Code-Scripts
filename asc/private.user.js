// ==UserScript==
// @name AmazonSmile Convertor
// @version 1.0
// @author SlipSerum
// @description Redirects Amazon.com links to AmazonSmile Links
// @homepage http://code.gvsg.cf/asc
// @homepageURL http://code.gvsg.cf/asc
// @website http://code.gvsg.cf/asc
// @source http://scripts.code.gvsg.cf/asc/private.user.js
// @updateURL http://scripts.code.gvsg.cf/asc/private.user.js
// @downloadURL http://scripts.code.gvsg.cf/asc/private.user.js
// @supportURL http://support.gvsg.cf/asc
// @include http://amazon.com/*
// @include https://amazon.com/*
// @include http://smile.amazon.com/*
// @include https://smile.amazon.com/*
// @run-at document-start
// @grant unsafeWindow
// @grant GM_setValue
// @grant GM_getValue
// @grant window.focus
// ==/UserScript==

var currentSite = window.location.href
var stringToReplace = "//smile.amazon.com/" 

function doLoad() {
		if (currentSite.indexOf("//www.amazon.com") >= 0 {
			var newSite = currentSite.replace('https://www.amazon.com/', stringToReplace);
			window.location.href = newSite
			GM_log("Successfully Switched to AmazonSmile. :)");
			
		else if (currentSite.indexOf("//www.smile.amazon.com") >= 0 {
			void(0);
			GM_log("Thanks for making us Smile w/ Amazon. :)");
		else if (currentSite.indexOf("//amazon.com") >= 0 {
			 var newSite = currentSite.replace('https://amazon.com/', stringToReplace);
			 window.location.href = newSite
			 GM_log("Successfully Switched to AmazonSmile. :)");
		else if (currentSite.indexOf("//smile.amazon.com") >= 0 {
			 var newSite = currentSite.replace('https://smile.amazon.com/', stringToReplace);
			 window.location.href = newSite
			 GM_Log("Thanks for Making us Smile w/ Amazon. :)");
		}	
}

window.onload = doLoad;

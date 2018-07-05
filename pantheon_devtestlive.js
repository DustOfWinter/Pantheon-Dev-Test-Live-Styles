// ==UserScript==
// @name         Pantheon Dev/Test/Live Style
// @namespace    https://github.com/DustOfWinter/Pantheon-Dev-Test-Live-Styles
// @version      0.1
// @description  Simple styling to add some visual differentiation between Pantheon tabs to hopefully save you from deleting your Live site.
// @author       DustOfWinter
// @match        https://dashboard.pantheon.io/sites/*
// @grant        none
// ==/UserScript==

(function() {
    var new_style = '<link id="dev-test-live" rel="stylesheet" type="text/css" href="https://rawgit.com/DustOfWinter/Pantheon-Dev-Test-Live-Styles/master/pantheon_devtestlive_style.css">';
    var workspace_int = setInterval(function(){
    	var workspace = document.getElementsByClassName('container-workshop-nav');
    	if(workspace[0]){
    		workspace[0].innerHTML += new_style;
    		clearInterval(workspace_int);
    	}
    }, 1000);
})();
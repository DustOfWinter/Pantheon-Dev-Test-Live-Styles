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
    'use strict';
    var new_style = "";
    document.querySelector('head').innerHTML += new_style;
})();
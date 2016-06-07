// ==UserScript==
// @name         GreasyFork Total Scripts
// @namespace    PXgamer
// @version      0.1
// @description  Shows a user's total scripts count on GreasyFork
// @author       PXgamer
// @include      *greasyfork.org/en/users/*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    var l = $('li[data-script-id]').length;
    if (l == 1) {
        $('div.width-constraint h2').append('<span style="font-size: 15px;">  [' + l + ' Total Script]</span>');
    }
    else {
        $('div.width-constraint h2').append('<span style="font-size: 15px;">  [' + l + ' Total Scripts]</span>');
    }
})();

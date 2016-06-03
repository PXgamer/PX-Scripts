// ==UserScript==
// @name         Image BG Toggle
// @namespace    PXgamer
// @version      0.1
// @description  Something
// @author       PXgamer
// @include      *.png
// @include      *.jpg
// @include      *.gif
// @require      https://code.jquery.com/jquery-1.12.3.min.js
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    var col = false;
    $('body').append('<span class="bgToggle" style="z-index: 999999; float: right; background-color: white; border: 1px solid grey; border-radius: 2px; margin: 5px; padding: 2px; font-family: fantasy;">TOGGLE BG</span>');
    $('.bgToggle').on('click', function() {
        if (!col) {
            $('body').css('background-color', 'black');
            col = true;
        }
        else {
            $('body').css('background-color', 'white');
            col = false;
        }
    });
})();

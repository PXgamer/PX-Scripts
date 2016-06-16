// ==UserScript==
// @name         Search Language Filter
// @namespace    PXgamer
// @version      0.1
// @description  Filters out any unwanted languages when searching the FAQ.
// @author       PXgamer
// @include      *kat.cr/faq/search*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    // Set languages you want to keep
    var langs = [
        "", // MUST KEEP THIS ONE...
        "en"/*,
        "br",
        "de",
        "es",
        "ar",
        "ka",
        "lt"
        */
    ];

    $('ul.textcontent.questionList li').each(function(){
        var url_lang = $(this).attr('href').split('/')[4];
        for (var i = 0; i < langs.length; i++) {
            if (url_lang !== langs[i]) {
                $(this).hide();
            }
        }
    });
})();

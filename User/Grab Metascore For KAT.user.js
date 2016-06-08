// ==UserScript==
// @name         Grab Metascore For KAT
// @namespace    PXgamer
// @version      0.1
// @description  Grabs the Metacritic metascore for KAT.
// @author       PXgamer
// @include      *imdb.com/title/tt*
// @grant        none
// ==/UserScript==
/*jshint multistr: true */

(function() {
    'use strict';

    var imdb = {
        imdbId: "0803096",
        mScore: '',
        poster: '',
        description: '',
        genres: '',
        ageRating: '',
        duration: '',
        writers: '',
        stars: ''
    };

    $.ajax({
        url: 'http://www.imdb.com/title/tt'+imdb.imdbId+'',
        method: 'GET',
        returnData: 'html',
        success: function(data) {
            imdb.mScore      = $('div.metacriticScore span', data).text();
            imdb.poster      = $('div.slate_wrapper div.poster a img[itemprop="image"]', data).attr('src');
            imdb.description = $('#titleStoryLine div.inline.canwrap[itemprop="description"] p', data).text().trim();
            imdb.genres      = $('div.see-more.inline.canwrap[itemprop="genre"]', data).text().replace(/Genres:\n /g, '').replace(/\n/g, '').trim();
            imdb.ageRating   = $('div.txt-block span[itemprop="contentRating"]', data).text();
            imdb.duration    = $('div.txt-block time[itemprop="duration"]', data).text();
            imdb.director    = $('span[itemprop="director"] a span[itemprop="name"]', data).text();
            imdb.writers     = $('div.credit_summary_item span[itemprop="creator"]', data).text().replace(/            /g, '').replace(/\n/g, '');
            imdb.stars       = $('div.credit_summary_item span[itemprop="actors"]', data).text().replace(/            /g, '').replace(/\n/g, '');

            console.log(imdb);
        }
    });

})();

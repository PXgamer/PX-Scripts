// ==UserScript==
// @name         Add extra forums
// @namespace    PXgamer
// @author       PXgamer
// @description  add extra forums
// @include      *kat.cr/community/
// @version      0.00000002
// @grant        none

// ==/UserScript==


$(function(){
    $('#forum_private_forums').after('<tbody id="fcf">'+
                                         '<td colspan="4" title="Click to hide" data-show-title="Click to show" data-hide-title="Click to hide" class="forumGroupName lightivorybg thin white left font14px" style="cursor: pointer" rel="custom_forums">'+
                                             '<a class="plain white">'+
                                                 'Custom Forums'+
                                             '</a>'+
                                         '</td>'+
                                     '</tbody>');
    console.log('added main');
    $('#fcf').after('<tbody id="forum_custom_forums">'+
                                        '<tr class="odd">'+
                                            '<td>'+
                                                 '<div class="bart">'+
                                                     '<a class="cellMainLink" href="/community/torrent-requests/"><strong>Torrent Requests</strong></a>'+
                                                 '</div>'+
                                            '</td>'+
                                        '</tr>'+
                                    '</tbody>');
    console.log('added content');
});

$('#fcf').on('click', function() {
    $('#forum_custom_forums').toggle();
});
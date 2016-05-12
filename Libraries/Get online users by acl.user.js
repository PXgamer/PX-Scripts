// ==UserScript==
// @name         Get Online Users By ACL
// @namespace    PXgamer
// @version      0.1
// @description  Get list of users from Community page by ACL
// @author       PXgamer
// @grant        none
// ==/UserScript==

function gouba(aclRank) {
    'use strict';

    var aclIds = [];
    aclIds.user = '1'; aclIds.vul = 'verified'; aclIds.eul = 'eliteuploader'; aclIds.super = '2'; aclIds.elite = '3';
    aclIds.translator = '4'; aclIds.fmod = '5'; aclIds.thelper = '6'; aclIds.tmod = '7';   aclIds.smod = '8';
    aclIds.staff = '9'; aclIds.admin = '10';

    var returnedData;
    var searchString = new RegExp('<a href="\/user\/[a-z)-9_.-]+\/" class="tag1 aclColor_\{customACL\}">([a-z)-9_.-]+)<\/a>','gi');
    "\{customACL\}".replace(searchString, aclIds[aclRank]);

    $.ajax({
        type: "GET",
        url: "/community/",
        async: false,
        success: function (data) {
            returnedData = data;
            while (matches = searchString.exec(returnedData.html)) {
                onlineUsers.push(matches[1]);
            }
            console.log(onlineUsers);
        },
        returnData: "json"
    });
    return onlineUsers;
}

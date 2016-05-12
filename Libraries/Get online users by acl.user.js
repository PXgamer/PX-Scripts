// ==UserScript==
// @name         Get Online Users By ACL
// @namespace    PXgamer
// @version      0.4
// @description  Get list of users from Community page by ACL
// @author       PXgamer
// @grant        none
// ==/UserScript==

function gouba(aclRank) {

        var aclIds = [];
        aclIds.user = '1'; aclIds.vul = 'verified'; aclIds.eul = 'eliteuploader'; aclIds.super = '2'; aclIds.elite = '3';
        aclIds.translator = '4'; aclIds.fmod = '5'; aclIds.thelper = '6'; aclIds.tmod = '7';   aclIds.smod = '8';
        aclIds.staff = '9'; aclIds.admin = '10';

        var returnedData;
        var matches;
        var onlineUsers = [];

        var s = '<a href="\/user\/[a-z)-9_.-]+\/" class="tag1 aclColor_'+aclIds[aclRank]+'">([a-z)-9_.-]+)<\/a>';
        var searchString = new RegExp(s,'gi');


        console.log(searchString);

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

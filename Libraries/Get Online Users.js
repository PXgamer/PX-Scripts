/*
 *  @name         Get Online Users
 *  @namespace    PXgamer
 *  @version      0.2
 *  @description  Get list of users from Community page
 *  @author       PXgamer
 */

function gou() {
    'use strict';

    var returnedData;
    var searchString = /<a href="\/user\/[a-z)-9_.-]+\/" class="tag1 aclColor_[0-9a-z]">([a-z)-9_.-]+)<\/a>/gi, matches, onlineUsers = [];

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